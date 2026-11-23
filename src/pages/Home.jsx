import Typewriter from 'typewriter-effect';
import Carousel from '../components/Carousel';
import StoryCards from '../components/StoryCards';

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div style={{ paddingTop: '0', paddingBottom: '0', overflow: 'hidden' }}>
        <Carousel />
      </div>

      <StoryCards />

      {/* Our Clients Section */}
      <section
        id='client'
        className='has-text-centered'
        style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
      >
        <div className='container is-fluid' style={{ padding: '0 2rem' }}>
          <h1 className='index-heading' style={{ marginBottom: '3rem' }}>
            Our Clients
          </h1>
          <div
            className='columns is-multiline is-centered'
            style={{
              alignItems: 'center',
              paddingLeft: '4rem',
              paddingRight: '4rem',
            }}
          >
            <div
              className='column is-3-desktop is-6-tablet is-12-mobile'
              style={{ padding: '1.5rem' }}
            >
              <a href='https://ncimpact.sog.unc.edu/'>
                <div
                  style={{
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    padding: '2rem 1.5rem',
                    backgroundColor: 'white',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6c757d';
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e9ecef';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src='https://ncimpact.sog.unc.edu/wp-content/uploads/sites/1111/2021/07/NCImpact-Logo_OneLine-1.png'
                    alt='NC Impact'
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </a>
            </div>
            <div
              className='column is-3-desktop is-6-tablet is-12-mobile'
              style={{ padding: '1.5rem' }}
            >
              <a href='https://www.nationalacademies.org/'>
                <div
                  style={{
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    padding: '2rem 1.5rem',
                    backgroundColor: 'white',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6c757d';
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e9ecef';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src='https://intranet.be.uw.edu/wp-content/uploads/sites/4/2021/12/NASEM-logo.png'
                    alt='National Academies'
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </a>
            </div>
            <div
              className='column is-3-desktop is-6-tablet is-12-mobile'
              style={{ padding: '1.5rem' }}
            >
              <a href='https://www.uoregon.edu/'>
                <div
                  style={{
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    padding: '2rem 1.5rem',
                    backgroundColor: 'white',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6c757d';
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e9ecef';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/University_of_Oregon_logo.svg/1280px-University_of_Oregon_logo.svg.png'
                    alt='University of Oregon'
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </a>
            </div>
            <div
              className='column is-3-desktop is-6-tablet is-12-mobile'
              style={{ padding: '1.5rem' }}
            >
              <a href='https://journals.aom.org/journal/amd'>
                <div
                  style={{
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    padding: '2rem 1.5rem',
                    backgroundColor: 'white',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6c757d';
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e9ecef';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src='https://journals.aom.org/pb-assets/images/logos/AOMLogo-8-1519785185357.png'
                    alt='Academy of Management'
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='hero is-medium has-text-centered'>
        <div className='hero-body'>
          <div className='container is-fluid' style={{ padding: '0 2rem' }}>
            <div className='columns is-centered has-text-centered'>
              <div data-aos='zoom-in-up' className='column is-8'>
                <h1 className='title titled is-1 mb-6'>
                  Do you{' '}
                  <Typewriter
                    options={{
                      strings: [
                        "have a project you'd like us to work on?",
                        'want to collaborate with us?',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <h2 className='subtitle subtitled'>
                  Get in touch with us now by clicking the button below.
                </h2>
                <div
                  className='arrow'
                  style={{ marginBottom: '5rem', marginTop: '5rem' }}
                >
                  <span></span>
                  <span></span>
                </div>
                <a href='/contact' style={{ marginTop: '1rem' }}>
                  <button className='button is-dark'>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          /* Mobile responsive styles for Home page */
          @media (max-width: 768px) {
            .container.is-fluid {
              padding: 0 1rem !important;
            }
            .index-heading {
              font-size: 2.5rem !important;
            }
            .title.is-1 {
              font-size: 2rem !important;
            }
            .subtitle {
              font-size: 1rem !important;
              line-height: 1.5 !important;
            }
            .columns {
              padding: 1rem !important;
            }
            .column {
              margin-bottom: 1rem !important;
            }
            .hero-body {
              padding: 1rem !important;
            }
            .arrow {
              margin-bottom: 3rem !important;
              margin-top: 3rem !important;
            }
            #client .columns {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .container.is-fluid {
              padding: 0 0.5rem !important;
            }
            .index-heading {
              font-size: 2rem !important;
            }
            .title.is-1 {
              font-size: 1.75rem !important;
            }
            .subtitle {
              font-size: 0.95rem !important;
              line-height: 1.4 !important;
            }
            .columns {
              padding: 0.75rem !important;
            }
            .hero-body {
              padding: 0.75rem !important;
            }
            .arrow {
              margin-bottom: 2rem !important;
              margin-top: 2rem !important;
            }
            #client .columns {
              padding-left: 0.5rem !important;
              padding-right: 0.5rem !important;
            }
            .button.is-dark {
              font-size: 0.9rem !important;
              padding: 0.75rem 1.5rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
