import { cp, mkdir, readdir } from 'node:fs/promises';
await import('./generate-pages.mjs');
await mkdir('dist', { recursive: true });
const htmlFiles=(await readdir('.')).filter(f=>f.endsWith('.html'));
for (const file of [...htmlFiles,'styles.css','refinements.css','logo.css','menu-preview.css','app.js','robots.txt','sitemap.xml','CNAME']) await cp(file, `dist/${file}`);
await cp('public', 'dist', { recursive: true });
await mkdir('dist/public', { recursive: true });
await cp('public', 'dist/public', { recursive: true });
console.log('Static site built to dist/');
