# 📁 THƯ MỤC HÌNH ẢNH DỰ ÁN (PORTFOLIO PROJECT ASSETS)

Thư mục này quản lý toàn bộ hình ảnh và sơ đồ kỹ thuật hiển thị trên trang chủ và trang chi tiết (Case Study) của từng dự án.

---

## 1. Cấu trúc thư mục theo dự án

```text
public/projects/
├── food-ai/                  # Dự án FOOD AI Social Network & RAG AI
│   ├── banner.png            # [Ảnh thật] Ảnh bìa hiển thị tại trang chủ & Case study
│   ├── chat-ai.jpg           # [Ảnh thật] Giao diện Chatbot AI RAG
│   ├── architecture.jpg      # [Ảnh thật] Sơ đồ kiến trúc phân tầng 3 lớp
│   ├── erd.jpg               # [Ảnh thật] Sơ đồ ERD 39 bảng cơ sở dữ liệu
│   ├── usecase.jpg           # [Ảnh thật] Sơ đồ Use Case tổng quát
│   ├── hybrid-search.jpg     # [Ảnh thật] Sơ đồ thuật toán tìm kiếm lai Hybrid Search
│   ├── vector-query.jpg      # [Ảnh thật] Sơ đồ truy vấn vector embeddings pgvector
│   ├── user-preferences.png  # [Ảnh thật] 4 bước suy luận sở thích người dùng
│   └── login.jpg             # [Ảnh thật] Giao diện đăng nhập & JWT
│
├── payment-hub/              # Dự án Payment Hub Middleware (1M+ Records)
│   ├── banner.svg            # Ảnh bìa tổng quan hệ sinh thái thanh toán
│   ├── architecture.svg      # Sơ đồ kiến trúc Event-Driven (Kafka, MinIO, SXSSF Stream)
│   ├── sequence-maker-checker.svg # Sơ đồ luồng Maker-Checker & Oracle Stored Procedures
│   ├── erd.svg               # Sơ đồ thực thể quan hệ (AuditLog, Category, Components, ExportJob)
│   ├── usecase.svg           # Sơ đồ Use Case phân quyền Maker vs Checker
│   └── dashboard.svg         # Giao diện bảng điều khiển quản trị tham số & xuất file
│
└── learn-english/            # Dự án Learn English Web & Real-Time Exam System
    ├── banner.png            # [Ảnh thật] Ảnh bìa giao diện chính từ ứng dụng
    ├── architecture.svg      # Sơ đồ kiến trúc WebSocket Sync & Server-Authoritative Timer
    ├── usecase.svg           # Sơ đồ Use Case phân hệ Giáo viên (Host) vs Học sinh (Student)
    ├── erd.svg               # Sơ đồ thực thể quan hệ (Exams, Questions, Rooms, Submissions)
    ├── realtime-room.svg     # Giao diện phòng thi trực tuyến thời gian thực
    └── score-report.svg      # Giao diện báo cáo phân tích phổ điểm TOEIC
```

---

## 2. Cách thay thế ảnh mẫu bằng ảnh thật của bạn

1. Bạn chỉ cần chụp ảnh màn hình hoặc xuất sơ đồ (định dạng `.png`, `.jpg` hoặc `.svg`).
2. Đổi tên ảnh thành đúng tên tương ứng trong thư mục (ví dụ `usecase.png` hoặc `architecture.png`).
3. Chép đè vào thư mục dự án tương ứng:
   - Nếu bạn giữ đuôi file giống ảnh mẫu (`.svg`), chỉ cần chép đè vào là xong.
   - Nếu bạn dùng đuôi ảnh khác (`.png`, `.jpg`), bạn chỉ cần cập nhật đường dẫn tương ứng trong `src/constants/portfolio.ts`.

