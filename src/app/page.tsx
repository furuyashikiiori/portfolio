"use client";

import Link from "next/link";
import ProfileImage from "../components/ProfileImage";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "ECプラットフォーム",
      description: "Next.jsで構築されたモダンなECプラットフォーム",
      image: "🛒",
      technologies: ["Next.js", "TypeScript", "Stripe"]
    },
    {
      id: 2,
      title: "タスク管理アプリ",
      description: "リアルタイム更新機能を備えた協働アプリ",
      image: "📋",
      technologies: ["React", "Node.js", "Socket.io"]
    },
    {
      id: 3,
      title: "天気ダッシュボード",
      description: "インタラクティブチャートで気象情報を表示",
      image: "🌤️",
      technologies: ["React", "Chart.js", "API"]
    }
  ];

  const topSkills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "PostgreSQL", level: 75 }
  ];

  const recentExperience = {
    title: "シニアフロントエンド開発者",
    company: "Tech Innovation Inc.",
    period: "2022年 - 現在"
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className='container mx-auto px-4'>
      {/* Hero Section */}
      <section id="hero" className='text-center py-20 min-h-screen flex items-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            Hello! <span className='text-primary-600'>ORI</span>
            です
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed'>
            ここは僕のポートフォリオサイトです。
            <br />
            これまでに手がけた制作物、身につけたスキルをまとめてます！
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#projects'
              className='bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              作品を見る
            </a>
            <a
              href='#contact'
              className='border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Summary */}
      <section id="about" className='py-16'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
            About Me
          </h2>

          <div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
            <div>
              <ProfileImage size="small" />
            </div>

            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                情熱的な開発者
              </h3>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                私は革新的なデジタルソリューションの創造に情熱を注ぐ、献身的なフルスタック開発者です。
                モダンなWeb技術の専門知識を持ち、複雑な問題をシンプルで美しいデザインに変換します。
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm'>
                  問題解決者
                </span>
                <span className='bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm'>
                  チームプレイヤー
                </span>
                <span className='bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm'>
                  継続学習者
                </span>
              </div>

              {/* SNS Links */}
              <div className="mb-4">
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>SNS</h4>
                <SocialLinks variant="minimal" />
              </div>
            </div>
          </div>

          <div className='text-center'>
            <Link
              href='/about'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              詳しく見る
              <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section - Summary */}
      <section id="skills" className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto'>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            主要スキル
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 text-center">
            現在重点的に取り組んでいる技術スタックです。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {topSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href='/skills'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              全スキルを見る
              <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section - Summary */}
      <section id="projects" className='py-16'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            注目プロジェクト
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 text-center">
            最近手がけた代表的なプロジェクトをご紹介します。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <div className="text-4xl mb-3 text-center">{project.image}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href='/projects'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              全プロジェクトを見る
              <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section - Summary */}
      <section id="experience" className='py-16 bg-gray-50'>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            現在の職歴
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 text-center">
            現在従事している主な業務についてご紹介します。
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{recentExperience.title}</h3>
              <p className="text-primary-600 font-medium">{recentExperience.company}</p>
              <p className="text-gray-600">{recentExperience.period}</p>
            </div>
            <p className="text-gray-600 text-center">
              ReactとNext.jsを使用したレスポンシブWebアプリケーションの開発をリードし、
              クロスファンクショナルチームと協力して高品質な製品を提供しています。
            </p>
          </div>

          <div className="text-center">
            <Link
              href='/experience'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              詳しい経歴を見る
              <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Summary */}
      <section id="contact" className='py-16'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
            お問い合わせ
          </h2>

          <p className='text-lg text-gray-600 mb-8 text-center'>
            ご質問やご相談がございましたら、お気軽にお声がけください！
          </p>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <a
              href='mailto:2027furuyashikiiori@gmail.com'
              className='flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              <div className='flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              <div className='ml-4'>
                <h3 className='text-lg font-medium text-gray-900'>メール</h3>
                <p className='text-gray-600 text-sm'>2027furuyashikiiori@gmail.com</p>
              </div>
            </a>

            <a
              href='tel:+817021726882'
              className='flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              <div className='flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
              </div>
              <div className='ml-4'>
                <h3 className='text-lg font-medium text-gray-900'>電話</h3>
                <p className='text-gray-600 text-sm'>+81 (70) 2172-6882</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <Link
              href='/contact'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              詳細なお問い合わせフォーム
              <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}