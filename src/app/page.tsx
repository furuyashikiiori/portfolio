"use client";

import Link from "next/link";
import ProfileImage from "../components/ProfileImage";
import SocialLinks from "../components/SocialLinks";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedText from "../components/AnimatedText";
import { profileData } from "../data/profile";
import { skillsData } from "../data/skills";
import { projectsData } from "../data/projects";
import { experienceData } from "../data/experience";
import { motion } from "framer-motion";

export default function Home() {
  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <motion.div
      className='mb-3'
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='flex justify-between mb-1'>
        <span className='text-sm font-medium text-gray-700'>{name}</span>
        <span className='text-sm text-gray-500'>{level}%</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <motion.div
          className='bg-primary-600 h-2 rounded-full'
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className='container mx-auto px-4'>
      {/* Hero Section */}
      <AnimatedBackground variant='hero'>
        <section
          id='hero'
          className='text-center py-20 min-h-screen flex items-center'
        >
          <div className='max-w-4xl mx-auto'>
            <AnimatedText className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
              Hello! <span className='text-cyan-600'>{profileData.name}</span>
              です
            </AnimatedText>
            <AnimatedSection
              delay={0.3}
              className='text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed'
            >
              ここは私のポートフォリオサイトです。
              <br />
              これまでに手がけた制作物、身につけたスキルをまとめてます！
            </AnimatedSection>
            <AnimatedSection
              delay={0.6}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <motion.a
                href='#projects'
                className='bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                作品を見る
              </motion.a>
              <motion.a
                href='#contact'
                className='border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                お問い合わせ
              </motion.a>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedBackground>

      {/* About Section - Summary */}
      <section id='about' className='py-16'>
        <div className='max-w-4xl mx-auto'>
          <AnimatedText className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
            About Me
          </AnimatedText>

          <div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
            <AnimatedSection delay={0.2}>
              <ProfileImage size='small' />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {profileData.title}
              </h3>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                {profileData.shortDescription}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {profileData.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm'
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* SNS Links */}
              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                  SNS
                </h4>
                <SocialLinks variant='minimal' />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.6} className='text-center'>
            <Link
              href='/about'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              詳しく見る
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
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section - Summary */}
      <AnimatedBackground variant='section'>
        <section id='skills' className='py-16'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
              主要スキル
            </h2>

            <p className='text-lg text-gray-600 mb-8 text-center'>
              現在重点的に取り組んでいる技術スタックです。
            </p>

            <div className='grid md:grid-cols-2 gap-6 mb-8'>
              {skillsData.topSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>

            <div className='text-center'>
              <Link
                href='/skills'
                className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
              >
                全スキルを見る
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
              </Link>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Projects Section - Summary */}
      <section id='projects' className='py-16'>
        <div className='max-w-6xl mx-auto'>
          <AnimatedText className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
            注目プロジェクト
          </AnimatedText>

          <AnimatedSection
            delay={0.2}
            className='text-lg text-gray-600 mb-8 text-center'
          >
            最近手がけた代表的なプロジェクトをご紹介します。
          </AnimatedSection>

          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            {projectsData.featuredProjects.map((project, index) => (
              <AnimatedCard
                key={project.id}
                delay={index * 0.2}
                className='bg-white rounded-lg shadow-md overflow-hidden'
              >
                <div className='relative h-48 w-full'>
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                  <div className='hidden absolute inset-0 flex items-center justify-center bg-gray-100'>
                    <div className='text-6xl'>{project.image}</div>
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 mb-3 text-sm leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-1 mb-3'>
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className='bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection delay={0.8} className='text-center'>
            <Link
              href='/projects'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              全プロジェクトを見る
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
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section - Summary */}
      <AnimatedBackground variant='section'>
        <section id='experience' className='py-16'>
          <div className='max-w-4xl mx-auto'>
            <AnimatedText className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
              現在の職歴
            </AnimatedText>

            <AnimatedSection
              delay={0.2}
              className='text-lg text-gray-600 mb-8 text-center'
            >
              現在従事している主な業務についてご紹介します。
            </AnimatedSection>

            <AnimatedCard
              delay={0.4}
              className='bg-white p-6 rounded-lg shadow-md mb-8'
            >
              <div className='text-center mb-4'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  {experienceData.currentPosition.title}
                </h3>
                <p className='text-primary-600 font-medium'>
                  {experienceData.currentPosition.company}
                </p>
                <p className='text-gray-600'>
                  {experienceData.currentPosition.period}
                </p>
              </div>
              <p className='text-gray-600 text-center'>
                {experienceData.currentPosition.description}
              </p>
            </AnimatedCard>

            <AnimatedSection delay={0.6} className='text-center'>
              <Link
                href='/experience'
                className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
              >
                詳しい経歴を見る
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
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedBackground>

      {/* Contact Section - Summary */}
      <section id='contact' className='py-16'>
        <div className='max-w-4xl mx-auto'>
          <AnimatedText className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
            お問い合わせ
          </AnimatedText>

          <AnimatedSection
            delay={0.2}
            className='text-lg text-gray-600 mb-8 text-center'
          >
            ご質問やご相談がございましたら、お気軽にお声がけください！
          </AnimatedSection>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <AnimatedCard delay={0.4}>
              <a
                href={`mailto:${profileData.email}`}
                className='flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600'>
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
                      d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium text-gray-900'>メール</h3>
                  <p className='text-gray-600 text-sm'>{profileData.email}</p>
                </div>
              </a>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <a
                href={`tel:${profileData.phoneRaw}`}
                className='flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600'>
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
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium text-gray-900'>電話</h3>
                  <p className='text-gray-600 text-sm'>{profileData.phone}</p>
                </div>
              </a>
            </AnimatedCard>
          </div>

          <AnimatedSection delay={0.8} className='text-center'>
            <Link
              href='/contact'
              className='inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              詳細なお問い合わせフォーム
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
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
