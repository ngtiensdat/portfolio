# 📁 THƯ MỤC HÌNH ẢNH & SƠ ĐỒ KỸ THUẬT DỰ ÁN (PROJECT ASSETS)

Thư mục này quản lý toàn bộ sơ đồ kiến trúc kỹ thuật và Use Case hiển thị trên trang chủ và trang chi tiết (Case Study) của 4 dự án.

> [!NOTE]
> Toàn bộ sơ đồ được thiết kế theo phong cách tối giản công nghệ cao (**Nét đen nền trắng - Black & White Architectural Blueprint**) chuẩn UML & Workflow Pipeline, giúp giao diện không bị rối mắt và thể hiện rõ tư duy kỹ thuật của kỹ sư phần mềm.

---

## 1. Cấu trúc thư mục theo 4 dự án

```text
public/projects/
├── food-ai/                  # Dự án FOOD AI Social Network & RAG AI
│   ├── workflow.svg          # [Blueprint B&W] Sơ đồ luồng xử lý: Hybrid Search & RAG Context
│   ├── usecase.svg           # [Blueprint B&W] Sơ đồ Use Case phân hệ Thực khách & AI Engine
│   ├── erd.jpg               # Sơ đồ ERD 39 bảng cơ sở dữ liệu và vector embeddings
│   ├── hybrid-search.jpg     # Sơ đồ thuật toán tìm kiếm lai Hybrid Search
│   ├── vector-query.jpg      # Sơ đồ truy vấn vector và khoảng cách Cosine
│   ├── user-preferences.png  # Sơ đồ 4 bước suy luận sở thích ẩm thực
│   └── architecture.jpg      # Sơ đồ kiến trúc phân tầng 3 lớp
│
├── payment-hub/              # Dự án Payment Hub Middleware (1M+ Records)
│   ├── workflow.svg          # [Blueprint B&W] Sơ đồ luồng xử lý xuất 1M+ bất đồng bộ (Kafka + SXSSF + MinIO)
│   └── usecase.svg           # [Blueprint B&W] Sơ đồ Use Case phân quyền Maker vs Checker
│
├── learn-english/            # Dự án Learn English Web & Real-Time Exam System
│   ├── workflow.svg          # [Blueprint B&W] Sơ đồ luồng xử lý điều phối phòng thi Server-Authoritative
│   └── usecase.svg           # [Blueprint B&W] Sơ đồ Use Case phân hệ Giáo viên vs Học sinh
│
└── portfolio-frontend/       # Dự án Interactive Portfolio & Design System
    ├── workflow.svg          # [Blueprint B&W] Sơ đồ luồng xử lý hiệu năng Next.js 16, Turbopack & GPU 3D
    └── usecase.svg           # [Blueprint B&W] Sơ đồ Use Case trải nghiệm Nhà tuyển dụng & Developer
```

---

## 2. Tiêu chuẩn thiết kế sơ đồ (Nét đen nền trắng)
- Tỷ lệ khung hình: **16:9** (`1200 x 675`) chuẩn HD hiển thị sắc nét trên cả màn hình lớn và điện thoại.
- Màu nền: **Trắng tinh khiết** (`#ffffff`), không sử dụng ảnh mockup ảo gây phân tâm.
- Đường nét: **Nét đen kỹ thuật** (`#111827`, nét 2px), phân định rõ ràng các tầng kiến trúc, luồng xử lý và actor.
- Hoàn toàn tương thích và hiển thị rõ ràng trên cả Light mode lẫn Dark mode khi phóng to trong modal Lightbox.
