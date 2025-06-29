import ProfileImage from "../../components/ProfileImage";
import SocialLinks from "../../components/SocialLinks";
import { profileData } from "../../data/profile";

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
              {profileData.title}
            </h2>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              {profileData.description}
            </p>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              {profileData.mission}
            </p>
            <div className='flex flex-wrap gap-3 mb-6'>
              {profileData.interests.map((interest, index) => (
                <span key={index} className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'>
                  {interest}
                </span>
              ))}
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
              小さい頃からものづくりが好きで、自然とプログラミングの世界に惹かれました。データサイエンス学部で学びながら、2年生の頃からReactを使ったフロントエンド開発に本格的に取り組み始めました。

              最近はサーバーサイド技術にも興味を広げ、フルスタック開発への理解を深めています。ハッカソンでの実践的な開発経験を通じて、技術だけでなくチームワークの重要性も学んでいます。
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              私のアプローチ
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              新しい技術の習得には、インターネットやYouTubeなどのオンラインリソースを積極的に活用しています。理論と実践のバランスを大切にし、学んだことはすぐに手を動かして試すことを心がけています。

              チーム開発では、コミュニケーションを最も重視しています。技術的な議論だけでなく、メンバー同士の理解を深めることで、より良いプロダクトが生まれると考えています。
            </p>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
            一緒に素晴らしいものを作りましょう
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            新しいプロジェクトに取り組み、個人やチームと
            協力することにワクワクしています。
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
