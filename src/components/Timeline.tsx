interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description: string[];
  technologies?: string[];
  type: 'work' | 'education' | 'certification';
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-cyan-200 transform md:-translate-x-px"></div>

      {items.map((item, index) => (
        <div key={index} className="relative mb-12 md:mb-16">
          {/* Timeline point */}
          <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 ${item.title.includes('受賞') || item.title.includes('賞')
              ? 'bg-amber-500'
              : 'bg-cyan-500'
            }`}></div>

          {/* Content */}
          <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
            <div className={`rounded-lg shadow-md p-6 relative ${item.title.includes('受賞') || item.title.includes('賞')
                ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200'
                : 'bg-white'
              }`}>
              {/* Arrow for desktop */}
              <div className={`hidden md:block absolute top-6 w-3 h-3 transform rotate-45 shadow-md ${item.title.includes('受賞') || item.title.includes('賞')
                  ? 'bg-gradient-to-r from-amber-50 to-yellow-50'
                  : 'bg-white'
                } ${index % 2 === 0 ? '-right-1.5' : '-left-1.5'
                }`}></div>

              {/* Date badge */}
              <div className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {item.date}
              </div>

              {/* Title and subtitle */}
              <h3 className={`text-xl font-semibold mb-1 ${item.title.includes('受賞') || item.title.includes('賞')
                  ? 'text-amber-600 font-bold'
                  : 'text-gray-900'
                }`}>
                {item.title.includes('受賞') || item.title.includes('賞') ? (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item.title}
                  </span>
                ) : (
                  item.title
                )}
              </h3>
              {item.subtitle && (
                <p className={`font-medium mb-3 ${item.title.includes('受賞') || item.title.includes('賞')
                    ? 'text-amber-700'
                    : 'text-cyan-600'
                  }`}>{item.subtitle}</p>
              )}

              {/* Description */}
              <div className="text-gray-600 mb-4 space-y-2">
                {item.description.map((desc, descIndex) => (
                  <p key={descIndex} className="leading-relaxed">{desc}</p>
                ))}
              </div>

              {/* Technologies */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Type indicator */}
              <div className="absolute top-2 right-2">
                {item.type === 'work' && (
                  <div className="w-3 h-3 bg-cyan-500 rounded-full" title="職歴"></div>
                )}
                {item.type === 'education' && (
                  <div className="w-3 h-3 bg-blue-500 rounded-full" title="学歴"></div>
                )}
                {item.type === 'certification' && (
                  <div className="w-3 h-3 bg-green-500 rounded-full" title="資格"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}