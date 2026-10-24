// Quét thư mục sgk/khoi-10|11|12 và tạo sgk/index.json (chạy tự động khi đăng lên GitHub)
const fs = require('fs'), path = require('path');
const root = 'sgk', out = [];
fs.mkdirSync(root, { recursive: true });
const title = (f, txt) => { const m = txt && txt.match(/^#\s+(.+)$/m); return m ? m[1].trim() : path.basename(f).replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '); };
for (const g of ['10', '11', '12']) {
  const dir = path.join(root, 'khoi-' + g);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).sort(), set = new Set(files);
  for (const f of files) {
    if (/^readme/i.test(f) || f.startsWith('.')) continue;
    const ext = path.extname(f).toLowerCase(), stem = f.slice(0, f.length - ext.length), p = `${root}/khoi-${g}/${f}`;
    if (ext === '.md' || ext === '.txt') {
      const e = { title: title(f, fs.readFileSync(path.join(dir, f), 'utf8')), grade: g, kind: 'md', path: p };
      if (set.has(stem + '.pdf')) e.pdf = `${root}/khoi-${g}/${stem}.pdf`;
      out.push(e);
    } else if (ext === '.pdf' && !set.has(stem + '.md') && !set.has(stem + '.txt')) {
      out.push({ title: title(f), grade: g, kind: 'pdf', path: p });
    }
  }
}
fs.writeFileSync(path.join(root, 'index.json'), JSON.stringify(out, null, 1));
console.log(out.length + ' tài liệu SGK');
