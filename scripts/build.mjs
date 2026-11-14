import { cp, mkdir, readdir } from 'node:fs/promises';
await import('./generate-pages.mjs');
await mkdir('dist', { recursive: true });
const htmlFiles=(await readdir('.')).filter(f=>f.endsWith('.html'));
for (const file of [...htmlFiles,'styles.css','refinements.css','logo.css','app.js','robots.txt','sitemap.xml']) await cp(file, `dist/${file}`);
await cp('public', 'dist', { recursive: true });
console.log('Static site built to dist/');
