import React from 'react';
import './Skills.css';
import { FaReact, FaNode, FaMicrochip, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaReact />,
      title: 'Frontend & Mobile Development',
      skills: ['React.js', 'Flutter', 'Dart', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Responsive Design']
    },
    {
      icon: <FaNode />,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'Java', 'C++', 'PHP', 'MongoDB', 'PostgreSQL', 'MySQL', 'REST APIs', 'Firebase']
    },
    {
      icon: <FaMicrochip />,
      title: 'IoT & Machine Learning',
      skills: ['Raspberry Pi', 'Arduino', 'ESP32', 'Machine Learning', 'scikit-learn', 'CatBoost', 'NLP', 'Speech Recognition', 'Vosk', 'Whisper', 'Computer Vision', 'Embedded Systems', 'MATLAB', 'Simulink', 'Proteus']
    },
    {
      icon: <FaTools />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Photoshop', 'Cisco Packet Tracer', 'Web Development', 'Computer Vision', 'Digital Design', 'Linux', 'Agile Methodology']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-subtitle">Technologies and tools I work with to build amazing solutions</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-item" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
