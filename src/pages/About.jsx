const About = () => {
  const currentTeam = [
    {
      name: 'Evan Johnson',
      title: 'Director',
      image: '/pictures/team/evan_johnson_new.jpg',
      description:
        'Dr. Johnson is a policy consultant and researcher as well as a Teaching Assistant Professor at UNC-CH. His research focuses on innovation and public policy, specifically in the energy and small business sectors.',
      social: 'https://evanejohnson.com/',
      icon: 'fas fa-home',
    },
    {
      name: 'Ashley Cox',
      title: 'Administrative Analyst',
      image: '/pictures/team/Ashley.jpeg',
      description:
        'Ashley earned her B.A. degree in Public Policy from UNC-CH in 2024. At Arclight, she provides administrative support, including communication with clients, as well as general data analysis.',
      social: 'https://www.linkedin.com/in/ashley-cox-9a24b1315/',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'Erin Flanagan',
      title: 'Research Analyst',
      image: '/pictures/team/Erin.jpeg',
      description:
        'Erin Flanagan is a senior Honors student at UNC-CH pursuing a B.A. degree in Environmental Studies. She is interested in the ways that economic, political, and social systems impact the health of people and the environment.',
      social: 'https://www.linkedin.com/in/erin-m-flanagan/',
      icon: 'fab fa-linkedin',
    },
  ];

  const alumniTeam = [
    {
      name: 'Yukun Yang',
      title: 'Data Scientist',
      image: '/pictures/team/Yukun.jpg',
      description:
        'Yukun earned his M.S. degree in Information Science from UNC-CH. At Arclight, he worked to identify data needs and opportunities, adopt the best practices for data collection, and render visually appealing data visualizations.',
      social: 'https://yukunyang.info/',
      icon: 'fas fa-home',
    },
    {
      name: 'Savannah Dowden',
      title: 'Research Analyst',
      image: '/pictures/team/Savannah.jpg',
      description:
        'Savannah earned her B.S. degree in Public Policy and Statistics from UNC-CH in 2021. At Arclight, she worked to clean datasets, perform data analysis, and assist in developing research methodologies.',
      social: 'https://www.linkedin.com/in/savannah-dowden-8b046017a/',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'Megan Doherty',
      title: 'Administrative Analyst',
      image: '/pictures/team/Megan.jpg',
      description:
        'Megan earned her B.S. degree in Biology and minors in Environmental Science, Mandarin, and Chemistry from UNC-CH in 2022. At Arclight, she provided administrative support, performed data analysis, and assisted in report writing.',
      social: 'https://www.linkedin.com/in/megan-doherty-31b3981aa/',
      icon: 'fab fa-linkedin',
    },
  ];

  const renderTeamSection = (title, members, extraClass = '') => (
    <section className={`section is-medium has-text-centered ${extraClass}`}>
      <div className='container is-fluid'>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <h1 className='subtitle is-1 is-muted'>{title}</h1>
          </div>
        </div>

        <div className='team-boxed'>
          <div className='container is-fluid'>
            <div className='row people'>
              {members.map((member, index) => (
                <div key={index} className='col-md-6 col-lg-3 item'>
                  <div className='box'>
                    <img
                      className='rounded-circle'
                      src={member.image}
                      alt={member.name}
                    />
                    <h3 className='name'>{member.name}</h3>
                    <p className='title'>{member.title}</p>
                    <p className='description'>{member.description}</p>
                    <div className='social'>
                      <a
                        href={member.social}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className={member.icon}></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {/* Hero Section */}
      <section id='hero'>
        <section className='hero is-medium has-bg-img fadeIn'>
          <div className='hero-body'>
            <div className='container has-text-centered text'>
              <h1
                className='has-text-white title is-1'
                style={{
                  display: 'inline-block',
                  textShadow:
                    '0 0 10px rgba(71, 102, 98, 1), 0 0 20px rgba(59, 79, 73, 1), 0 0 30px #0ff',
                }}
              >
                About Arclight Analytics
              </h1>
            </div>
          </div>
        </section>
      </section>

      {/* About Section */}
      <section
        className='section'
        style={{ background: 'rgba(255, 255, 255, 0.3)' }}
      >
        <div className='container'>
          <div className='columns'>
            <div className='column is-centered-tablet-portrait'>
              <h3 className='subtitle is-3 is-muted'>Who We Are</h3>
              <div className='divider'></div>
            </div>
            <div className='column is-8'>
              <article className='media'>
                <div className='content'>
                  Arclight Analytics was founded by Dr. Evan Johnson, a
                  researcher with the University of North Carolina at Chapel
                  Hill with over ten years of experience in quantitative
                  research and policy analysis. Dr. Johnson has a passion for
                  using quantitative research and data analytics tools to solve
                  problems in policy and management, and has recruited a team of
                  like-minded analysts that make up Arclight Analytics.
                </div>
              </article>

              <article className='media'>
                <div className='content'>
                  Dr. Johnson and his team at Arclight are skilled in data
                  analytics, data visualization, geospatial analysis, and
                  programming. Our work benefits clients in the public, private,
                  and academic sectors looking to solve problems and improve
                  strategy using large datasets. We employ a variety of
                  analytical tools to perform program evaluation and causal
                  inference; econometric analysis and data manipulation; and
                  exploratory data analysis.
                </div>
              </article>

              <article className='media'>
                <div className='content'>
                  We at Arclight believe that careful analysis of large datasets
                  can shed light on important trends and insights into how your
                  organization's strategy is working in practice. Our goal is to
                  bring a rigorous academic approach to analysis of your data,
                  to allow your organization to make the most informed decisions
                  moving forward.
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

  

      {renderTeamSection('Our Team', currentTeam, 'current-team')}
      {renderTeamSection('Our Alumni', alumniTeam, 'alumni-section')}

    </div>
  );
};

export default About;
