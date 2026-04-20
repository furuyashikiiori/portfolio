"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedCard from "../../components/AnimatedCard";
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const projects = [
    {
      id: 1,
      title: "ScheduleDraft | シンプルな予定テキスト作成ツール",
      description:
        "6ステップで、簡単にカレンダーから文書を作成できます！生成されたテキストをコピーして、SlackやLINEに貼り付けるだけ！",
      image: "📅",
      previewImage: "/images/projects/ScheduleDraft.png",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://scheduledraft.vercel.app/",
      githubUrl: "https://github.com/furuyashikiiori/scheduledraft",
      featured: true,
      detailedDescription:
        "個人制作\n\nちょっと面倒だと思うあの作業に！\nカレンダーから選ぶだけで簡単に予定をシェア！",
      pdfUrl: "",
    },
    {
      id: 2,
      title: "QRsona - QRコード✖️persona",
      description:
        "出会いをを思い出だけに留めておくのは勿体無い。QRコードをかざすだけで思い出から繋がりに変える情報プラットホーム",
      image: "🗺️",
      previewImage: "/images/projects/QRsona.png",
      technologies: ["Go", "Next.js", "Tailwind CSS", "supabase"],
      liveUrl: "https://qrsona.vercel.app/",
      githubUrl: "https://github.com/furuyashikiiori/camp-07",
      featured: true,
      detailedDescription:
        "2025年7月開催技育CAMPハッカソンで制作\n\n出会いをを思い出だけに留めておくのは勿体無いQRコードをかざすだけで思い出から繋がりに変える情報プラットホーム\nQRコードで読み取るだけであなたのペルソナを簡単にシェア\n\nhttps://www.canva.com/design/DAGr7OrXXr0/hgjbvRPBB3HYp71855glcg/view?utm_content=DAGr7OrXXr0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9b30593cd2#1",
      pdfUrl: "/documents/qrsona.pdf",
    },
    {
      id: 3,
      title: "Autofolio",
      description:
        "フォームに答えるだけで誰でも簡単にポートフォリオがつくれる！",
      image: "",
      previewImage: "/images/projects/autofolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://portfolio-auto-generator.vercel.app/",
      githubUrl: "https://github.com/furuyashikiiori/portfolio-auto-generator",
      featured: false,
      detailedDescription:
        "2025年7月に行われたMUDS学内ハッカソンで制作したプロジェクト。\nユーザーがフォームに答えるだけで、簡単にポートフォリオサイトを生成できるサービスです。\nNext.jsとTypeScriptを使用しており、Tailwind CSSでスタイリングされています。ユーザーは自分の情報を入力するだけで、魅力的なポートフォリオを手に入れることができます。",
      pdfUrl: "/documents/autofolio.pdf",
    },

    {
      id: 4,
      title: "ポートフォリオ",
      description: "おりぃのポートフォリオサイト。ちょうど今見てるサイトです！",
      image: "🌤️",
      previewImage: "/images/projects/portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "http://furuyashikiiori.vercel.app",
      githubUrl: "https://github.com/furuyashikiiori/portfolio",
      featured: false,
      detailedDescription:
        "私のポートフォリオサイトです。Next.jsとTypeScriptを使用しており、Tailwind CSSでスタイリングされています。Framer Motionを使用したアニメーションにより、スムーズで魅力的なユーザー体験を提供しています。プロジェクトやスキルを紹介するためのレスポンシブデザインが特徴です。",
      pdfUrl: "",
    },
    {
      id: 5,
      title: "異世界レシピ 〜その食材異世界へ旅立たせよう〜",
      description: "冷蔵庫の在庫 × 異世界のレシピ",
      image: "📋",
      previewImage: "/images/projects/異世界レシピ.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "Docker",
        "Gemini API",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/furuyashikiiori/camp-06",
      featured: true,
      detailedDescription:
        '「技育CAMPハッカソン2025年度 Vol.4」で制作した作品。\n\n家にある食材だけで、存在しない国の伝統料理をGeminiが考案し、画像付きで提案してくれるサービスです。\n 例）じゃがいも、みそ、ヨーグルト → 「北東フェロー諸島・聖ミルダ神殿で朝に食される、冷製味噌ジャガカッテージポタージュ」\nさらに、他のユーザーが生成した"空想グルメ"もSNS風に閲覧・共有可能',
      pdfUrl: "/documents/異世界レシピ.pdf",
    },
    {
      id: 6,
      title: "POP Share Library",
      description:
        "はじめてのハッカソンで制作した、推し活動グッズの管理アプリケーション",
      image: "📝",
      previewImage: "/images/projects/popsharelibrary.png",
      technologies: ["Python(Flask)", "HTML", "CSS", "JavaScript", "Jinja2"],
      liveUrl: "#",
      githubUrl: "https://github.com/furuyashikiiori/hack200404",
      featured: false,
      detailedDescription:
        "2024年4月に行われた技育CAMPハッカソンで制作したプロジェクト。\n\n推しのグッズを管理するためのアプリケーションです。\n\n初の本格的なチームで基本的な機能を開発するだけでも大変でしたがとても良い経験になりました。",
      pdfUrl: "/documents/popsharelibrary.pdf",
    },
    {
      id: 7,
      title: "UniTASK Achievement",
      description: "タスク管理✖️育成ゲーム",
      image: "💼",
      previewImage: "/images/projects/uni-task.png",
      technologies: ["React", "Python(FastAPI)", "Firebase", "SQLite"],
      liveUrl: "#",
      githubUrl: "https://github.com/furuyashikiiori/camp2024_07",
      featured: false,
      detailedDescription:
        "2024年7月に行われた技育CAMPハッカソンで制作したプロジェクト。\n\nタスク管理と育成ゲームを組み合わせたアプリケーションです。\n\nユーザーは日々のタスクを管理しながら、キャラクターを育成することができます。育成していくと色々な姿が見られ楽しくタスクをこなせます!",
      pdfUrl: "/documents/unitask.pdf",
    },
    {
      id: 8,
      title: "Hang out Share",
      description:
        "手軽に誘いたい！充実した生活を送りたい！を実現するWebアプリサービス",
      image: "💬",
      previewImage: "/images/projects/hang-out-share.png",
      technologies: [
        "Python(Flask)",
        "HTML",
        "CSS",
        "JavaScript",
        "SQLAlchemy",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/furuyashikiiori/MUENT202402",
      featured: false,
      detailedDescription:
        "2024年2月 学生エンジニアサークルMUENTの通常開発で制作したプロジェクト。\n\n友達と遊ぶ予定を簡単に共有・同じ趣味の人とマッチングできるアプリケーションです。\n\nユーザーは自分の予定を登録し、友達と共有することで、遊びの計画を立てやすくなります。",
      pdfUrl: "/documents/hang-out-share.pdf",
    },
    {
      id: 9,
      title: "NomiSearch",
      description: "あなたにあった最高の一杯を",
      image: "🌤️",
      previewImage: "/images/projects/nomiserch.png",
      technologies: ["FastAPI", "html", "css", "PHP"],
      liveUrl: "https://muds.gdl.jp/~s2322057/dbmap_app/templates/index.html",
      githubUrl: "#",
      featured: false,
      detailedDescription:
        "2024年7月製作\n\nビールに特化したお店検索アプリ\n初めてデプロイした作品で個人的にフッターがお気に入り♡",
      pdfUrl: "",
    },
  ];

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => (
    <AnimatedCard
      delay={index * 0.1}
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className='w-full h-full'
        onClick={() => setSelectedProject(project)}
      >
        <div className='relative h-48 w-full'>
          <Image
            src={project.previewImage}
            alt={project.title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <div className='hidden absolute inset-0 flex items-center justify-center bg-gray-100'>
            <div className='text-6xl'>{project.image}</div>
          </div>
        </div>
        <div className='p-6'>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>
            {project.title}
          </h3>
          <p className='text-gray-600 mb-4 leading-relaxed'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                className='bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm'
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className='flex gap-4 mb-4'>
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                className='flex items-center text-primary-600 hover:text-primary-700 font-medium'
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
                ライブデモ
              </a>
            )}
            <a
              href={project.githubUrl}
              className='flex items-center text-gray-600 hover:text-gray-700 font-medium'
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className='w-4 h-4 mr-1'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              GitHub
            </a>
          </div>

          <div className='text-center text-sm text-gray-500'>
            クリックして詳細を見る
          </div>
        </div>
      </div>
    </AnimatedCard>
  );

  const ProjectModal = ({
    project,
    onClose,
  }: {
    project: (typeof projects)[0];
    onClose: () => void;
  }) => (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold text-gray-900'>
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700 p-2'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <div className='relative h-64 w-full mb-6'>
            <Image
              src={project.previewImage}
              alt={project.title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw'
              className='object-cover rounded-lg'
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className='hidden absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg'>
              <div className='text-8xl'>{project.image}</div>
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>概要</h3>
            <p className='text-gray-600 leading-relaxed'>
              {project.description}
            </p>
          </div>

          <div className='mb-6'>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              詳細説明
            </h3>
            <div className='text-gray-600 leading-relaxed whitespace-pre-line'>
              {project.detailedDescription.split("\n").map((line, index) => {
                // URLを検出してリンクにする
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                if (urlRegex.test(line)) {
                  return (
                    <div key={index}>
                      {line.split(urlRegex).map((part, partIndex) => {
                        if (urlRegex.test(part)) {
                          return (
                            <a
                              key={partIndex}
                              href={part}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 hover:text-blue-800 underline break-all'
                            >
                              {part}
                            </a>
                          );
                        }
                        return part;
                      })}
                    </div>
                  );
                }
                return <div key={index}>{line}</div>;
              })}
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              使用技術
            </h3>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='bg-primary-100 text-primary-800 px-3 py-1 rounded text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                className='flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
                ライブデモ
              </a>
            )}
            <a
              href={project.githubUrl}
              className='flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              GitHub
            </a>
            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                PDF資料
              </a>
            )}
          </div>

          {project.pdfUrl && (
            <div className='mt-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                技術資料
              </h3>
              <div className='w-full h-96 border rounded-lg overflow-hidden'>
                <iframe
                  src={project.pdfUrl}
                  width='100%'
                  height='100%'
                  title={`${project.title} PDF資料`}
                  className='border-0'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-6xl mx-auto'>
        <AnimatedText className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
          Myプロジェクト
        </AnimatedText>

        <AnimatedSection
          delay={0.2}
          className='text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto'
        >
          私がいままで作成してきたプロジェクトをこちらに紹介しています。
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <AnimatedCard
          delay={0.8}
          className='bg-primary-50 rounded-lg p-8 text-center'
        >
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
            もっと作品を見たいですか？
          </h3>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            これらは私の作品のほんの一部です。GitHubプロフィールには、
            研究やプロジェクトなど、さらに多くのプロジェクトがあります。
          </p>
          <a
            href='https://github.com/furuyashikiiori'
            className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            GitHubプロフィールを見る
          </a>
        </AnimatedCard>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}
