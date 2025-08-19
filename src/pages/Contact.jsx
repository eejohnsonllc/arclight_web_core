const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section id='hero' className='hero is-medium has-bg-img fadeIn'>
        <div className='hero-body'>
          <div className='container has-text-centered text'>
            <h1
              className='has-text-white title is-1'
              style={{ display: 'inline-block' }}
            >
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section
        style={{ marginBottom: '3rem', padding: '0 1rem', width: '100%' }}
      >
        <div className='container is-fluid' style={{ maxWidth: '100%' }}>
          {/* Header Section */}
          <div
            className='has-text-centered'
            style={{ marginBottom: '3rem', marginTop: '3rem' }}
          >
            <p className='subtitle is-5'>
              Your data has a story—let’s uncover it together.
            </p>
          </div>

          {/* Main Contact Box */}
          <div
            style={{
              marginBottom: '3rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className='box has-text-centered'
              style={{
                padding: '3rem',
                maxWidth: '800px',
                width: '100%',
                margin: '0 1rem',
              }}
            >
              <h3 className='title is-4'>
                <strong>ArcLight Analytics</strong>
              </h3>
              <div style={{ fontSize: '1.3rem', marginTop: '2rem' }}>
                <span
                  className='icon-text'
                  style={{ justifyContent: 'center' }}
                >
                  <span className='icon'>
                    <i className='fas fa-envelope'></i>
                  </span>
                  <span>
                    <a
                      href='mailto:admin@arclightanalytics.com'
                      className='has-text-link'
                    >
                      admin@arclightanalytics.com
                    </a>
                  </span>
                </span>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <p className='has-text-grey' style={{ fontSize: '1.1rem' }}>
                  Ready to transform your data into actionable insights? Send us
                  an email and let's start the conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div
            className='columns is-multiline is-centered'
            style={{ margin: '0 -0.75rem' }}
          >
            <div
              className='column is-4-widescreen is-6-desktop is-12-tablet'
              style={{ padding: '0.75rem' }}
            >
              <div
                className='box has-text-centered'
                style={{ height: '100%', padding: '2rem' }}
              >
                <span className='icon is-large has-text-primary'>
                  <i className='fas fa-chart-bar fa-3x'></i>
                </span>
                <h4 className='title is-5' style={{ marginTop: '1rem' }}>
                  Data Analytics
                </h4>
                <p>Transform your data into strategic insights</p>
              </div>
            </div>

            <div
              className='column is-4-widescreen is-6-desktop is-12-tablet'
              style={{ padding: '0.75rem' }}
            >
              <div
                className='box has-text-centered'
                style={{ height: '100%', padding: '2rem' }}
              >
                <span className='icon is-large has-text-primary'>
                  <i className='fas fa-eye fa-3x'></i>
                </span>
                <h4 className='title is-5' style={{ marginTop: '1rem' }}>
                  Data Visualization
                </h4>
                <p>Make complex data easy to understand</p>
              </div>
            </div>

            <div
              className='column is-4-widescreen is-6-desktop is-12-tablet'
              style={{ padding: '0.75rem' }}
            >
              <div
                className='box has-text-centered'
                style={{ height: '100%', padding: '2rem' }}
              >
                <span className='icon is-large has-text-primary'>
                  <i className='fas fa-university fa-3x'></i>
                </span>
                <h4 className='title is-5' style={{ marginTop: '1rem' }}>
                  Policy Evaluation
                </h4>
                <p>Evidence-based policy analysis and research</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
