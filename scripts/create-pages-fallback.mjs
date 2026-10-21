import { copyFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const indexHtml = resolve('dist', 'index.html');
const fallbackHtml = resolve('dist', '404.html');

if (!existsSync(indexHtml)) {
  console.error(`GitHub Pages fallback creation failed: ${indexHtml} not found.`);
  process.exit(1);
}

copyFileSync(indexHtml, fallbackHtml);
console.log('Created dist/404.html for GitHub Pages route fallback.');
