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
    slug: "food-ai",
    title: "FOOD AI Social Network",
    subtitle: "Mạng xã hội ẩm thực & Hệ thống gợi ý cá nhân hóa tích hợp RAG AI",
    category: "Full-stack",
    role: "Lead Full-Stack Developer (Đồ án Tốt nghiệp CNTT ĐH Phenikaa - Điểm A+)",
    timeline: "01/2026 – 05/2026",
    organization: "Đại học Phenikaa (GVHD: TS. Phạm Ngọc Hưng)",
    status: "Đã nghiệm thu / Đang chạy Live Demo",
    teamSize: "1 thành viên (Phân tích, thiết kế kiến trúc và lập trình trọn gói)",
    description: "Mạng xã hội ẩm thực thông minh tích hợp trợ lý AI hỏi đáp (RAG) và tìm kiếm ngữ nghĩa món ăn.",
    longDescription: "Dự án mạng xã hội ẩm thực kết hợp trí tuệ nhân tạo quy mô lớn. Client xây dựng giao diện hiện đại với Next.js App Router, Zustand và giao tiếp thời gian thực qua WebSocket. Server phát triển bằng NestJS kiến trúc module hóa phân tầng, bảo mật và phân quyền với Prisma ORM trên cơ sở dữ liệu quan hệ 39 bảng. Hệ thống tích hợp LangChain + OpenAI GPT-4 xây dựng trợ lý tư vấn món ăn thông minh theo mô hình RAG, cùng thuật toán Hybrid Search (kết hợp lọc từ khóa BM25 và Vector Similarity 1536 chiều bằng pgvector) để cá nhân hóa đề xuất theo sở thích, vị trí địa lý và ngân sách thực khách.",
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "pgvector", "LangChain", "OpenAI GPT-4", "WebSocket", "Zustand", "Tailwind CSS"],
    features: [
      "Trợ lý AI Chat thông minh ứng dụng kiến trúc RAG với LangChain & OpenAI GPT-4",
      "Semantic & Hybrid Search: Tìm kiếm món ăn kết hợp từ khóa và vector 1536 chiều trên pgvector",
      "Hàm tính điểm xếp hạng cá nhân hóa dựa trên độ tương đồng, hồ sơ sở thích, cự ly và ngân sách",
      "Giao tiếp thời gian thực (Real-time Messaging & Notification) qua NestJS WebSocket Gateway",
      "Kiến trúc cơ sở dữ liệu chuẩn hóa 39 bảng quan hệ phục vụ mạng xã hội, nhà hàng và POS",
      "Quản lý trạng thái Client hiệu năng cao bằng Zustand và xác thực Form với Zod",
      "Triển khai hoàn thiện Live Demo trên hạ tầng đám mây Vercel"
    ],
    image: "/projects/food-ai-banner.png",
    liveUrl: "https://food-ai-frontend-azure.vercel.app/",
    githubUrl: "https://github.com/datga27/food-ai-social-network",
    featured: true,
    stats: [
      { label: "Cơ sở dữ liệu", value: "39 Bảng", hint: "Thiết kế chuẩn 3NF trên PostgreSQL" },
      { label: "Không gian Vector", value: "1536 Chiều", hint: "OpenAI text-embedding-3-small + pgvector" },
      { label: "Mô hình AI", value: "GPT-4 RAG", hint: "LangChain orchestration + Hybrid Search" },
      { label: "Real-Time Chat", value: "< 20ms", hint: "WebSocket Gateway đa kênh" },
    ],
    techStackByCategory: [
      { category: "Frontend", skills: ["Next.js 14 (App Router)", "React", "TypeScript", "Tailwind CSS", "Zustand", "Lucide Icons"] },
      { category: "Backend", skills: ["NestJS", "Node.js", "TypeScript", "Prisma ORM", "WebSocket Gateway"] },
      { category: "Trí tuệ nhân tạo (AI)", skills: ["LangChain", "OpenAI GPT-4", "text-embedding-3-small", "pgvector (Cosine Similarity)", "Hybrid Search"] },
      { category: "Cơ sở dữ liệu & DevOps", skills: ["PostgreSQL 16", "Redis", "Vercel Cloud", "Docker"] },
    ],
    gallery: [
      { src: "/projects/food-ai-banner.png", caption: "Giao diện trang chủ Feed ẩm thực mạng xã hội Food AI", category: "Giao diện" },
      { src: "/projects/food-ai-chat.jpg", caption: "Trợ lý AI tư vấn món ăn thông minh theo ngữ cảnh người dùng RAG", category: "Trợ lý AI" },
      { src: "/projects/food-ai-arch.jpg", caption: "Sơ đồ kiến trúc phân tầng & luồng dữ liệu 3 tầng (Client - Server - AI/DB)", category: "Kiến trúc hệ thống" },
      { src: "/projects/food-ai-erd.jpg", caption: "Sơ đồ ERD 39 bảng cơ sở dữ liệu và mở rộng Vector Embeddings", category: "Cơ sở dữ liệu" },
      { src: "/projects/food-ai-hybrid-search.jpg", caption: "Mô hình tìm kiếm lai Hybrid Search kết hợp BM25 và Vector Similarity", category: "Thuật toán" },
      { src: "/projects/food-ai-vector-query.jpg", caption: "Quy trình truy vấn vector món ăn và tính khoảng cách Cosine trên pgvector", category: "Thuật toán" },
      { src: "/projects/food-ai-user-pref.png", caption: "4 bước suy luận hồ sơ sở thích ẩm thực người dùng từ hành vi tương tác", category: "Thuật toán" },
      { src: "/projects/food-ai-login.jpg", caption: "Giao diện đăng nhập & xác thực bảo mật JWT Token", category: "Bảo mật" },
      { src: "/projects/food-ai-usecase.jpg", caption: "Sơ đồ Use Case tổng quát các phân hệ chức năng", category: "Phân tích thiết kế" }
    ],
    architectureOverview: "Hệ thống xây dựng theo mô hình Client-Server phân tầng phân tách độc lập. Client (Next.js 14) giao tiếp với API Server (NestJS) qua RESTful API và WebSockets. Khi người dùng nhập truy vấn tìm kiếm món ăn hoặc trò chuyện với trợ lý AI, hệ thống chuyển đổi câu hỏi thành vector 1536 chiều qua mô hình text-embedding-3-small, sau đó truy vấn vào PostgreSQL pgvector để tính khoảng cách Cosine (Cosine Distance). Kết quả tìm kiếm ngữ nghĩa được kết hợp với bộ lọc từ khóa BM25, cự ly địa lý (Haversine formula) và ngân sách thực khách để đưa vào prompt ngữ cảnh cho OpenAI GPT-4 sinh lời tư vấn tối ưu nhất.",
    codeStructure: [
      {
        title: "Frontend (Next.js 14 App Router)",
        path: "client/src",
        description: "Ứng dụng giao diện người dùng tương tác cao, hỗ trợ SSR/SSG và Client Components",
        badge: "Next.js + Zustand",
        children: [
          { path: "app/(routes)", description: "Các trang giao diện: feed bài viết, chi tiết món ăn, chatbot AI, nhà hàng, trang cá nhân" },
          { path: "components/ai-chat", description: "Cụm component chat box RAG thời gian thực với streaming response" },
          { path: "components/feed", description: "Danh sách bài viết ẩm thực dạng thẻ mạng xã hội, tương tác like/bình luận" },
          { path: "store/useAuthStore.ts", description: "Quản lý phiên đăng nhập JWT và thông tin user bằng Zustand persist" },
          { path: "store/useChatStore.ts", description: "Quản lý luồng tin nhắn và trạng thái gợi ý của AI" },
        ]
      },
      {
        title: "Backend API Server (NestJS)",
        path: "server/src",
        description: "Kiến trúc modular NestJS phân tách rõ ràng Controller, Service, DTO và Repository",
        badge: "NestJS + Prisma",
        children: [
          { path: "modules/ai-advisor", description: "Tích hợp LangChain, tạo vector embeddings, truy vấn pgvector và gọi GPT-4" },
          { path: "modules/posts", description: "Quản lý bài đăng ẩm thực, upload ảnh, hashtag và tương tác cộng đồng" },
          { path: "modules/restaurants", description: "Quản lý thực đơn, giờ mở cửa, định vị tọa độ GPS và bán hàng POS" },
          { path: "modules/chat-gateway", description: "WebSocket Gateway hỗ trợ chat realtime P2P và broadcast notification" },
          { path: "prisma/schema.prisma", description: "Định nghĩa mô hình 39 thực thể quan hệ và extension vector" }
        ]
      }
    ],
    deepDives: [
      {
        title: "Thuật toán Hybrid Search & Đề xuất món ăn đa tiêu chí",
        challenge: "Nếu chỉ tìm kiếm bằng từ khóa thông thường (SQL LIKE hay BM25), hệ thống sẽ bỏ sót món ăn khi thực khách mô tả ngữ nghĩa (ví dụ: 'món gì thanh đạm giải nhiệt trưa hè'). Ngược lại, nếu chỉ dựa vào Vector Search thuần túy, kết quả có thể xa xôi về mặt địa lý hoặc vượt ngân sách của người dùng.",
        solution: "Xây dựng thuật toán chấm điểm lai đa tiêu chí kết hợp Vector Embeddings (1536 chiều) và các trọng số thực tế: FinalScore = w_intent * S_intent + w_pref * S_pref + w_dist * S_dist + w_budget * S_budget. Trong đó khoảng cách địa lý được tính bằng hàm suy giảm mũ S_dist = max(0.5, exp(-0.07 * d)).",
        codeSnippet: {
          language: "typescript",
          filename: "server/src/modules/ai-advisor/hybrid-search.service.ts",
          code: `// Tính toán điểm số tổng hợp Hybrid Search
async searchFoods(query: string, userPref: UserPreference, userLocation: GeoPoint): Promise<FoodItem[]> {
  const queryEmbedding = await this.openAiService.createEmbedding(query);
  
  // Truy vấn Vector pgvector kết hợp lọc phạm vi giá và vị trí
  const candidates = await this.prisma.$queryRaw\`
    SELECT id, name, price, latitude, longitude,
           1 - (embedding <=> \${queryEmbedding}::vector) as vector_score
    FROM "FoodItem"
    WHERE is_available = true
    ORDER BY embedding <=> \${queryEmbedding}::vector ASC
    LIMIT 50;
  \`;

  // Chấm điểm đa tiêu chí: Ngữ nghĩa + Sở thích + Khoảng cách + Ngân sách
  return candidates.map(item => {
    const distKm = calculateHaversine(userLocation, { lat: item.latitude, lng: item.longitude });
    const distScore = Math.max(0.5, Math.exp(-0.07 * distKm));
    const budgetScore = item.price <= userPref.budgetMax ? 1.0 : Math.max(0, 1 - (item.price - userPref.budgetMax) / userPref.budgetMax);
    
    const finalScore = (0.45 * item.vector_score) + (0.25 * userPref.match(item.categories)) + (0.2 * distScore) + (0.1 * budgetScore);
    return { ...item, finalScore };
  }).sort((a, b) => b.finalScore - a.finalScore).slice(0, 10);
}`
        },
        keyTakeaways: [
          "Kết hợp linh hoạt giữa trí tuệ nhân tạo (Vector Embeddings) và logic toán học thực tế",
          "Độ trễ truy vấn vector dưới 40ms nhờ chỉ mục HNSW trên PostgreSQL",
          "Tăng mức độ hài lòng của người dùng khi gợi ý món ăn vừa hợp khẩu vị vừa gần vị trí hiện tại"
        ]
      },
      {
        title: "Tích hợp Trợ lý AI RAG (LangChain + GPT-4) giảm thiểu ảo giác",
        challenge: "Các mô hình ngôn ngữ lớn (LLM) như GPT-4 thường gặp hiện tượng ảo giác (hallucination) khi được hỏi về thực đơn của một nhà hàng cụ thể, hoặc đưa ra các món ăn không có trong cơ sở dữ liệu của ứng dụng.",
        solution: "Áp dụng kỹ thuật Retrieval-Augmented Generation (RAG). Khi người dùng hỏi chatbot, hệ thống truy xuất top 5 món ăn phù hợp nhất từ cơ sở dữ liệu làm ngữ cảnh (Context Injection) truyền vào System Prompt, ràng buộc AI chỉ được trả lời dựa trên kho dữ liệu thực tế kèm liên kết đặt món.",
        codeSnippet: {
          language: "typescript",
          filename: "server/src/modules/ai-advisor/rag-advisor.service.ts",
          code: `// RAG Chatbot Service với LangChain
async generateFoodAdvice(userId: string, userMessage: string): Promise<string> {
  const contextFoods = await this.hybridSearchService.searchFoods(userMessage, ...);
  const contextText = contextFoods.map(f => \`- \${f.name}: Giá \${f.price}đ tại quán \${f.restaurantName}\`).join('\\n');

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", \`Bạn là chuyên gia ẩm thực thân thiện của Food AI. 
Chỉ đề xuất các món ăn dựa trên danh sách sau:
\${contextText}
Nếu người dùng hỏi món ngoài danh sách, hãy giải thích khéo léo và gợi ý món tương đồng nhất.\`],
    ["human", "{input}"]
  ]);

  const chain = prompt.pipe(this.llmModel).pipe(new StringOutputParser());
  return await chain.invoke({ input: userMessage });
}`
        },
        keyTakeaways: [
          "Loại bỏ hoàn toàn thông tin bịa đặt nhờ ép buộc ngữ cảnh dữ liệu thực từ DB",
          "Tự động trích xuất thuộc tính món ăn để người dùng có thể nhấp vào xem nhà hàng ngay lập tức"
        ]
      }
    ]
  },
  {
    id: "project-payment-hub",
    slug: "payment-hub",
    title: "Payment Hub Middleware",
    subtitle: "Hệ thống trung gian thanh toán & Xử lý bất đồng bộ dữ liệu giao dịch quy mô lớn",
    category: "Full-stack",
    role: "Full-Stack Developer Intern (Lạc Long Quân Software)",
    timeline: "06/2026 – 10/2026",
    organization: "Lạc Long Quân Software",
    status: "Đạt chuẩn nghiệm thu doanh nghiệp",
    teamSize: "Nhóm phát triển theo mô hình Scrum",
    description: "Hệ thống trung gian thanh toán bảo mật cao với Spring Security, RBAC, Audit Log, MinIO và Kafka.",
    longDescription: "Hệ thống middleware xử lý giao dịch thanh toán doanh nghiệp chịu tải cao. Frontend được xây dựng bằng Angular 17 theo cấu trúc Core-Shared-Features (CSF), bám sát bản thiết kế Figma và tích hợp Zod Schema kiểm duyệt form chặt chẽ. Backend phát triển trên nền tảng Java 17 và Spring Boot 3 với bảo mật nhiều lớp Spring Security & JWT HttpOnly Cookie, cơ chế phê duyệt 2 bước Maker-Checker, ghi vết thao tác người dùng (Audit Log) trong transaction độc lập, chuẩn hóa DTO/Entity với MapStruct, lưu trữ tệp MinIO S3 và luồng kiến trúc Event-Driven với Apache Kafka xử lý xuất tệp giao dịch trên 1.000.000 bản ghi.",
    tags: ["Java Spring Boot 3", "Spring Security 6", "Angular 17", "Oracle DB", "PostgreSQL", "Apache Kafka", "MinIO S3", "Redis", "MapStruct", "Bucket4j"],
    features: [
      "Hệ thống bảo mật và phân quyền RBAC nhiều tầng bằng Spring Security 6 & JWT HttpOnly Cookie",
      "Cơ chế phê duyệt 2 bước Maker-Checker kiểm soát rủi ro dữ liệu tài chính với Oracle Stored Procedures",
      "Kiến trúc Event-Driven xuất báo cáo 1.000.000+ bản ghi với Apache Kafka, MinIO S3 & SXSSF",
      "Tính năng Audit Log độc lập (PROPAGATION_REQUIRES_NEW) ghi vết IP Client và lịch sử thay đổi",
      "Bảo vệ hệ thống khỏi tấn công tần suất cao bằng Bucket4j Rate Limiting và Caffeine Cache",
      "Kiến trúc Frontend Angular 17 chuẩn Core-Shared-Features (CSF) tối ưu Lazy Loading",
      "Xử lý ngoại lệ toàn cục GlobalExceptionHandler và ánh xạ hiệu năng cao với MapStruct"
    ],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    liveUrl: undefined,
    githubUrl: "https://github.com/datga27/payment-hub-middleware",
    featured: true,
    stats: [
      { label: "Xuất dữ liệu", value: "1.000.000+", hint: "Bản ghi Excel SXSSF không gây OOM JVM" },
      { label: "Phản hồi API", value: "< 50ms", hint: "Kiến trúc Event-Driven Kafka bất đồng bộ" },
      { label: "Kiểm soát rủi ro", value: "Maker-Checker", hint: "Phê duyệt 2 cấp chuẩn hóa Ngân hàng" },
      { label: "Chống Brute-force", value: "Rate Limiting", hint: "Bucket4j Token Bucket + Token Blacklist" },
    ],
    techStackByCategory: [
      { category: "Backend Enterprise", skills: ["Java 17", "Spring Boot 3", "Spring Security 6", "Spring Data JPA", "MapStruct"] },
      { category: "Frontend Enterprise", skills: ["Angular 17", "TypeScript", "CSF Architecture", "Zod Validation", "SCSS"] },
      { category: "Event-Driven & Storage", skills: ["Apache Kafka", "Redis Pub/Sub", "MinIO Object Storage (S3)", "Apache POI (SXSSF)"] },
      { category: "Cơ sở dữ liệu & Security", skills: ["Oracle Database", "PostgreSQL", "Bucket4j", "Caffeine Cache", "HttpOnly Cookie"] },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80", caption: "Hệ thống điều hành và xử lý trung gian thanh toán tài chính PMH", category: "Tổng quan" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", caption: "Mô hình xử lý dữ liệu giao dịch quy mô lớn hàng triệu bản ghi", category: "Big Data" },
      { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80", caption: "Quy trình kiểm soát rủi ro Maker-Checker & Audit Log đa lớp", category: "Bảo mật ngân hàng" },
    ],
    architectureOverview: "Payment Hub đóng vai trò middleware tài chính kết nối giữa các ứng dụng nghiệp vụ và các cổng thanh toán/ngân hàng. Hệ thống chuyển đổi toàn diện sang Event-Driven Architecture (EDA). Khi người dùng yêu cầu tác vụ nặng (như xuất báo cáo 1.000.000 dòng), API Server lưu tác vụ trạng thái PENDING và đẩy message vào Kafka topic 'export_jobs' rồi trả lời Client ngay trong < 50ms. Một Worker Node độc lập sẽ consume message từ Kafka, dùng Keyset Pagination để stream dữ liệu vào tệp Excel SXSSF, cập nhật % tiến độ realtime qua Redis Pub/Sub và WebSocket, tải tệp lên MinIO S3 và cấp Pre-signed URL cho Client tải an toàn.",
    codeStructure: [
      {
        title: "Backend (Spring Boot 3 & Java 17)",
        path: "code/backend/src/main/java/com/example/paymenthub",
        description: "Kiến trúc Package-by-Layer chuẩn Enterprise kết hợp Base generic CRUD",
        badge: "Spring Boot 3",
        children: [
          { path: "common/base", description: "BaseController, BaseEntity (Audit cột thời gian/người tạo), BaseService, ApiResponse JSON chuẩn" },
          { path: "common/exception", description: "GlobalExceptionHandler bắt lỗi tập trung và trả về format mã lỗi doanh nghiệp" },
          { path: "controller", description: "AuditLogController, ComponentController, GroupCategoryController đón nhận request" },
          { path: "service/impl", description: "Xử lý Maker-Checker, lưu snapshot JSON vào NEW_DATA, gọi Stored Procedure Oracle" },
          { path: "service/export", description: "Worker service lắng nghe Kafka, phân luồng ghi SXSSF Excel và upload MinIO" },
          { path: "repository", description: "Spring Data JPA Repositories và khai báo @Procedure gọi thủ tục Oracle DB" }
        ]
      },
      {
        title: "Frontend (Angular 17 Core-Shared-Features)",
        path: "code/frontend/src/app",
        description: "Tổ chức theo mô hình module CSF hiện đại, độc lập và dễ bảo trì",
        badge: "Angular 17 CSF",
        children: [
          { path: "core/guards", description: "AuthGuard, RoleGuard bảo vệ tuyến đường theo phân quyền JWT" },
          { path: "core/interceptors", description: "TokenInterceptor tự động đính kèm cookie và Refresh Token khi hết hạn" },
          { path: "features/component-mgmt", description: "Module quản lý tham số cấu phần xử lý thanh toán" },
          { path: "features/group-category", description: "Module quản lý danh mục theo nhóm kèm luồng kiểm duyệt Maker-Checker" },
          { path: "shared/components", description: "Bảng dữ liệu phân trang, thanh tiến độ WebSocket realtime, modal xác nhận" }
        ]
      }
    ],
    deepDives: [
      {
        title: "Kiến trúc Xuất 1.000.000+ Giao Dịch Bất Đồng Bộ (Kafka + SXSSF + MinIO)",
        challenge: "Việc xuất 1 triệu bản ghi giao dịch qua HTTP trực tiếp truyền thống gây treo server, nghẽn luồng xử lý và chắc chắn dẫn đến lỗi Java Heap Space (Out Of Memory) hoặc Gateway Timeout (504).",
        solution: "Tách rời hoàn toàn tiến trình tạo file thông qua Event-Driven Architecture: API Server trả kết quả ngay trong < 50ms sau khi ghi nhận job và bắn event vào Kafka. Worker Node thực hiện truy vấn Keyset Pagination (WHERE ID > :lastId), sử dụng Apache POI SXSSFWorkbook giới hạn 1000 dòng trong RAM (còn lại flush tạm ra disk), sau đó upload thẳng luồng byte lên MinIO S3 và tạo đường dẫn Pre-signed URL có chữ ký bảo mật giới hạn thời gian tải 15 phút.",
        codeSnippet: {
          language: "java",
          filename: "backend/src/main/java/com/example/paymenthub/service/export/BigDataExportWorker.java",
          code: `// Worker xử lý xuất dữ liệu triệu dòng từ Kafka
@KafkaListener(topics = "export_jobs", groupId = "export-workers")
public void handleExportJob(ExportJobMessage msg) {
    long lastId = 0;
    long totalExported = 0;
    
    // Sử dụng SXSSFWorkbook chỉ giữ 1000 dòng trên RAM, còn lại flush ra disk
    try (SXSSFWorkbook workbook = new SXSSFWorkbook(1000)) {
        SXSSFSheet sheet = workbook.createSheet("Transactions");
        createHeaderRow(sheet);
        
        while (totalExported < msg.getMaxRows()) {
            // Keyset pagination nhanh gấp 100 lần OFFSET LIMIT
            List<Transaction> batch = transactionRepo.fetchNextBatch(lastId, BATCH_SIZE);
            if (batch.isEmpty()) break;
            
            for (Transaction tx : batch) {
                appendRow(sheet, tx);
                lastId = tx.getId();
                totalExported++;
            }
            
            // Cập nhật tiến độ % qua Redis PubSub -> WebSocket cho UI Client
            progressPublisher.publish(msg.getJobId(), (int) ((totalExported * 100) / msg.getMaxRows()));
        }
        
        // Upload trực tiếp stream lên MinIO Object Storage
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        workbook.write(out);
        String s3Key = minioService.uploadStream("exports/" + msg.getJobId() + ".xlsx", out.toByteArray());
        
        // Tạo presigned URL thời hạn 15 phút
        String downloadUrl = minioService.generatePresignedUrl(s3Key, Duration.ofMinutes(15));
        jobRepo.updateStatus(msg.getJobId(), JobStatus.COMPLETED, downloadUrl);
        progressPublisher.notifyCompleted(msg.getJobId(), downloadUrl);
    }
}`
        },
        keyTakeaways: [
          "Loại bỏ 100% rủi ro OOM của JVM bất kể tệp xuất lớn tới hàng triệu dòng",
          "Thời gian phản hồi người dùng ban đầu giảm từ hàng chục giây xuống dưới 50ms",
          "Tự động giải phóng tài nguyên sau khi quá trình tải kết thúc"
        ]
      },
      {
        title: "Cơ chế Phê Duyệt 2 Bước Maker-Checker & Oracle Stored Procedures",
        challenge: "Trong hệ thống tài chính, nhân viên khởi tạo (Maker) không được phép tự ý thay đổi trực tiếp cấu hình phí hoặc tài khoản đang hoạt động vì có nguy cơ gian lận hoặc sai lệch số liệu tức thời.",
        solution: "Thiết kế cơ chế Maker-Checker chuẩn Ngân hàng: Khi Maker cập nhật bản ghi đã ACTIVE, dữ liệu thay đổi được serialize thành JSON lưu vào cột tạm NEW_DATA và trạng thái chuyển sang PENDING_UPDATE. Khi người kiểm soát (Checker) bấm Phê duyệt, hệ thống gọi Oracle Stored Procedure (PROC_APPROVE_COMPONENT) để validate, kiểm tra chống trùng lặp thời gian hiệu lực và ghi đè dữ liệu chính trong một transaction nguyên tử.",
        codeSnippet: {
          language: "java",
          filename: "backend/src/main/java/com/example/paymenthub/service/impl/ComponentServiceImpl.java",
          code: `// Quy trình duyệt Maker-Checker
@Override
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void approveComponent(Long id, String checkerUsername) {
    ProcessingComponent comp = componentRepository.findById(id)
        .orElseThrow(() -> new CustomBusinessException("404", "Không tìm thấy cấu phần"));
        
    if (comp.getCreatedBy().equalsIgnoreCase(checkerUsername)) {
        throw new CustomBusinessException("403", "Maker không thể tự đóng vai trò Checker để phê duyệt!");
    }
    
    // Gọi Stored Procedure nội tại trong Oracle DB
    Map<String, Object> result = componentRepository.callProcApproveComponent(
        comp.getId(), 
        checkerUsername, 
        comp.getNewData()
    );
    
    if (!"00".equals(result.get("P_ERR_CODE"))) {
        throw new CustomBusinessException((String) result.get("P_ERR_CODE"), (String) result.get("P_ERR_MSG"));
    }
    
    // Ghi nhận Audit Log riêng biệt
    auditLogService.logAction("APPROVE", "PMH_COMPONENTS", comp.getId(), checkerUsername);
}`
        },
        keyTakeaways: [
          "Bảo đảm tính toàn vẹn và tuân thủ tuyệt đối chuẩn mực an ninh kiểm toán tài chính",
          "Dữ liệu gốc đang chạy không bao giờ bị gián đoạn hay ảnh hưởng khi đang chờ duyệt",
          "Tự động ghi nhận vết kiểm toán (Audit Trail) cho mọi thao tác của Maker và Checker"
        ]
      }
    ]
  },
  {
    id: "project-learn-english",
    slug: "learn-english",
    title: "Learn English Web",
    subtitle: "Nền tảng thi thử TOEIC/IELTS & Phòng thi tương tác thời gian thực",
    category: "Full-stack",
    role: "Full-Stack Developer (Dự án cá nhân hoàn thiện)",
    timeline: "02/2026 – 05/2026",
    organization: "Phenikaa University",
    status: "Đang chạy Live Demo thực tế",
    teamSize: "1 thành viên",
    description: "Nền tảng luyện thi tiếng Anh trực tuyến với thi trắc nghiệm TOEIC/IELTS tự động và phòng thi thời gian thực.",
    longDescription: "Website hỗ trợ học và luyện thi chứng chỉ TOEIC / IELTS trực tuyến chuẩn quốc tế. Hệ thống phân quyền chặt chẽ giữa hai nhóm đối tượng Giáo viên và Học sinh (RBAC). Giáo viên có thể tạo đề thi, quản lý ngân hàng câu hỏi đa dạng (nghe audio, đọc hiểu, chọn đáp án đúng). Học sinh làm bài thi trắc nghiệm với tính năng đếm ngược đồng bộ hóa từ máy chủ và chấm điểm tự động. Đặc biệt, tính năng phòng thi trực tuyến tích hợp WebSockets cho phép nhiều thí sinh cùng tham gia một phòng thi theo thời gian thực với bảng xếp hạng điểm tức thì.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "WebSocket", "Socket.io", "Tailwind CSS", "PostgreSQL", "RBAC"],
    features: [
      "Phân quyền RBAC phân tách chức năng dành riêng cho Giáo viên (Quản trị đề thi) và Học sinh (Luyện tập)",
      "Bộ chức năng thi thử trắc nghiệm chuẩn cấu trúc đề thi TOEIC / IELTS với trình nghe audio tích hợp",
      "Chấm điểm tự động tức thì (Instant Auto-Grading) và phân tích phổ điểm, chỉ ra kỹ năng cần cải thiện",
      "Phòng thi trực tuyến Real-time tương tác nhiều người tham gia đồng bộ qua WebSockets",
      "Đồng hồ đếm ngược bảo mật từ phía Server ngăn chặn gian lận thay đổi giờ trên máy học sinh",
      "Giao diện hiện đại, tối ưu trải nghiệm người dùng trên cả máy tính để bàn và điện thoại",
      "Đã triển khai phiên bản Live Demo thực tế hoạt động trơn tru trên Vercel"
    ],
    image: "/projects/learn-english-banner.png",
    liveUrl: "https://learn-english-three-omega.vercel.app/",
    githubUrl: "https://github.com/datga27/learn-english-web",
    featured: true,
    stats: [
      { label: "Độ trễ thi trực tuyến", value: "< 30ms", hint: "WebSocket Room Synchronization" },
      { label: "Ngân hàng đề thi", value: "Chuẩn Quốc Tế", hint: "TOEIC Listening + Reading thang 990" },
      { label: "Tự động chấm", value: "100% Tức thì", hint: "Phân tích phổ điểm và điểm yếu ngữ pháp" },
      { label: "Phân quyền", value: "RBAC 2 Cấp", hint: "Giáo viên soạn đề & Học sinh thi thử" },
    ],
    techStackByCategory: [
      { category: "Giao diện (Frontend)", skills: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "HTML5 Audio Player API"] },
      { category: "Hệ thống (Backend)", skills: ["NestJS", "Node.js", "WebSocket Gateway", "Socket.io", "JWT Auth"] },
      { category: "Dữ liệu & Triển khai", skills: ["PostgreSQL", "Prisma ORM", "Vercel Hosting", "Git / GitHub"] },
    ],
    gallery: [
      { src: "/projects/learn-english-banner.png", caption: "Giao diện hệ thống luyện thi tiếng Anh trực tuyến Learn English", category: "Giao diện chính" },
      { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80", caption: "Không gian làm bài kiểm tra trắc nghiệm tập trung chuẩn TOEIC", category: "Phòng thi" },
      { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", caption: "Phân tích kết quả học tập và theo dõi tiến độ từng kỹ năng", category: "Thống kê" },
    ],
    architectureOverview: "Kiến trúc hệ thống bao gồm Next.js phía Client và NestJS phía Server. Tính năng thi thử thông thường sử dụng REST API để lấy đề thi và nộp đáp án mã hóa. Đối với tính năng phòng thi trực tiếp nhiều người, hệ thống khởi tạo Room trên WebSocket Gateway. Server đóng vai trò trung tâm (Authority Timekeeper) quản lý bộ đếm thời gian, đảm bảo tất cả thí sinh vào thi và nộp bài cùng một thời điểm mà không phụ thuộc vào đồng hồ thiết bị của người dùng.",
    codeStructure: [
      {
        title: "Frontend (Next.js & React)",
        path: "vocabulary-app/frontend/src",
        description: "Giao diện thi trực tuyến, nghe audio và xem kết quả phân tích",
        badge: "Next.js + Tailwind",
        children: [
          { path: "app/exam/[id]", description: "Màn hình làm bài thi với bộ đếm giờ và điều hướng danh sách câu hỏi" },
          { path: "app/realtime-room", description: "Phòng thi trực tuyến đồng bộ nhiều người chơi qua WebSocket" },
          { path: "components/audio-player", description: "Trình nghe audio bài thi Listening chống tua lặp gian lận" },
          { path: "components/score-chart", description: "Biểu đồ phân tích năng lực Reading / Listening" }
        ]
      },
      {
        title: "Backend (NestJS)",
        path: "vocabulary-app/backend/src",
        description: "API quản lý đề thi, chấm điểm tự động và Gateway phòng thi trực tuyến",
        badge: "NestJS + WebSockets",
        children: [
          { path: "modules/exam", description: "CRUD ngân hàng câu hỏi TOEIC/IELTS và logic tính điểm thang 990" },
          { path: "modules/exam-room", description: "WebSocket Gateway quản lý phòng thi, đếm ngược và broadcast điểm" },
          { path: "modules/auth", description: "Phân quyền RBAC giáo viên và học viên qua JWT Token" }
        ]
      }
    ],
    deepDives: [
      {
        title: "Bộ đếm giờ trung tâm Server-Authoritative chống gian lận thi",
        challenge: "Nếu sử dụng đồng hồ đếm ngược phía Client (JavaScript setInterval trong trình duyệt), học sinh có thể chỉnh sửa đồng hồ máy tính hoặc can thiệp biến script để kéo dài thời gian làm bài kiểm tra.",
        solution: "Thiết kế bộ đếm thời gian Server-Authoritative trên NestJS WebSocket Gateway. Server lưu trữ thời điểm bắt đầu thi (startTime) và thời lượng (duration). Cứ mỗi giây Server broadcast xung thời gian còn lại (time_tick). Khi đồng hồ server về 0, hệ thống tự động khóa quyền nộp bài và kích hoạt tính năng nộp bài cưỡng bức (force submit) cho toàn bộ học sinh.",
        codeSnippet: {
          language: "typescript",
          filename: "backend/src/modules/exam-room/exam-room.gateway.ts",
          code: `// WebSocket Gateway quản lý phòng thi
@SubscribeMessage('start_exam_room')
handleStartExamRoom(@MessageBody() data: { roomId: string }, @ConnectedSocket() client: Socket) {
  const room = this.roomService.getRoom(data.roomId);
  if (!room.isHost(client.id)) throw new WsException('Chỉ giáo viên mới có quyền mở bài thi!');

  room.startTimer((remainingSeconds) => {
    // Broadcast thời gian thực tế xuống tất cả học sinh trong phòng
    this.server.to(data.roomId).emit('timer_tick', { remainingSeconds });
    
    // Khi hết giờ, thu bài tự động
    if (remainingSeconds <= 0) {
      this.server.to(data.roomId).emit('force_submit_exam');
      room.lockRoom();
    }
  });
}`
        },
        keyTakeaways: [
          "Bảo đảm 100% công bằng cho tất cả thí sinh tham gia kỳ thi trực tuyến",
          "Tự động thu bài ngay cả khi học sinh cố tình mất kết nối hoặc không bấm nộp"
        ]
      }
    ]
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

