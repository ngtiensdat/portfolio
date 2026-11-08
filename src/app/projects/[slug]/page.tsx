import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS_DATA, PERSONAL_DATA } from "@/constants/portfolio";
import ProjectCaseStudy from "@/components/features/ProjectCaseStudy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InteractiveSpotlight } from "@/components/effects/InteractiveSpotlight";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Không tìm thấy dự án | Nguyễn Tiến Đạt",
    };
  }

  return {
    title: `${project.title} | Case Study Kỹ Thuật - ${PERSONAL_DATA.name}`,
    description: `${project.subtitle || project.description} Phân tích chi tiết kiến trúc, công nghệ và mã nguồn thực tế.`,
    openGraph: {
      title: `${project.title} - Case Study Kỹ Thuật`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

async function ProjectContent({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS_DATA[currentIndex];
  const prevProject =
    PROJECTS_DATA[
      (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length
    ];
  const nextProject =
    PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <ProjectCaseStudy
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-x-hidden">
      <ScrollProgress />
      <InteractiveSpotlight />
      <Navbar />
      <div className="flex-1">
        <Suspense
          fallback={
            <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                Đang tải dữ liệu kiến trúc dự án...
              </p>
            </div>
          }
        >
          <ProjectContent params={params} />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
