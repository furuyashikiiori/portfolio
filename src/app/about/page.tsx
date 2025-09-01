"use client";

import ProfileImage from "../../components/ProfileImage";
import SocialLinks from "../../components/SocialLinks";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedCard from "../../components/AnimatedCard";
import AnimatedText from "../../components/AnimatedText";
import { profileData } from "../../data/profile";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-4xl mx-auto'>
        <AnimatedText className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
          About Me
        </AnimatedText>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <AnimatedSection delay={0.2}>
            <ProfileImage size='large' />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
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
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm'
                >
                  {interest}
                </motion.span>
              ))}
            </div>

            {/* SNS Links */}
            <div>
              <h4 className='text-lg font-semibold text-gray-900 mb-3'>SNS</h4>
              <SocialLinks variant='default' />
            </div>
          </AnimatedSection>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <AnimatedCard
            delay={0.6}
            className='bg-white p-6 rounded-lg shadow-md'
          >
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              私の歩み
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              小さい頃からものづくりが好きで、自然とプログラミングの世界に惹かれました。データサイエンス学部で学びながら、2年生の頃からReactを使ったフロントエンド開発に本格的に取り組み始めました。
              最近はサーバーサイド技術にも興味を広げ、フルスタック開発への理解を深めています。ハッカソンでの実践的な開発経験を通じて、技術だけでなくチームワークの重要性も学んでいます。
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={0.8}
            className='bg-white p-6 rounded-lg shadow-md'
          >
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              私のアプローチ
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              新しい技術の習得には、インターネットやYouTubeなどのオンラインリソースを積極的に活用しています。理論と実践のバランスを大切にし、学んだことはすぐに手を動かして試すことを心がけています。
              チーム開発では、コミュニケーションを最も重視しています。技術的な議論だけでなく、メンバー同士の理解を深めることで、より良いプロダクトが生まれると考えています。
            </p>
          </AnimatedCard>
        </div>

        <AnimatedSection delay={1.0} className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
            一緒に素晴らしいものを作りましょう
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            新しいプロジェクトに取り組み、個人やチームと
            協力することにワクワクしています。
          </p>
        </AnimatedSection>

        {/* Large SNS Links Section */}
        <AnimatedCard
          delay={1.2}
          className='mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center'
        >
          <h3 className='text-xl font-semibold text-gray-900 mb-4'>
            各プラットフォームでつながりましょう
          </h3>
          <p className='text-gray-600 mb-6 max-w-xl mx-auto'>
            お気軽にフォローやコンタクトをお送りください！
          </p>
          <div className='flex justify-center'>
            <SocialLinks variant='large' />
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
