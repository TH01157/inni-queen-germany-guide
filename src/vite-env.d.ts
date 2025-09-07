/// <reference types="vite/client" />

// Khi dùng import.meta.glob({ as: 'raw' }) với .md
declare module "*.md" {
  const raw: string;
  export default raw;
}
