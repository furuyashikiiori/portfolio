export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ECプラットフォーム",
      description: "Next.jsで構築されたモダンなECプラットフォーム。ユーザー認証、決済処理、在庫管理機能を備えています。",
      image: "🛒",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "タスク管理アプリ",
      description: "リアルタイム更新、ドラッグ＆ドロップ機能、チームコラボレーション機能を備えた協働タスク管理アプリケーション。",
      image: "📋",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "天気ダッシュボード",
      description: "現在の気象状況と予報をインタラクティブチャートと美しいアニメーションで表示するレスポンシブ天気ダッシュボード。",
      image: "🌤️",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "ブログプラットフォーム",
      description: "Markdownサポート、コメントシステム、SEO最適化を備えたモダンWeb技術で構築されたフル機能ブログプラットフォーム。",
      image: "📝",
      technologies: ["Next.js", "MDX", "Prisma", "NextAuth.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "ポートフォリオサイト",
      description: "スムーズなアニメーションと最適化されたパフォーマンスでプロジェクトとスキルを紹介するレスポンシブポートフォリオサイト。",
      image: "💼",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "チャットアプリケーション",
      description: "複数のルーム、ファイル共有、ユーザープレゼンスインジケーターを備えたリアルタイムチャットアプリケーション。",
      image: "💬",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
      project.featured ? 'md:col-span-2' : ''
    }`}>
      <div className="p-6">
        <div className="text-6xl mb-4 text-center">{project.image}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
ライブデモ
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center text-gray-600 hover:text-gray-700 font-medium"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          特集プロジェクト
        </h1>
        
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          私のスキルと革新的なデジタルソリューションを創造する情熱を
          紹介する最近のプロジェクトをこちらに紹介しています。
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            もっと作品を見たいですか？
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            これらは私の作品のほんの一部です。GitHubプロフィールには、
            オープンソースへの貢献や実験プロジェクトなど、さらに多くのプロジェクトがあります。
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
GitHubプロフィールを見る
          </a>
        </div>
      </div>
    </div>
  );
}