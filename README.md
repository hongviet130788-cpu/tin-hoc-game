# Bản v3: SGK lưu trong thư mục GitHub

Cấu trúc kho GitHub:
```
index.html                      (đã có CFG của thầy khi tải bản mới nhất)
tools/make-index.js             (tạo danh sách tài liệu tự động)
.github/workflows/pages.yml     (tự xuất bản trang + danh sách)
sgk/khoi-10/  sgk/khoi-11/  sgk/khoi-12/   (đặt tệp .md / .pdf ở đây)
```
Quy ước: tên tệp không dấu, có số thứ tự, ví dụ `bai-11-co-so-du-lieu.md`. Dòng đầu tệp .md nên là `# Bài 11. Cơ sở dữ liệu` (đó là tên bài hiện trong hệ thống). Nếu có `bai-11-...pdf` cùng tên với `.md` thì PDF là bản gốc để xem, `.md` là nội dung cho AI.

Cập nhật: thêm/sửa/xóa tệp trên GitHub rồi chờ 1–2 phút, vào tab Tài liệu SGK bấm Làm mới.
