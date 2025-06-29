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
          <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2"></div>
          
          {/* Content */}
          <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              {/* Arrow for desktop */}
              <div className={`hidden md:block absolute top-6 w-3 h-3 bg-white transform rotate-45 shadow-md ${
                index % 2 === 0 ? '-right-1.5' : '-left-1.5'
              }`}></div>
              
              {/* Date badge */}
              <div className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {item.date}
              </div>
              
              {/* Title and subtitle */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
              {item.subtitle && (
                <p className="text-cyan-600 font-medium mb-3">{item.subtitle}</p>
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