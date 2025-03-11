import React from 'react';
import { FileSpreadsheet, Code, Database, BarChart2 } from 'lucide-react';
import { Skill, SkillsProps } from '@/types';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const defaultSkills: Skill[] = [
    {
      id: 'excel',
      title: "Excel & Google Sheets",
      description: "Advanced formulas, pivot tables, data modeling, and automation",
      icon: <FileSpreadsheet size={32} className="text-indigo-600" />,
      level: 95,
      tools: ["Excel", "Google Sheets", "Pivot Tables", "VLOOKUP", "Power Query"]
    },
    {
      id: 'python',
      title: "Python",
      description: "Data analysis, cleaning, and visualization with pandas, numpy, matplotlib",
      icon: <Code size={32} className="text-indigo-600" />,
      level: 90,
      tools: ["pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"]
    },
    {
      id: 'sql',
      title: "SQL",
      description: "Database design, complex queries, optimization, and data extraction",
      icon: <Database size={32} className="text-indigo-600" />,
      level: 85,
      tools: ["MySQL", "PostgreSQL", "SQL Server", "Joins", "Database Design"]
    },
    {
      id: 'bi',
      title: "BI Tools",
      description: "Interactive dashboards and reports with Power BI and Tableau",
      icon: <BarChart2 size={32} className="text-indigo-600" />,
      level: 80,
      tools: ["Power BI", "Tableau", "Data Visualization", "DAX", "Report Design"]
    }
  ];

  const displaySkills = skills || defaultSkills;

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">My Technical Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displaySkills.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-4px]"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-center mb-4">{skill.description}</p>
              
              {/* Skill level indicator */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                  aria-label={`Skill level: ${skill.level}%`}
                ></div>
              </div>
              <p className="text-xs text-gray-500 text-right">{skill.level}%</p>
              
              {/* Skill tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;