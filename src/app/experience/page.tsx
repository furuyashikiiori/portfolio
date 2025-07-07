import Timeline from "../../components/Timeline";

export default function Experience() {
  const timelineItems = [
    {
      date: "2025年6月",
      title: "技育CAMP2025 Vol.4 努力賞 受賞",
      subtitle: "異世界レシピ",
      description: [
        "家にある食材だけで、存在しない国の伝統料理をGeminiが考案し、画像付きで提案してくれるサービス",
        "例）じゃがいも、みそ、ヨーグルト → 「北東フェロー諸島・聖ミルダ神殿で朝に食される、冷製味噌ジャガカッテージポタージュ」",
        "さらに、他のユーザーが生成した“空想グルメ”もSNS風に閲覧・共有可能。",
      ],
      technologies: [
        "Next.js",
        "tailwindcss",
        "FastAPI",
        "Langn",
        "PostgreSQL",
        "Docker",
        "Gemini",
      ],
      type: "work" as const,
    },
    {
      date: "2024年7月 - 現在",
      title: "やる気スイッチグループ Hallo 講師",
      subtitle: "プログラミング教室",
      description: [
        "小・中学生向けのプログラミング教育を担当",
        "Pythonを使用した基礎的なプログラミングスキルの指導",
        "生徒の興味を引き出すためのインタラクティブな授業を設計",
        "生徒の理解度に応じた個別指導を実施",
      ],
      technologies: ["Python"],
      type: "work" as const,
    },
    {
      date: "2023年6月",
      title: "武蔵野大学オープンキャンパス 研究発表",
      subtitle: "画像認識パーソナルカラー診断システム",
      description: [
        "初めての本格的な開発プロジェクト！",
        "画像認識技術を用いたパーソナルカラー診断システムの開発",
        "PythonとOpenCVを使用して画像処理アルゴリズムを実装",
        "オープンキャンパスに来てくれた高校生に向けて研究内容を発表",
      ],
      technologies: ["Python"],
      type: "work" as const,
    },
    {
      date: "2023年4月 - 現在",
      title: "武蔵野大学",
      subtitle: "データサイエンス学部データサイエンス学科",
      description: [
        "データサイエンスと機械学習の基礎を学ぶ",
        "Pythonを使用したデータ分析と可視化のプロジェクトに取り組む",
        "チームプロジェクトでの協力とコミュニケーションスキルを向上",
      ],
      technologies: ["Python", "PHP"],
      type: "education" as const,
    },
    {
      date: "2020年4月 - 2023年3月",
      title: "伊那北高等学校",
      subtitle: "普通科",
      description: [
        "理系を得意として、数学と物理に特に興味を持つ",
        "バドミントン部に所属し、チームワークとリーダーシップを学ぶ",
      ],
      type: "education" as const,
    },
  ];

  const certifications = [
    "日本商工会議所主催 珠算能力検定試験1級（満点合格）",
    "日本商工会議所主催 暗算検定試験1級",
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
          経歴
        </h1>

        <p className='text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto'>
          私のこれまでの歩み。成長、学習、
          様々なプロジェクトやチームへの貢献を時系列でご紹介します。
        </p>

        {/* Timeline */}
        <div className='mb-16'>
          <Timeline items={timelineItems} />
        </div>

        {/* Certifications */}
        <div className='bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8'>
          <h2 className='text-3xl font-semibold text-gray-900 mb-6 text-center'>
            認定・資格
          </h2>
          <div className='grid md:grid-cols-2 gap-4 max-w-2xl mx-auto'>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className='flex items-center bg-white p-4 rounded-lg shadow-sm'
              >
                <div className='w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0'></div>
                <span className='text-gray-700 font-medium'>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className='mt-16 bg-white rounded-lg p-8 text-center shadow-md'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
            新しい機会をお待ちしています
          </h3>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            色々技術・プロジェクトに挑戦してもっとつよつよになりたいです！！
          </p>
          <a
            href='/contact'
            className='inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors'
          >
            お問い合わせ
            <svg
              className='w-4 h-4 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
