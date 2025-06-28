import Link from "next/link";

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <section className='text-center py-20'>
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
            <Link
              href='/projects'
              className='bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
            >
              作品を見る
            </Link>
            <Link
              href='/contact'
              className='border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors'
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center p-6 bg-white rounded-lg shadow-md'>
            <div className='w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-primary-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              クリーンコード
            </h3>
            <p className='text-gray-600'>
              ベストプラクティスに従った保守性、拡張性、効率性の高いコードの記述
            </p>
          </div>

          <div className='text-center p-6 bg-white rounded-lg shadow-md'>
            <div className='w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-primary-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              レスポンシブデザイン
            </h3>
            <p className='text-gray-600'>
              すべてのデバイスでシームレスに動作する美しいレスポンシブインターフェースの作成
            </p>
          </div>

          <div className='text-center p-6 bg-white rounded-lg shadow-md'>
            <div className='w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-primary-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              パフォーマンス
            </h3>
            <p className='text-gray-600'>
              速度、アクセシビリティ、ユーザーエクスペリエンスのためのアプリケーション最適化
            </p>
          </div>
        </div>
      </section>

      <section className='py-16 text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8'>
          一緒に働きませんか？
        </h2>
        <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
          私は常に新しい機会とエキサイティングなプロジェクトに興味があります。
          あなたのアイデアをどのように実現できるか、話し合いましょう。
        </p>
        <Link
          href='/contact'
          className='inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors'
        >
          会話を始める
        </Link>
      </section>
    </div>
  );
}
