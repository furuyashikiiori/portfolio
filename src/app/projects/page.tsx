"use client";

import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const projects = [
    {
      id: 1,
      title: "Autofolio",
      description:
        "フォームに答えるだけで誰でも簡単にポートフォリオがつくれる！",
      image: "",
      previewImage: "/images/projects/autofolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://portfolio-auto-generator.vercel.app/",
      githubUrl: "https://github.com/furuyashikiiori/portfolio-auto-generator",
      featured: true,
      detailedDescription:
        "2025年7月に行われたMUDS学内ハッカソンで制作したプロジェクト。\nユーザーがフォームに答えるだけで、簡単にポートフォリオサイトを生成できるサービスです。\nNext.jsとTypeScriptを使用しており、Tailwind CSSでスタイリングされています。ユーザーは自分の情報を入力するだけで、魅力的なポートフォリオを手に入れることができます。",
      pdfUrl: "/documents/autofolio.pdf",
    },
    {
      id: 2,
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
        "「技育CAMPハッカソン2025年度 Vol.4」で制作した作品。\n\n家にある食材だけで、存在しない国の伝統料理をGeminiが考案し、画像付きで提案してくれるサービスです。\n 例）じゃがいも、みそ、ヨーグルト → 「北東フェロー諸島・聖ミルダ神殿で朝に食される、冷製味噌ジャガカッテージポタージュ」\nさらに、他のユーザーが生成した“空想グルメ”もSNS風に閲覧・共有可能",
      pdfUrl: "/documents/異世界レシピ.pdf",
    },
    {
      id: 3,
      title: "ポートフォリオ",
      description: "おりぃのポートフォリオサイト。ちょうど今見てるサイトです！",
      image: "🌤️",
      previewImage: "/images/projects/portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "http://localhost:3001/",
      githubUrl: "https://github.com/furuyashikiiori/portfolio",
      featured: false,
      detailedDescription:
        "私のポートフォリオサイトです。Next.jsとTypeScriptを使用しており、Tailwind CSSでスタイリングされています。Framer Motionを使用したアニメーションにより、スムーズで魅力的なユーザー体験を提供しています。プロジェクトやスキルを紹介するためのレスポンシブデザインが特徴です。",
      pdfUrl: "",
    },
    {
      id: 4,
      title: "POP Share Library",
      description:
        "Markdownサポート、コメントシステム、SEO最適化を備えたモダンWeb技術で構築されたフル機能ブログプラットフォーム。",
      image: "📝",
      previewImage: "",
      technologies: ["Next.js", "MDX", "Prisma", "NextAuth.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      detailedDescription:
        "MDXを使用したリッチなコンテンツ作成機能により、テキストとコードを組み合わせた技術記事の執筆が可能です。NextAuth.jsによる認証システムで、安全なユーザー管理を実現。Prismaを使用したデータベース管理により、スケーラブルなアーキテクチャを採用しています。",
      pdfUrl: "",
    },
    {
      id: 5,
      title: "UniTASK Achievement",
      description:
        "スムーズなアニメーションと最適化されたパフォーマンスでプロジェクトとスキルを紹介するレスポンシブポートフォリオサイト。",
      image: "💼",
      previewImage: "",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      detailedDescription:
        "Framer Motionを使用したスムーズなページ遷移アニメーションとインタラクティブな要素により、訪問者に印象的な体験を提供します。Next.jsの最適化機能により、高速な読み込み速度を実現。TypeScriptによる型安全性とTailwind CSSによる効率的なスタイリングが特徴です。",
      pdfUrl: "",
    },
    {
      id: 6,
      title: "Hang out Share",
      description:
        "複数のルーム、ファイル共有、ユーザープレゼンスインジケーターを備えたリアルタイムチャットアプリケーション。",
      image: "💬",
      previewImage: "",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      detailedDescription:
        "Socket.ioを使用したリアルタイム通信により、瞬時にメッセージの送受信が可能です。複数のチャットルームの作成・管理機能、ファイル共有機能、ユーザーのオンライン状態表示機能を搭載。MongoDBを使用したメッセージの永続化により、過去の会話履歴も参照できます。",
      pdfUrl: "",
    },
    {
      id: 7,
      title: "NomiSearch",
      description:
        "現在の気象状況と予報をインタラクティブチャートと美しいアニメーションで表示するレスポンシブ天気ダッシュボード。",
      image: "🌤️",
      previewImage: "",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      detailedDescription:
        "複数の気象データソースからの情報を統合し、美しいビジュアライゼーションで表示します。Chart.jsを使用したインタラクティブなグラフで、気温、湿度、風速などの変化を時系列で確認できます。CSS3アニメーションにより、直感的で魅力的なユーザー体験を提供しています。",
      pdfUrl: "",
    },
  ];

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer ${
        project.featured ? "md:col-span-2" : ""
      }`}
      onClick={() => setSelectedProject(project)}
    >
      <div className='relative h-48 w-full'>
        <Image
          src={project.previewImage}
          alt={project.title}
          fill
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
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm'
            >
              {tech}
            </span>
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
  );

  const ProjectModal = ({
    project,
    onClose,
  }: {
    project: (typeof projects)[0];
    onClose: () => void;
  }) => (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
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
            <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
              {project.detailedDescription}
            </p>
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
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
          Myプロジェクト
        </h1>

        <p className='text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto'>
          私がいままで作成してきたプロジェクトをこちらに紹介しています。
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className='bg-primary-50 rounded-lg p-8 text-center'>
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
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            GitHubプロフィールを見る
          </a>
        </div>

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
