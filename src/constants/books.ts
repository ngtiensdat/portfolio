import { BookInfo } from "@/types/book";

export const DESK_BOOKS: BookInfo[] = [
  {
    id: "profile",
    volNumber: "Tập I",
    title: "Hồ Sơ & Học Vấn",
    subtitle: "Chân dung, định hướng nghề nghiệp, học vấn Phenikaa & chứng chỉ.",
    colorScheme: {
      coverGradient: "from-blue-950 via-slate-900 to-indigo-950",
      borderColor: "border-blue-600/40",
      shadowColor: "shadow-[0_20px_50px_rgba(30,58,138,0.4)]",
      ribbonColor: "bg-amber-400",
      badgeBg: "bg-blue-900/60",
      badgeText: "text-blue-300",
    },
    summaryTags: ["Fresher Full-Stack", "ĐH Phenikaa", "TOEIC 580"],
    totalPages: 2,
  },
  {
    id: "skills",
    volNumber: "Tập II",
    title: "Bí Kíp Kỹ Năng",
    subtitle: "Hộp công cụ công nghệ: TypeScript, NestJS, Spring Boot, AI RAG, Kafka.",
    colorScheme: {
      coverGradient: "from-purple-950 via-slate-900 to-indigo-950",
      borderColor: "border-purple-600/40",
      shadowColor: "shadow-[0_20px_50px_rgba(107,33,168,0.4)]",
      ribbonColor: "bg-purple-400",
      badgeBg: "bg-purple-900/60",
      badgeText: "text-purple-300",
    },
    summaryTags: ["Next.js & NestJS", "Spring Boot", "Kafka & Docker"],
    totalPages: 2,
  },
  {
    id: "projects",
    volNumber: "Tập III",
    title: "Ký Sự Dự Án",
    subtitle: "3 Dự án thực chiến: Food AI, Payment Hub, Learn English (kèm Demo).",
    colorScheme: {
      coverGradient: "from-amber-950 via-stone-900 to-yellow-950",
      borderColor: "border-amber-600/40",
      shadowColor: "shadow-[0_20px_50px_rgba(180,83,9,0.4)]",
      ribbonColor: "bg-emerald-400",
      badgeBg: "bg-amber-900/60",
      badgeText: "text-amber-300",
    },
    summaryTags: ["Food AI (Demo)", "Payment Hub", "Learn English (Demo)"],
    totalPages: 3,
  },
  {
    id: "contact",
    volNumber: "Tập IV",
    title: "Sổ Liên Lạc",
    subtitle: "Danh thiếp, điện thoại, email, mạng xã hội và gửi tin nhắn trực tiếp.",
    colorScheme: {
      coverGradient: "from-emerald-950 via-slate-900 to-teal-950",
      borderColor: "border-emerald-600/40",
      shadowColor: "shadow-[0_20px_50px_rgba(6,78,59,0.4)]",
      ribbonColor: "bg-rose-400",
      badgeBg: "bg-emerald-900/60",
      badgeText: "text-emerald-300",
    },
    summaryTags: ["0337562201", "datga27@gmail.com", "Hà Nội"],
    totalPages: 2,
  },
];

