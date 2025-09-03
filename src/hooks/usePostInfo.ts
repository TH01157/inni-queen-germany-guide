import { useEffect, useState } from "react";
import type { PostMeta } from "@/data/posts";

const commitCache = new Map<string, string>(); // sourcePath -> dateText (vi-VN)
const readCache = new Map<string, number>();   // sourcePath -> minutes

async function fetchLatestCommitISODate(path: string) {
  const url = `https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(
    path
  )}&per_page=1`;
  const res = await fetch(url);
  if (!res.ok) return undefined;
  const data = await res.json();
  return data?.[0]?.commit?.committer?.date ?? data?.[0]?.commit?.author?.date;
}

function formatViDate(dt: Date) {
  return dt.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readingTimeMinutesFromText(text: string, wpm = 200) {
  const cleaned = text
    .replace(/<\/?[^>]+>/g, " ")
    .replace(/{[^}]*}/g, " ")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = cleaned ? cleaned.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / wpm));
}

async function estimateReadTimeFromSource(rawPath: string) {
  const raw = `https://raw.githubusercontent.com/TH01157/inni-queen-germany-guide/main/${rawPath}`;
  const res = await fetch(raw);
  if (!res.ok) return undefined;
  const txt = await res.text();
  return readingTimeMinutesFromText(txt);
}

export function usePostInfo(post: PostMeta) {
  const [dateText, setDateText] = useState<string>(
    commitCache.get(post.sourcePath) || ""
  );
  const [readMins, setReadMins] = useState<number>(
    readCache.get(post.sourcePath) ?? 0
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // date
      if (!commitCache.has(post.sourcePath)) {
        const iso = await fetchLatestCommitISODate(post.sourcePath).catch(() => undefined);
        const txt = iso ? formatViDate(new Date(iso)) : "";
        commitCache.set(post.sourcePath, txt);
        if (!cancelled) setDateText(txt);
      } else {
        setDateText(commitCache.get(post.sourcePath) || "");
      }

      // read time
      if (!readCache.has(post.sourcePath)) {
        const mins = await estimateReadTimeFromSource(post.sourcePath).catch(() => undefined);
        const v = mins ?? 0;
        readCache.set(post.sourcePath, v);
        if (!cancelled) setReadMins(v);
      } else {
        setReadMins(readCache.get(post.sourcePath) ?? 0);
      }
    })();
    return () => { cancelled = true; };
  }, [post.sourcePath]);

  return { dateText, readMins };
}
