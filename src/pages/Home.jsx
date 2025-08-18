import Typewriter from 'typewriter-effect';
import Carousel from '../components/Carousel';

const Home = () => {

  return (
    <div>
      {/* Carousel Section */}
      <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <Carousel />
      </div>

      {/* Services Section */}
      <section className="hero is-white" id='services-data-analytics' style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div className="hero-body" style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
          <div className="container is-fluid" style={{padding: '0 2rem'}}>
            <h1 className="titled title is-1 mb-6 has-text-centered index-heading">
              Our Services
            </h1>
            <div className="columns is-vcentered" style={{backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '15px', margin: '1rem 0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
              <div data-aos="fade-left" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd">
                <figure className="image is-square">
                  <img src="/pictures/undraw_metrics_re_6g90.svg" alt="Data Analytics" />
                </figure>
              </div>
              <div data-aos="fade-down" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd">
                <h1 className="titled title is-1 mb-6">
                  Data Analytics
                </h1>
                <h2 className="subtitled subtitle">
                  Rather than going for a plan that you think is best, data-driven decision-making is a method that
                  uses data to guide business decision making. Often referred to as DDDM or information-based
                  decision-making, we help you bring together historical
                  information to analyze trends and make decisions for the future based on what has worked in
                  the past – rather than decisions based on intestinal feelings, opinions or bias.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="hero is-white" id='services-data-visualization' style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <div className="hero-body" style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
          <div className="container is-fluid" style={{padding: '0 2rem'}}>
            <div className="columns is-vcentered reverse-columns" style={{backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '15px', margin: '1rem 0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
              <div data-aos="fade-right" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd">
                <h1 className="title titled is-1 mb-6">
                  Data Visualization
                </h1>
                <h2 className="subtitle subtitled">
                  A picture is worth a thousand words. The whole point of presenting your data in a visual
                  format is to engage the audience and make your data more readable and digestible.
                </h2>
              </div>
              <div data-aos="fade-down" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd">
                <figure className="image is-square">
                  <img src="/pictures/undraw_visualization_re_1kag.svg" alt="Data Visualization" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Evaluation Section */}
      <section className="hero is-white" id='services-policy-evaluation' style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <div className="hero-body" style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
          <div className="container is-fluid" style={{padding: '0 2rem'}}>
            <div className="columns is-vcentered" style={{backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '15px', margin: '1rem 0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
              <div data-aos="fade-left" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd">
                <figure className="image is-square">
                  <img src="/pictures/undraw_done_checking_re_6vyx.svg" alt="Policy Evaluation" />
                </figure>
              </div>
              <div data-aos="fade-down" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd">
                <h1 className="titled title is-1 mb-6">
                  Policy Evaluation
                </h1>
                <h2 className="subtitled subtitle">
                  Policy evaluation applies evaluation principles and methods to examine the content,
                  implementation or impact of a policy. Evaluation is the activity through which we develop an
                  understanding of the merit, worth, and utility of a policy.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Research Section */}
      <section className="hero is-white" id='services-strategy-evaluation' style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <div className="hero-body" style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
          <div className="container is-fluid" style={{padding: '0 2rem'}}>
            <div className="columns is-vcentered reverse-columns" style={{backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '15px', margin: '1rem 0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
              <div data-aos="fade-right" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd">
                <h1 className="title titled is-1 mb-6">
                  Strategy Research
                </h1>
                <h2 className="subtitle subtitled">
                  A research strategy is a step-by-step plan of action that gives direction to your thoughts
                  and efforts, enabling you to conduct research systematically and on schedule to produce quality
                  results and detailed reporting.
                </h2>
              </div>
              <div data-aos="fade-down" className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd">
                <figure className="image is-square">
                  <img src="/pictures/undraw_business_decisions_re_84ag.svg" alt="Strategy Research" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id='client' className="has-text-centered" style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <div className="container is-fluid" style={{padding: '0 2rem'}}>
          <h1 className="index-heading" style={{marginBottom: '3rem'}}>Our Clients</h1>
          <div className="columns is-multiline is-centered" style={{alignItems: 'center', paddingLeft: '4rem', paddingRight: '4rem'}}>
            <div className='column is-3-desktop is-6-tablet is-12-mobile' style={{padding: '1.5rem'}}>
              <a href="https://ncimpact.sog.unc.edu/">
                <div style={{
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  padding: '2rem 1.5rem',
                  backgroundColor: 'white',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#6c757d';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <img 
                    src="https://ncimpact.sog.unc.edu/wp-content/uploads/sites/1111/2021/07/NCImpact-Logo_OneLine-1.png" 
                    alt="NC Impact"
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </a>
            </div>
            <div className='column is-3-desktop is-6-tablet is-12-mobile' style={{padding: '1.5rem'}}>
              <a href="https://www.nationalacademies.org/">
                <div style={{
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  padding: '2rem 1.5rem',
                  backgroundColor: 'white',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#6c757d';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <img 
                    src="https://intranet.be.uw.edu/wp-content/uploads/sites/4/2021/12/NASEM-logo.png" 
                    alt="National Academies"
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </a>
            </div>
            <div className='column is-3-desktop is-6-tablet is-12-mobile' style={{padding: '1.5rem'}}>
              <a href="https://www.uoregon.edu/">
                <div style={{
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  padding: '2rem 1.5rem',
                  backgroundColor: 'white',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#6c757d';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/University_of_Oregon_logo.svg/1280px-University_of_Oregon_logo.svg.png" 
                    alt="University of Oregon"
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </a>
            </div>
            <div className='column is-3-desktop is-6-tablet is-12-mobile' style={{padding: '1.5rem'}}>
              <a href="https://journals.aom.org/journal/amd">
                <div style={{
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  padding: '2rem 1.5rem',
                  backgroundColor: 'white',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#6c757d';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <img 
                    src="https://journals.aom.org/pb-assets/images/logos/AOMLogo-8-1519785185357.png" 
                    alt="Academy of Management"
                    style={{
                      maxHeight: '60px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="hero is-medium has-text-centered">
        <div className="hero-body">
          <div className="container is-fluid" style={{padding: '0 2rem'}}>
            <div className="columns is-centered has-text-centered">
              <div data-aos="zoom-in-up" className="column is-8">
                <h1 className="title titled is-1 mb-6">
                  Do you <Typewriter
                    options={{
                      strings: ['have a project you\'d like us to work on?', 'want to collaborate with us?'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <h2 className="subtitle subtitled">
                  Get in touch with us now by clicking the button below.
                </h2>
                <div className="arrow" style={{marginBottom: '5rem', marginTop: '5rem'}}>
                  <span></span>
                  <span></span>
                </div>
                <a href="/contact" style={{marginTop: '1rem'}}>
                  <button className="button is-dark">Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;