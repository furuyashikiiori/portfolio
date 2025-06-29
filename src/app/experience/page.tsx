import Timeline from "../../components/Timeline";

export default function Experience() {
  const timelineItems = [
    {
      date: "2022年 - 現在",
      title: "シニアフロントエンド開発者",
      subtitle: "Tech Innovation Inc. (リモート)",
      description: [
        "ReactとNext.jsを使用したレスポンシブWebアプリケーションの開発をリード",
        "クロスファンクショナルチームと協力して高品質な製品を提供",
        "ジュニア開発者のメンタリングとコードレビューを実施",
        "最適化技術により、アプリケーションのパフォーマンスを40%向上"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      type: "work" as const
    },
    {
      date: "2020年 - 2022年",
      title: "フルスタック開発者",
      subtitle: "Digital Solutions Ltd. (ニューヨーク州)",
      description: [
        "フルスタックWebアプリケーションの開発と保守",
        "Node.jsとExpress.jsを使用したRESTful APIの構築",
        "データベース設計の実装とクエリの最適化",
        "デザイナーと密接に協力してピクセルパーフェクトなUIを実装"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
      type: "work" as const
    },
    {
      date: "2019年 - 2020年",
      title: "フロントエンド開発者",
      subtitle: "Creative Agency Co. (カリフォルニア州サンフランシスコ)",
      description: [
        "レスポンシブWebサイトとWebアプリケーションの作成",
        "デザインチームと協力してクリエイティブなソリューションを実装",
        "パフォーマンスとSEOのためのWebサイト最適化",
        "既存のクライアントWebサイトの保守と更新"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Sass", "WordPress"],
      type: "work" as const
    },
    {
      date: "2018年 - 2019年",
      title: "ジュニアWeb開発者",
      subtitle: "Startup Hub (テキサス州オースティン)",
      description: [
        "WebアプリケーションとWebサイトの開発支援",
        "現代的なWeb開発プラクティスの学習と適用",
        "アジャイル開発プロセスへの参加",
        "テストとデバッグ作業への貢献"
      ],
      technologies: ["JavaScript", "React", "HTML", "CSS", "Git"],
      type: "work" as const
    },
    {
      date: "2018年",
      title: "フルスタックWeb開発ブートキャンプ",
      subtitle: "コードアカデミー",
      description: [
        "モダンWeb開発技術とプラクティスをカバーする6ヶ月間の集中プログラム",
        "実践的なプロジェクトを通じてフロントエンドとバックエンドの技術を習得"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      type: "education" as const
    },
    {
      date: "2014年 - 2018年",
      title: "コンピューターサイエンス学士号",
      subtitle: "工大大学",
      description: [
        "優秀な成績で卒業。ソフトウェアエンジニアリングとWeb開発を専門",
        "アルゴリズム、データ構造、ソフトウェア設計の基礎を学習",
        "チームプロジェクトでのリーダーシップ経験を積む"
      ],
      type: "education" as const
    }
  ];

  const certifications = [
    "AWS認定デベロッパーアソシエイト",
    "Reactデベロッパー認定", 
    "Google Analytics認定",
    "スクラムマスター認定"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          経歴
        </h1>
        
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Web開発における私のプロフェッショナルな歩み。成長、学習、
          様々なプロジェクトやチームへの貢献を時系列でご紹介します。
        </p>

        {/* Timeline */}
        <div className="mb-16">
          <Timeline items={timelineItems} />
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">認定・資格</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-white rounded-lg p-8 text-center shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            新しい機会をお待ちしています
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            私は常に新しいチャレンジに取り組み、革新的なプロジェクトに貢献することに
            ワクワクしています。私の経験があなたのチームにどのように役立つか、
            話し合いましょう。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
          >
            お問い合わせ
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}