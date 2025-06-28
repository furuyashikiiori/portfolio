import ProfileImage from "../../components/ProfileImage";

export default function About() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
          About Me
        </h1>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <div>
            <ProfileImage size="large" />
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              情熱的な開発者
            </h2>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              私は革新的なデジタルソリューションの創造に情熱を注ぐ、献身的なフルスタック開発者です。
              モダンなWeb技術の専門知識を持ち、複雑な問題をシンプルで美しく、直感的なデザインに
              変換することを楽しんでいます。
            </p>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              コーディングをしていない時は、新しい技術を探求したり、オープンソースプロジェクトに
              貢献したり、開発者コミュニティと知識を共有したりしています。
            </p>
            <div className='flex flex-wrap gap-3'>
              <span className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'>
                問題解決者
              </span>
              <span className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'>
                チームプレイヤー
              </span>
              <span className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'>
                継続学習者
              </span>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              私の歩み
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              数年前にコーディングの旅を始めて以来、常にスキルを向上させ続けています。
              クリーンで保守性の高いコードを書くこと、そして業界の最新トレンドと
              ベストプラクティスに遅れないようにすることを信条としています。
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              私のアプローチ
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              まずビジネス要件を理解することに焦点を当て、その後で拡張性があり、
              効率的で、ユーザーフレンドリーな技術的ソリューションを作成します。
              コラボレーションと明確なコミュニケーションが私の開発プロセスの鍵です。
            </p>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
            一緒に素晴らしいものを作りましょう
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            私は常に新しいプロジェクトに取り組み、才能ある個人やチームと
            協力することにワクワクしています。あなたのビジョンをどのように
            実現できるか、話し合いましょう。
          </p>
        </div>
      </div>
    </div>
  );
}
