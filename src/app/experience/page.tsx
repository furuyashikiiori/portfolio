export default function Experience() {
  const experiences = [
    {
      title: "シニアフロントエンド開発者",
      company: "Tech Innovation Inc.",
      period: "2022年 - 現在",
      location: "リモート",
      description: [
        "ReactとNext.jsを使用したレスポンシブWebアプリケーションの開発をリード",
        "クロスファンクショナルチームと協力して高品質な製品を提供",
        "ジュニア開発者のメンタリングとコードレビューを実施",
        "最適化技術により、アプリケーションのパフォーマンスを40%向上"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "フルスタック開発者",
      company: "Digital Solutions Ltd.",
      period: "2020年 - 2022年",
      location: "ニューヨーク州",
      description: [
        "フルスタックWebアプリケーションの開発と保守",
        "Node.jsとExpress.jsを使用したRESTful APIの構築",
        "データベース設計の実装とクエリの最適化",
        "デザイナーと密接に協力してピクセルパーフェクトなUIを実装"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      title: "フロントエンド開発者",
      company: "Creative Agency Co.",
      period: "2019年 - 2020年",
      location: "カリフォルニア州サンフランシスコ",
      description: [
        "レスポンシブWebサイトとWebアプリケーションの作成",
        "デザインチームと協力してクリエイティブなソリューションを実装",
        "パフォーマンスとSEOのためのWebサイト最適化",
        "既存のクライアントWebサイトの保守と更新"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Sass", "WordPress"]
    },
    {
      title: "ジュニアWeb開発者",
      company: "Startup Hub",
      period: "2018年 - 2019年",
      location: "テキサス州オースティン",
      description: [
        "WebアプリケーションとWebサイトの開発支援",
        "現代的なWeb開発プラクティスの学習と適用",
        "アジャイル開発プロセスへの参加",
        "テストとデバッグ作業への貢献"
      ],
      technologies: ["JavaScript", "React", "HTML", "CSS", "Git"]
    }
  ];

  const education = [
    {
      degree: "コンピューターサイエンス学士号",
      school: "工大大学",
      period: "2014年 - 2018年",
      description: "優秀な成績で卒業。ソフトウェアエンジニアリングとWeb開発を専門としました。"
    },
    {
      degree: "フルスタックWeb開発ブートキャンプ",
      school: "コードアカデミー",
      period: "2018年",
      description: "モダンWeb開発技術とプラクティスをカバーする6ヶ月間の集中プログラム。"
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          経歴
        </h1>
        
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Web開発における私のプロフェッショナルな歩み。成長、学習、
          様々なプロジェクトやチームへの貢献を紹介します。
        </p>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">作業経験</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-primary-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">学歴</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                  <p className="text-primary-600 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-600 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">認定・資格</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            新しい機会をお待ちしています
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            私は常に新しいチャレンジに取り組み、革新的なプロジェクトに貢献することに
            ワクワクしています。私の経験があなたのチームにどのように役立つか、
            話し合いましょう。
          </p>
        </div>
      </div>
    </div>
  );
}