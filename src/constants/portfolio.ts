import { PersonalInfo, SkillCategory, Project, ExperienceItem, CertificateItem } from "@/types/portfolio";

export const PERSONAL_DATA: PersonalInfo = {
  name: "Nguyễn Tiến Đạt",
  title: "Fresher Full-Stack Developer",
  subtitle: "Sinh viên năm cuối CNTT đam mê xây dựng hệ thống web toàn diện với Next.js, NestJS, Java Spring Boot & tích hợp AI.",
  status: "🟢 Sẵn sàng nhận dự án mới",
  location: "Phường Hoàng Liệt, Quận Hoàng Mai, Hà Nội",
  email: "datga27@gmail.com",
  phone: "0337562201",
  birthDate: "22/01/2004",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  resumeUrl: "#resume",
  stats: [
    { label: "Dự án Full-Stack", value: "3+" },
    { label: "GPA Đại học", value: "3.0 / 4.0" },
    { label: "Chứng chỉ TOEIC", value: "580" },
    { label: "Kỳ thực tập OJT", value: "2" },
  ],
  aboutText: [
    "Tôi là Fresher Full-Stack Developer, sinh viên năm cuối chuyên ngành Lập trình Web - Khoa Hệ thống thông tin, Đại học Phenikaa.",
    "Tôi đã trực tiếp tham gia phát triển 3 dự án full-stack thực chiến sử dụng hệ sinh thái TypeScript (NestJS, Next.js, PostgreSQL, Prisma ORM) và Java Spring Boot kết hợp Angular. Tôi có kinh nghiệm xây dựng RESTful API, hệ thống bảo mật & phân quyền RBAC, giao tiếp thời gian thực với WebSocket và tích hợp AI (mô hình RAG với LangChain, OpenAI API).",
    "Quen thuộc với quy trình phát triển chuyên nghiệp theo Agile/Scrum, quản lý nhánh Git/GitFlow, code review và tự nghiên cứu công nghệ mới. Mục tiêu của tôi là gia nhập đội ngũ phát triển sản phẩm thực tế với vị trí Full-Stack Developer để cống hiến và nâng cao năng lực."
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Sử dụng thường xuyên",
    skills: [
      { name: "TypeScript / JavaScript", level: "Thường xuyên" },
      { name: "Next.js / React", level: "Thường xuyên" },
      { name: "NestJS / Node.js", level: "Thường xuyên" },
      { name: "PostgreSQL / Prisma ORM", level: "Thường xuyên" },
      { name: "HTML5 / CSS / Tailwind", level: "Thường xuyên" },
      { name: "Git / GitFlow", level: "Thường xuyên" },
    ],
  },
  {
    title: "Đã dùng trong dự án thực tế",
    skills: [
      { name: "Java Spring Boot", level: "Dự án" },
      { name: "Spring Security & JWT", level: "Dự án" },
      { name: "Angular", level: "Dự án" },
      { name: "Oracle Database", level: "Dự án" },
      { name: "WebSocket (Real-time)", level: "Dự án" },
      { name: "LangChain & OpenAI API (RAG)", level: "Dự án" },
      { name: "Zustand & Zod Schema", level: "Dự án" },
      { name: "MapStruct & MinIO", level: "Dự án" },
    ],
  },
  {
    title: "Cơ sở hạ tầng & Nền tảng",
    skills: [
      { name: "Docker", level: "Cơ bản" },
      { name: "Redis Caching", level: "Cơ bản" },
      { name: "Apache Kafka", level: "Cơ bản" },
      { name: "Vercel Deployment", level: "Khá" },
    ],
  },
  {
    title: "Kỹ năng mềm & Quy trình",
    skills: [
      { name: "Agile / Scrum", level: "Tốt" },
      { name: "Code Review & Teamwork", level: "Tốt" },
      { name: "Tự nghiên cứu công nghệ", level: "Tốt" },
      { name: "Tiếng Anh (TOEIC 580)", level: "Trung cấp" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-food-ai",
    title: "FOOD AI Social Network",
    category: "Full-stack",
    description: "Mạng xã hội ẩm thực thông minh tích hợp trợ lý AI hỏi đáp (RAG) và tìm kiếm ngữ nghĩa món ăn.",
    longDescription: "Dự án mạng xã hội ẩm thực kết hợp trí tuệ nhân tạo. Phía Client xây dựng giao diện hiện đại với Zustand và giao tiếp thời gian thực qua WebSocket. Server phát triển bằng NestJS với kiến trúc module hóa, bảo mật và phân quyền qua Prisma ORM. Đặc biệt, hệ thống tích hợp LangChain + OpenAI API để xây dựng trợ lý AI Chat thông minh, cùng script vector embeddings phục vụ tìm kiếm ngữ nghĩa (Semantic Search) trên kho dữ liệu thực phẩm.",
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "LangChain", "OpenAI API", "WebSocket", "Zustand", "Vector Embeddings"],
    features: [
      "Trợ lý AI Chat thông minh ứng dụng kiến trúc RAG với LangChain & OpenAI API",
      "Semantic Search: Tìm kiếm món ăn bằng ngữ nghĩa dựa trên Vector Embeddings",
      "Giao tiếp thời gian thực (Real-time) qua WebSockets",
      "Hệ thống RESTful API bảo mật và phân quyền quản trị",
      "Quản lý trạng thái ứng dụng phía Client bằng Zustand",
      "Triển khai Live Demo trên nền tảng Vercel"
    ],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://food-ai-frontend-azure.vercel.app/",
    githubUrl: "https://github.com/example/food-ai-social-network",
    featured: true,
  },
  {
    id: "project-payment-hub",
    title: "Payment Hub Middleware",
    category: "Full-stack",
    description: "Hệ thống trung gian thanh toán bảo mật cao với Spring Security, RBAC, Audit Log, MinIO và Kafka.",
    longDescription: "Hệ thống middleware xử lý giao dịch thanh toán doanh nghiệp. Frontend được xây dựng bám sát bản thiết kế Figma và tích hợp Zod Schema kiểm duyệt dữ liệu form chặt chẽ. Backend phát triển trên nền tảng Java Spring Boot với bảo mật Spring Security & JWT Cookie, phân quyền RBAC đa cấp, ghi vết thao tác người dùng (Audit Log), chuẩn hóa DTO/Entity với MapStruct, xử lý ngoại lệ tập trung (Global Exception), lưu trữ MinIO và luồng truyền thông điệp không đồng bộ với Apache Kafka.",
    tags: ["Java Spring Boot", "Spring Security", "JWT", "Oracle DB", "Kafka", "MinIO", "MapStruct", "Zod", "Figma"],
    features: [
      "Hệ thống bảo mật và phân quyền RBAC nhiều tầng bằng Spring Security & JWT Cookie",
      "Tính năng Audit Log tự động ghi vết và lưu trữ toàn bộ lịch sử thao tác",
      "Tối ưu tốc độ tải và xử lý bất đồng bộ kết hợp MinIO và Apache Kafka",
      "Thiết kế cơ sở dữ liệu quan hệ chuẩn hóa (User, Role, Audit Log, Category, Component)",
      "Xử lý lỗi tập trung Global Exception và ánh xạ dữ liệu siêu tốc bằng MapStruct"
    ],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    liveUrl: undefined,
    githubUrl: "https://github.com/example/payment-hub-middleware",
    featured: true,
  },
  {
    id: "project-learn-english",
    title: "Learn English Web",
    category: "Full-stack",
    description: "Nền tảng luyện thi tiếng Anh trực tuyến với thi trắc nghiệm TOEIC/IELTS tự động và phòng thi thời gian thực.",
    longDescription: "Website hỗ trợ học và luyện thi chứng chỉ TOEIC / IELTS trực tuyến. Hệ thống phân quyền chặt chẽ giữa hai nhóm đối tượng Giáo viên và Học sinh. Giáo viên có thể tạo đề thi, quản lý ngân hàng câu hỏi. Học sinh làm bài thi trắc nghiệm với tính năng đếm ngược và chấm điểm tự động. Đặc biệt, tính năng phòng thi online tích hợp WebSockets cho phép tổ chức thi đấu/quiz trực tiếp theo thời gian thực.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "WebSocket", "Tailwind CSS", "PostgreSQL", "RBAC"],
    features: [
      "Phân quyền RBAC phân tách chức năng dành riêng cho Giáo viên và Học sinh",
      "Bộ chức năng thi thử trắc nghiệm chuẩn cấu trúc TOEIC / IELTS có chấm điểm tự động",
      "Phòng kiểm tra trực tuyến Real-time tương tác nhiều người chơi với WebSockets",
      "Giao diện hiện đại, dễ sử dụng và tối ưu hiển thị trên mọi thiết bị",
      "Đã triển khai Live Demo thực tế trên Vercel"
    ],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://learn-english-three-omega.vercel.app/",
    githubUrl: "https://github.com/example/learn-english-web",
    featured: true,
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "exp-lq",
    role: "Thực tập sinh Full-Stack Developer",
    company: "Lạc Long Quân Software",
    period: "06/2026 – 10/2026",
    description: [
      "Tham gia dự án thực tế theo mô hình Agile/Scrum, cùng nhóm phân tích yêu cầu nghiệp vụ, phát triển và hoàn thiện tính năng theo kế hoạch sprint.",
      "Xây dựng giao diện ứng dụng bằng Angular, tích hợp với RESTful API viết bằng Java Spring Boot; phát hiện, sửa lỗi và tối ưu hóa hiệu năng hệ thống.",
      "Sử dụng Git để quản lý phiên bản mã nguồn, tham gia kiểm thử chức năng và thực hiện code review chéo trong đội ngũ.",
    ],
    skills: ["Angular", "Java Spring Boot", "Oracle Database", "RESTful API", "Agile/Scrum", "Git"],
    type: "work",
  },
  {
    id: "exp-rikkei",
    role: "Thực tập sinh Full-Stack Developer",
    company: "Rikkei Education",
    period: "02/2026 – 06/2026",
    description: [
      "Học tập và làm việc theo lộ trình Full-Stack Developer chuẩn doanh nghiệp với NestJS, Next.js, PostgreSQL và Prisma ORM.",
      "Thiết kế và phát triển dự án theo mô hình Client–Server: xây dựng RESTful API bằng NestJS, giao diện Next.js, thiết kế và thao tác cơ sở dữ liệu PostgreSQL qua Prisma ORM.",
      "Thực hiện đầy đủ các khâu: phân tích yêu cầu, thiết kế lược đồ cơ sở dữ liệu, phát triển tính năng, viết kiểm thử và quản lý mã nguồn bằng Git.",
      "Hoàn thành chương trình đào tạo thực chiến OJT OneConnect (06/2026): mô phỏng quy trình Agile–Scrum doanh nghiệp dưới sự hướng dẫn trực tiếp từ các Tech Lead.",
    ],
    skills: ["Next.js", "NestJS", "PostgreSQL", "Prisma ORM", "TypeScript", "Agile/Scrum"],
    type: "work",
  },
  {
    id: "edu-phenikaa",
    role: "Sinh viên ngành Công nghệ Thông tin",
    company: "Trường Đại học Phenikaa",
    period: "10/2022 – 12/2026",
    description: [
      "Khoa Hệ thống thông tin - Chuyên ngành Lập trình Web.",
      "Điểm trung bình tích lũy (GPA dự kiến): 3.0 / 4.0 (Xếp loại tốt nghiệp dự kiến: Khá).",
      "Nắm vững nền tảng khoa học máy tính, cấu trúc dữ liệu, giải thuật, cơ sở dữ liệu quan hệ và kiến trúc phát triển ứng dụng web hiện đại.",
    ],
    skills: ["Lập trình Web", "Hệ thống thông tin", "Cấu trúc dữ liệu", "Database Design", "OOP"],
    type: "education",
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-toeic",
    name: "Chứng chỉ TOEIC 580",
    issuer: "ETS",
    date: "12/2025",
    score: "580 Điểm",
    description: [
      "Trình độ tiếng Anh Trung cấp (Intermediate).",
      "Khả năng đọc hiểu tài liệu kỹ thuật, nghiên cứu công nghệ mới và đọc hiểu tài liệu API tiếng Anh tốt.",
      "Giao tiếp cơ bản trong môi trường làm việc quốc tế và doanh nghiệp công nghệ.",
    ],
  },
  {
    id: "cert-ojt",
    name: "Chứng nhận Internship OneConnect",
    issuer: "Rikkei Education",
    date: "06/2026",
    description: [
      "Tham gia chương trình đào tạo thực chiến (OJT) mô phỏng quy trình Agile–Scrum chuẩn doanh nghiệp dưới sự dẫn dắt của các Tech Lead.",
      "Phối hợp nhóm phát triển dự án thực tế, nâng cao kỹ năng làm việc nhóm (Teamwork), thuyết trình và giải quyết vấn đề.",
    ],
  },
];

export const PORTFOLIO_DATA = {
  personal: PERSONAL_DATA,
  skills: SKILL_CATEGORIES,
  projects: PROJECTS_DATA,
  experiences: EXPERIENCES_DATA,
  certificates: CERTIFICATES_DATA,
};

