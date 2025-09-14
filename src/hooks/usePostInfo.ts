import { useEffect, useState } from "react";
import type { PostMeta } from "@/types/post";

const commitCache = new Map<string, string>(); // sourcePath -> dateText (vi-VN)
const readCache   = new Map<string, number>(); // sourcePath -> minutes

async function fetchLatestCommitISODate(path: string) {
  try{
    const url =
      `https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(path)}&per_page=1`;
    const res = await fetch(url);
    if (!res.ok) return undefined;
    const data = await res.json();
    return data?.[0]?.commit?.committer?.date ?? data?.[0]?.commit?.author?.date;
  }catch{ return undefined; }
}

function formatViDate(dt: Date) {
  return dt.toLocaleDateString("vi-VN", { year:"numeric", month:"long", day:"numeric" });
}

function readingTimeMinutesFromText(text: string, wpm = 200) {
  const cleaned = text.replace(/<\/?[^>]+>/g," ").replace(/{[^}]*}/g," ").replace(/[\r\n]+/g," ")
    .replace(/\s+/g," ").trim();
  const words = cleaned ? cleaned.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / wpm));
}

async function estimateReadTimeFromSource(rawPath: string) {
  try{
    const raw = `https://raw.githubusercontent.com/TH01157/inni-queen-germany-guide/main/${rawPath}`;
    const res = await fetch(raw);
    if (!res.ok) return undefined;
    const txt = await res.text();
    return readingTimeMinutesFromText(txt);
  }catch{ return undefined; }
}

export function usePostInfo(post: PostMeta | null | undefined) {
  const safePath = post?.sourcePath ?? "";
  const [dateText, setDateText] = useState(commitCache.get(safePath) || "");
  const [readMins, setReadMins] = useState(readCache.get(safePath) ?? 0);

  useEffect(() => {
    if(!safePath){ setDateText(""); setReadMins(0); return; }
    let cancelled = false;

    (async () => {
      // Ngày cập nhật
      try{
        if (!commitCache.has(safePath)) {
          const iso = await fetchLatestCommitISODate(safePath);
          const txt = iso ? formatViDate(new Date(iso)) : "";
          commitCache.set(safePath, txt);
          if (!cancelled) setDateText(txt);
        } else {
          setDateText(commitCache.get(safePath) || "");
        }
      }catch{}

      // Thời gian đọc
      try{
        if (!readCache.has(safePath)) {
          const mins = await estimateReadTimeFromSource(safePath);
          const v = mins ?? 0;
          readCache.set(safePath, v);
          if (!cancelled) setReadMins(v);
        } else {
          setReadMins(readCache.get(safePath) ?? 0);
        }
      }catch{}
    })();

    return () => { cancelled = true; };
  }, [safePath]);

  return { dateText, readMins };
}
