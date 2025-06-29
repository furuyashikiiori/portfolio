import ProfileImage from "../../components/ProfileImage";
import SocialLinks from "../../components/SocialLinks";

export default function About() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
          About Me
        </h1>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <div>
            <ProfileImage size='large' />
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              目指せつよつよエンジニア
            </h2>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              こんにちは！武蔵野大学データサイエンス学部で学ぶ3年生です。
              データサイエンスの学習と並行して、Reactを使ったフロントエンド開発に力を入れています。ハッカソンなどのイベントに積極的に参加し、チームでの開発経験を積みながら、実際のプロダクト制作に挑戦しています。
            </p>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              データ分析とWebテクノロジーを組み合わせた、ユーザーにとって価値のあるサービス開発を目指しています。ゲームやアニメ、読書から得られる多様な視点を、技術とクリエイティブな発想の源泉としています。
            </p>
            <div className='flex flex-wrap gap-3 mb-6'>
              <span className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'>
                データサイエンス
              </span>
              <span className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'>
                フロントエンド
              </span>
              <span className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'>
                バックエンド
              </span>
            </div>

            {/* SNS Links */}
            <div>
              <h4 className='text-lg font-semibold text-gray-900 mb-3'>SNS</h4>
              <SocialLinks variant='default' />
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

        {/* Large SNS Links Section */}
        <div className='mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center'>
          <h3 className='text-xl font-semibold text-gray-900 mb-4'>
            各プラットフォームでつながりましょう
          </h3>
          <p className='text-gray-600 mb-6 max-w-xl mx-auto'>
            お気軽にフォローやコンタクトをお送りください！
          </p>
          <div className='flex justify-center'>
            <SocialLinks variant='large' />
          </div>
        </div>
      </div>
    </div>
  );
}
