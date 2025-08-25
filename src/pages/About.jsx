const About = () => {
  const teamMembers = [
    {
      name: 'Evan Johnson',
      title: 'Director ',
      image: '/pictures/team/evan_johnson_new.jpg',
      description:
        'Dr. Johnson is a policy consultant and researcher as well as a Teaching Assistant Professor at UNC-CH. His research focuses on innovation and public policy, specifically in the energy and small business sectors.',
      social: 'https://evanejohnson.com/',
      icon: 'fas fa-home',
    },
    {
      name: 'Yukun Yang',
      title: ' Data Scientist ',
      image: '/pictures/team/Yukun.jpg',
      description:
        'Yukun earned his M.S. degree in Information Science from UNC-CH. At Arclight, he works to identify data needs and opportunities, adopt the best practices for data collection, and render visually appealing data visualizations.',
      social: 'https://yukunyang.info/',
      icon: 'fas fa-home',
    },
    {
      name: 'Savannah Dowden',
      title: 'Research Analyst ',
      image: '/pictures/team/Savannah.jpg',
      description:
        'Savannah earned her B.S. degree in Public Policy and Statistics from UNC-CH in May of 2021. At Arclight, she works to clean datasets, perform data analysis, and assists in developing research methodologies.',
      social: 'https://www.linkedin.com/in/savannah-dowden-8b046017a/',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'Megan Doherty',
      title: 'Administrative Analyst ',
      image: '/pictures/team/Megan.jpg',
      description:
        'Megan earned her B.S. degree in Biology and minors in Environmental Science, Mandarin, and Chemistry from UNC-CH in 2022. At Arclight, she provides administrative support, performs data analysis, and assists in report writing.',
      social: 'https://www.linkedin.com/in/megan-doherty-31b3981aa/',
      icon: 'fab fa-linkedin',
    },
  ];

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
                What Arclight Analytics Is All About
              </h1>
            </div>
          </div>
        </section>
      </section>

      {/* About Us Content */}
      <section
        className='section'
        style={{ background: 'rgba(255, 255, 255, 0.3)' }}
      >
        <div className='container'>
          <div className='columns'>
            <div className='column is-centered-tablet-portrait'>
              <h3 className='subtitle is-3 is-muted'>About Us</h3>
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
                  exploratory data analysis. After identifying important trends
                  and key findings from the data, we utilize advanced data
                  visualization techniques to communicate these findings to
                  stakeholders and translate complex datasets into digestible
                  conclusions. Specific areas of expertise include data science
                  for business, government incentives for innovation,
                  entrepreneurship and strategy research.
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

      <hr />

      {/* Team Section */}
      <section className='section is-medium is-white has-text-centered has-border-top'>
        <div className='container is-fluid'>
          <div className='columns is-centered'>
            <div className='column is-half'>
              <h3 className='subtitle is-3 is-muted'>Our Team</h3>
              <p>
                We strive to create an environment that rewards our staff and
                our clients.
              </p>
            </div>
          </div>

          <div className='team-boxed'>
            <div className='container is-fluid'>
              <div className='row people'>
                {teamMembers.map((member, index) => (
                  <div key={index} className='col-md-6 col-lg-3 item'>
                    <div className='box'>
                      <img
                        className='rounded-circle'
                        src={member.image}
                        alt={member.name}
                      />
                      <h3 className='name'>{member.name}</h3>
                      <p
                        className='title'
                        style={{
                          marginBottom: '15px',
                          display: 'block',
                          clear: 'both',
                        }}
                      >
                        {member.title}
                      </p>
                      <p
                        className='description'
                        style={{
                          marginTop: '0',
                          display: 'block',
                          clear: 'both',
                        }}
                      >
                        {member.description}
                      </p>
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
    </div>
  );
};

export default About;
