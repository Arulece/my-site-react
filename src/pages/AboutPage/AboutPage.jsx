import './AboutPage.scss';

const AboutPage = () => {
  const experiences = [
    {
      id: 1,
      company: 'Adobe',
      logo: '🏢',
      role: 'Technical Consultant',
      employmentType: 'Full-time',
      duration: 'Jul 2022 – Present',
      location: 'Bengaluru, Hybrid',
      description:
        "Enterprise-scale AEM and e-commerce development using EDS, React, Phoenix, Alpine.js, and SCSS. Delivered high-impact projects for Holland America Line, Maruti Accessories, T-Mobile, and Macy's.",
      achievements: [
        'Built reusable components and optimized performance',
        'Ensured cross-device compatibility for enterprise solutions',
        'Mentored team members and conducted knowledge transfer sessions',
        'Handled task estimation, sprint planning, and Agile ceremonies',
        'Leveraged AI-assisted development tools to improve delivery speed',
      ],
      skills: [
        'React',
        'AEM',
        'Alpine.js',
        'SCSS',
        'EDS',
        'Phoenix',
        'JavaScript',
        'Performance Optimization',
      ],
    },
    {
      id: 2,
      company: 'ABB',
      logo: '⚡',
      role: 'Research & Development Engineer',
      employmentType: 'Full-time',
      duration: 'Apr 2020 – Jun 2022',
      location: 'Remote',
      description:
        'Full Stack development using C#, Angular, JavaScript, and MLflow. Built data ingestion, filtering, ML training workflows, and interactive visualizations for Genix Model Fabric platform.',
      achievements: [
        'Designed and implemented data ingestion and filtering pipelines',
        'Built ML training workflows and visualization dashboards',
        'Delivered robust backend services using C#',
        'Created intuitive UI for data-driven applications',
      ],
      skills: [
        'C#',
        'Angular',
        'JavaScript',
        'MLflow',
        'Data Visualization',
        'Backend Development',
      ],
    },
    {
      id: 3,
      company: 'Wipro Limited',
      logo: '💼',
      role: 'Software Engineer',
      employmentType: 'Full-time',
      duration: 'Jun 2019 – Mar 2020',
      location: 'On-site',
      description:
        'Front-end development using Angular and Python. Worked on Cisco Cloud Email Security project to build modular, scalable UI components and optimize enterprise-grade applications.',
      achievements: [
        'Built modular, scalable UI components',
        'Optimized enterprise-grade applications for performance',
        'Collaborated with backend teams on API integration',
        'Ensured code quality and maintainability standards',
      ],
      skills: ['Angular', 'Python', 'JavaScript', 'UI/UX Design', 'Performance Optimization'],
    },
    {
      id: 4,
      company: 'BizRuntime IT Services',
      logo: '🚀',
      role: 'Software Engineer',
      employmentType: 'Full-time',
      duration: 'Jul 2017 – Jun 2019',
      location: 'On-site',
      description:
        'Full Stack development using Angular 7, C#, .NET MVC, Web API, and Azure. Worked on oil well digital optimization solutions (Visur.one, Canada).',
      achievements: [
        'Delivered asset management and people management modules',
        'Built comprehensive admin and analytics modules',
        'Integrated Azure cloud services for scalability',
        'Optimized database queries for performance',
      ],
      skills: [
        'Angular 7',
        'C#',
        '.NET MVC',
        'Web API',
        'Azure',
        'SQL Server',
        'Full Stack Development',
      ],
    },
    {
      id: 5,
      company: 'Run Service Infocare Pvt Ltd',
      logo: '🛠️',
      role: 'Associate Engineer',
      employmentType: 'Full-time',
      duration: 'Feb 2015 – Mar 2016',
      location: 'On-site',
      description:
        'Mobile Service Engineer for Sony smartphones. Customer-facing technical support with hardware/software debugging and SRM (Service Request Management) system management.',
      achievements: [
        'Provided customer-facing technical support',
        'Diagnosed and resolved hardware/software issues',
        'Managed SRM system for efficient service delivery',
        'Ensured high service quality and customer satisfaction',
      ],
      skills: [
        'Technical Support',
        'Hardware Debugging',
        'Software Troubleshooting',
        'Customer Service',
        'SRM Management',
      ],
    },
  ];

  const education = [
    {
      id: 1,
      institution: 'Salem College of Engineering and Technology',
      degree: 'Bachelor of Engineering',
      specialization: 'Electronics and Communication Engineering (ECE)',
      duration: '2010 – 2014',
      grade: '7.2/10',
    },
    {
      id: 2,
      institution: "St. Mary's Higher Secondary School",
      degree: 'Higher Secondary',
      specialization: 'Computer Science',
      duration: '2009 – 2010',
      grade: null,
    },
  ];

  const skills = {
    frontend: ['React', 'Angular', 'Alpine.js', 'JavaScript', 'SCSS', 'HTML', 'CSS', 'D3.js'],
    backend: ['C#', '.NET', 'Java', 'Python', 'JavaScript', 'Web API', 'MongoDB', 'SQL Server'],
    tools: ['Adobe Experience Manager', 'Git', 'Azure', 'Webpack', 'npm', 'Jest', 'MLflow'],
    methodologies: ['Agile', 'Scrum', 'Full Stack Development', 'Component-based Architecture'],
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-page__hero">
        <div className="about-page__container">
          <h1 className="about-page__hero-title">About Me</h1>
          <p className="about-page__hero-subtitle">
            Full-stack developer specializing in Adobe Experience Manager (AEM) and e-commerce
            solutions
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-page__section about-page__intro-section">
        <div className="about-page__container">
          <h2 className="about-page__section-title">Professional Summary</h2>
          <div className="about-page__intro-content">
            <p className="about-page__intro-text">
              I am a full-stack developer specializing in Adobe Experience Manager (AEM) and
              e-commerce solutions, with hands-on experience in React, Alpine.js, SCSS, JavaScript,
              jQuery, D3.js, HTML, CSS, Java, C#, and MongoDB. With a proven track record of
              delivering scalable, high-performance digital experiences for enterprise clients, I
              bring a combination of technical expertise and strategic thinking to every project.
            </p>
            <p className="about-page__intro-text">
              My passion lies in creating elegant solutions to complex problems, mentoring team
              members, and continuously learning emerging technologies. Whether working on
              enterprise platforms or building optimized components, I&apos;m committed to
              delivering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="about-page__section about-page__skills-section">
        <div className="about-page__container">
          <h2 className="about-page__section-title">Key Skills</h2>
          <div className="about-page__skills-grid">
            <div className="about-page__skill-category">
              <h3 className="about-page__skill-category-title">Frontend</h3>
              <div className="about-page__skill-tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="about-page__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="about-page__skill-category">
              <h3 className="about-page__skill-category-title">Backend</h3>
              <div className="about-page__skill-tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="about-page__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="about-page__skill-category">
              <h3 className="about-page__skill-category-title">Tools & Platforms</h3>
              <div className="about-page__skill-tags">
                {skills.tools.map((skill) => (
                  <span key={skill} className="about-page__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="about-page__skill-category">
              <h3 className="about-page__skill-category-title">Methodologies</h3>
              <div className="about-page__skill-tags">
                {skills.methodologies.map((skill) => (
                  <span key={skill} className="about-page__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-page__section about-page__experience-section">
        <div className="about-page__container">
          <h2 className="about-page__section-title">Experience</h2>
          <div className="about-page__timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="about-page__timeline-item">
                <div className="about-page__experience-card">
                  <div className="about-page__experience-header">
                    <div className="about-page__experience-logo">{exp.logo}</div>
                    <div className="about-page__experience-title-group">
                      <h3 className="about-page__experience-role">{exp.role}</h3>
                      <p className="about-page__experience-company">{exp.company}</p>
                    </div>
                  </div>

                  <div className="about-page__experience-meta">
                    <span className="about-page__experience-meta-item">{exp.employmentType}</span>
                    <span className="about-page__experience-meta-divider">•</span>
                    <span className="about-page__experience-meta-item">{exp.duration}</span>
                    <span className="about-page__experience-meta-divider">•</span>
                    <span className="about-page__experience-meta-item">{exp.location}</span>
                  </div>

                  <p className="about-page__experience-description">{exp.description}</p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="about-page__experience-achievements">
                      <h4 className="about-page__experience-achievements-title">
                        Key Achievements
                      </h4>
                      <ul className="about-page__experience-achievements-list">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="about-page__achievement-item">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="about-page__experience-skills">
                      <div className="about-page__experience-skill-tags">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="about-page__experience-skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="about-page__section about-page__education-section">
        <div className="about-page__container">
          <h2 className="about-page__section-title">Education</h2>
          <div className="about-page__education-grid">
            {education.map((edu) => (
              <div key={edu.id} className="about-page__education-card">
                <div className="about-page__education-card-header">
                  <h3 className="about-page__education-degree">{edu.degree}</h3>
                  <p className="about-page__education-institution">{edu.institution}</p>
                </div>
                <div className="about-page__education-content">
                  <p className="about-page__education-specialization">{edu.specialization}</p>
                  <div className="about-page__education-footer">
                    <span className="about-page__education-duration">{edu.duration}</span>
                    {edu.grade && (
                      <span className="about-page__education-grade">GPA: {edu.grade}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
