const Bio = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id='hero'>
        <section className="hero is-medium has-bg-img fadeIn">
          <div className="hero-body">
            <div className="container has-text-centered text">
              <h1 className="has-text-white title is-1" style={{display: 'inline-block'}}>Biography</h1>
            </div>
          </div>
        </section>
      </section>

      {/* Main Content */}
      <section id='maincontent'>
        <div className="columns is-vcentered" style={{marginTop: '1rem'}}>
          <div className="column is-half left-col" style={{marginTop: '2rem'}}>
            <div className="logo has-text-centered">
              <figure className="effect-chico">
                <img src="/pictures/logo2.png" alt="ArcLight Analytics Logo" />
                <figcaption>
                  <p>Get to know about our team on the right!</p>
                </figcaption>
              </figure>
            </div>
          </div>
          
          <div className="column left-col">
            <div className="content has-text-centered" style={{marginTop: '2rem'}}>
              <figure className="image">
                <img 
                  className='is-rounded' 
                  style={{width: '256px', height: '256px', margin: '0 auto'}} 
                  src="/pictures/team/evan_johnson_new.jpg" 
                  alt="Dr. Evan Johnson" 
                />
              </figure>
              <h4 style={{ marginTop: '2rem' }}>Dr. Evan Johnson</h4>
              <div className="biocontent" style={{
                marginTop: '2rem', 
                marginLeft: '4rem', 
                marginRight: '4.2rem', 
                marginBottom: '2.5rem'
              }}>
                <p>
                  Dr. Evan Johnson is a researcher with the University of North Carolina at Chapel Hill with
                  over ten years of experience in quantitative research and policy analysis. He has won NSF
                  grants to study government incentives for innovation and small businesses. Dr. Johnson and
                  his team are skilled in data analytics, data visualization, mapping, and programming. Their
                  work benefits clients in the public, private, and academic sectors looking to solve problems
                  with new data and rigorous analytical tools. Specific areas of expertise include program
                  evaluation and causal inference; data visualization; business data; government incentives
                  for innovation; entrepreneurship and strategy research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;