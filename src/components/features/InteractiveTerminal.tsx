"use client";

import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { Terminal, Send, Sparkles, CornerDownLeft, RotateCcw } from "lucide-react";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState<string>("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: "init",
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">
            ⚡ Chào mừng bạn đến với Terminal tương tác của Nguyễn Tiến Đạt!
          </p>
          <p className="text-xs text-slate-400">
            Gõ lệnh vào bên dưới hoặc nhấp các phím tắt nhanh: <span className="text-emerald-400 font-semibold">[help]</span>, <span className="text-teal-400 font-semibold">[skills]</span>, <span className="text-amber-400 font-semibold">[projects]</span>, <span className="text-cyan-400 font-semibold">[certificates]</span>, <span className="text-rose-400 font-semibold">[sudo hire]</span>.
          </p>
        </div>
      ),
    },
  ]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll ONLY the terminal container internally without affecting window scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10b981", "#34d399", "#059669", "#f59e0b", "#06b6d4"],
    });
  };

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Các lệnh được hỗ trợ:</p>
            <p>• <span className="text-emerald-300 font-semibold">about</span>: Giới thiệu, học vấn ĐH Phenikaa (GPA 3.0).</p>
            <p>• <span className="text-emerald-300 font-semibold">skills</span>: Danh sách công nghệ (TypeScript, NestJS, Spring Boot, AI).</p>
            <p>• <span className="text-emerald-300 font-semibold">projects</span>: 4 Dự án thực chiến kèm link Case Study.</p>
            <p>• <span className="text-emerald-300 font-semibold">certificates</span>: 4 Chứng chỉ Coursera (AWS, Agile, Security, PHP) & TOEIC.</p>
            <p>• <span className="text-emerald-300 font-semibold">contact</span>: Số điện thoại, email, địa chỉ liên hệ.</p>
            <p>• <span className="text-emerald-300 font-semibold">clear</span>: Xóa màn hình terminal.</p>
            <p>• <span className="text-rose-400 font-bold">sudo hire</span>: Lệnh mở khóa tuyển dụng đặc biệt! 🚀</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Nguyễn Tiến Đạt — Fresher Full-Stack Developer</p>
            <p>• Sinh viên năm cuối CNTT - Đại học Phenikaa (GPA: 3.0 / 4.0).</p>
            <p>• Đã làm 4 dự án thực chiến (Next.js, TypeScript, NestJS, Spring Boot, LangChain AI).</p>
            <p>• 4 Chứng chỉ Coursera chuyên ngành + TOEIC 580 (ETS) + OJT OneConnect.</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Kỹ năng công nghệ:</p>
            <p>• TypeScript / Next.js / React: <span className="text-emerald-400">[██████████] 90%</span></p>
            <p>• NestJS / Node.js: <span className="text-emerald-400">[█████████░] 85%</span></p>
            <p>• Java Spring Boot / Security: <span className="text-emerald-400">[████████░░] 80%</span></p>
            <p>• AI RAG (LangChain / OpenAI): <span className="text-emerald-400">[████████░░] 80%</span></p>
            <p>• PostgreSQL / Prisma ORM: <span className="text-emerald-400">[█████████░] 85%</span></p>
            <p>• WebSocket / Kafka / Docker: <span className="text-emerald-400">[███████░░░] 75%</span></p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">4 Dự án thực chiến nổi bật (bấm để xem kiến trúc & code):</p>
            <div>
              <p className="font-semibold text-emerald-300">1. FOOD AI Social Network (AI RAG, Next.js, NestJS)</p>
              <div className="flex gap-3 text-[11px] mt-0.5">
                <a href="/projects/food-ai" className="text-teal-400 hover:underline">
                  📄 Xem Case Study & Code
                </a>
                <a href="https://food-ai-frontend-azure.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  🔗 Live Demo
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-emerald-300">2. Payment Hub Middleware (Spring Boot, RBAC, Kafka, MinIO)</p>
              <div className="text-[11px] mt-0.5">
                <a href="/projects/payment-hub" className="text-teal-400 hover:underline">
                  📄 Xem Case Study (Xuất 1M+ Records, Maker-Checker)
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-emerald-300">3. Learn English Web (TOEIC/IELTS, Realtime WebSocket)</p>
              <div className="flex gap-3 text-[11px] mt-0.5">
                <a href="/projects/learn-english" className="text-teal-400 hover:underline">
                  📄 Xem Case Study & Code
                </a>
                <a href="https://learn-english-three-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  🔗 Live Demo
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-emerald-300">4. Interactive Portfolio (Next.js 16, 3D Parallax, Terminal)</p>
              <div className="text-[11px] mt-0.5">
                <a href="/projects/portfolio-frontend" className="text-teal-400 hover:underline">
                  📄 Xem Case Study (Frontend Design & Tech Stack)
                </a>
              </div>
            </div>
          </div>
        );
        break;

      case "certificates":
      case "certs":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Chứng chỉ chuyên môn (Coursera & Quốc tế):</p>
            <p>• <a href="/degrees_coursera/Architecting Solutions on AWS.pdf" target="_blank" className="text-teal-300 hover:underline font-medium">Architecting Solutions on AWS</a> (AWS)</p>
            <p>• <a href="/degrees_coursera/Agile Project Management.pdf" target="_blank" className="text-teal-300 hover:underline font-medium">Agile Project Management</a> (Google)</p>
            <p>• <a href="/degrees_coursera/Software Security for Web Applications.pdf" target="_blank" className="text-teal-300 hover:underline font-medium">Software Security for Web Applications</a></p>
            <p>• <a href="/degrees_coursera/Master Full-Stack Web Development with Laravel & PHP.pdf" target="_blank" className="text-teal-300 hover:underline font-medium">Full-Stack Web Dev with Laravel & PHP</a></p>
            <p>• <span className="text-slate-300">TOEIC 580/990 (ETS) & Chứng nhận OJT OneConnect</span></p>
            <p className="text-[11px] text-emerald-400 mt-1">👉 Cuộn xuống mục &quot;Chứng chỉ chuyên môn&quot; để xem PDF trực tiếp!</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Thông tin liên lạc:</p>
            <p>• SĐT: <a href="tel:0337562201" className="text-emerald-400 hover:underline">0337562201</a></p>
            <p>• Email: <a href="mailto:datga27@gmail.com" className="text-emerald-400 hover:underline">datga27@gmail.com</a></p>
            <p>• Địa chỉ: Hoàng Liệt, Hoàng Mai, Hà Nội</p>
          </div>
        );
        break;

      case "sudo hire":
      case "hire":
      case "sudo hire dat":
        triggerConfetti();
        output = (
          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/60 text-xs text-emerald-200 space-y-1.5 animate-in fade-in">
            <p className="text-sm font-bold text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>[ACCESS GRANTED] Lệnh tuyển dụng thành công!</span>
            </p>
            <p className="leading-relaxed">
              Cảm ơn bạn! Đạt rất hào hứng được trao đổi về cơ hội việc làm cùng đội ngũ của bạn.
            </p>
            <div className="pt-1">
              <a
                href="mailto:datga27@gmail.com?subject=Thư mời phỏng vấn - Fresher Full-Stack Developer&body=Chào Đạt, chúng tôi có cơ hội việc làm phù hợp muốn trao đổi cùng bạn."
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi thư mời phỏng vấn ngay</span>
              </a>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <p className="text-xs text-rose-400">
            Lệnh không hợp lệ: &quot;{trimmed}&quot;. Gõ <span className="text-amber-400 font-bold">help</span> để xem các lệnh hỗ trợ.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdText,
        output,
      },
    ]);
    setInputVal("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickCommands = ["help", "skills", "projects", "certificates", "contact", "sudo hire"];

  return (
    <div className="w-full rounded-2xl bg-slate-950/95 border border-slate-800 text-slate-200 shadow-2xl overflow-hidden font-mono text-xs backdrop-blur-xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>dat@phenikaa-box: ~ (zsh)</span>
        </div>

        <button
          type="button"
          onClick={() => setHistory([])}
          title="Xóa màn hình (Clear)"
          className="text-slate-500 hover:text-slate-300 transition-colors p-1 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Terminal Output Area */}
      <div
        ref={scrollContainerRef}
        className="p-4 sm:p-5 max-h-72 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-800"
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 font-bold">
              <span className="text-emerald-400">dat@portfolio</span>
              <span className="text-slate-500">:</span>
              <span className="text-teal-400">~</span>
              <span className="text-slate-500">$</span>
              <span className="text-white">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Quick Command Chips */}
      <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-900/40 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-slate-500 font-semibold mr-1">Phím tắt:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              executeCommand(cmd);
            }}
            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
              cmd === "sudo hire"
                ? "bg-rose-950/70 hover:bg-rose-900 text-rose-300 border border-rose-700/60 shadow-xs"
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            }`}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Line */}
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-t border-slate-800/80"
      >
        <span className="text-emerald-400 font-bold">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Nhập lệnh (vd: help, skills, projects, sudo hire)..."
          className="flex-1 bg-transparent text-white focus:outline-none text-xs placeholder:text-slate-600 font-mono"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
