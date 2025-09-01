"use client";

import { skillsData } from "../../data/skills";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedCard from "../../components/AnimatedCard";
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion";

export default function Skills() {
  const SkillBar = ({
    name,
    level,
    delay = 0,
  }: {
    name: string;
    level: number;
    delay?: number;
  }) => (
    <motion.div
      className='mb-4'
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
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
          transition={{ duration: 1.2, delay: delay + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-6xl mx-auto'>
        <AnimatedText className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
          スキルと技術
        </AnimatedText>

        <AnimatedSection
          delay={0.2}
          className='text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto'
        >
          私は新しい技術を学び、スキルを向上させることに情熱を注いでいます。
          <br />
          こちらは私のスキルや技術の概要です。
        </AnimatedSection>

        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          {skillsData.categories.map((category, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.2}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <h3 className='text-xl font-semibold text-gray-900 mb-6 text-center'>
                {category.title}
              </h3>
              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <AnimatedCard
            delay={0.6}
            className='bg-white p-6 rounded-lg shadow-md'
          >
            <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center'>
              <svg
                className='w-6 h-6 text-primary-600 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
              現在学習中
            </h3>
            <ul className='text-gray-600 space-y-2'>
              {skillsData.learningSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  • {skill}
                </motion.li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard
            delay={0.8}
            className='bg-white p-6 rounded-lg shadow-md'
          >
            <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center'>
              <svg
                className='w-6 h-6 text-primary-600 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
              ソフトスキル
            </h3>
            <ul className='text-gray-600 space-y-2'>
              {skillsData.softSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  • {skill}
                </motion.li>
              ))}
            </ul>
          </AnimatedCard>
        </div>

        <AnimatedSection delay={1.0} className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
            学び続ける
          </h3>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            youtubeやオンラインコースを通じて新しい技術を学び続けています。
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
