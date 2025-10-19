const Alumni = () => {
    const teamMembers = [
    
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
      }
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
                  Arclight Analytics Alumni
                </h1>
              </div>
            </div>
          </section>
        </section>
  
        {/* About Us Content */}
   
  
        <hr />
          
            <div className='columns is-centered alumni-intro'>
              <div className='column is-half'>
                <h1 className='subtitle is-1 is-muted'>Our Alumni Team</h1>
                <p>
                  At Arclight Analytics, we are deeply grateful to our alumni for their dedication, talent, and lasting contributions. Each member of our alumni team played an important role in shaping our culture of innovation, collaboration, and excellence. Their hard work and insight helped us grow from a small team with big ideas into a thriving company making a meaningful impact through data-driven solutions. Though they’ve moved on to new opportunities, their influence continues to guide our work and inspire the next generation of Arclight innovators.
                </p>
              </div>
            </div>
  
        {/* Team Section */}
        <section className='section is-medium is-white has-text-centered alumni-section'>
          <div className='container is-fluid'>
          
  
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
  
  export default Alumni;
  
