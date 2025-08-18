import { useEffect } from 'react';

const CarolinaAcross100 = () => {
  useEffect(() => {
    // Animate cards to appear with delay
    const cards = document.querySelectorAll('.faqcard');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.display = 'block';
        card.classList.add('slideleft');
      }, 800 * index);
    });

    // Back button scroll functionality
    const handleScroll = () => {
      const btn = document.getElementById('backbutton');
      if (btn) {
        if (window.scrollY > 300) {
          btn.classList.add('show');
        } else {
          btn.classList.remove('show');
        }
      }
    };

    const handleBackClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    const backBtn = document.getElementById('backbutton');
    if (backBtn) {
      backBtn.addEventListener('click', handleBackClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (backBtn) {
        backBtn.removeEventListener('click', handleBackClick);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id='hero' style={{marginBottom: '2rem'}}>
        <section className="hero is-medium has-bg-img fadeIn">
          <div className="hero-body">
            <div className="container has-text-centered text">
              <h1 className="has-text-white title is-1" style={{display: 'inline-block'}}>
                Carolina Across 100 Initiative Survey Data Analysis
              </h1>
            </div>
          </div>
        </section>
      </section>

      <a id="backbutton"></a>

      <section className="section">
        <div className="has-text-centered is-centered">
          <a href="https://carolinaacross100.unc.edu/data/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/pictures/gif for CX100 page.gif" 
              alt="Carolina Across 100 icon" 
              width="600"
              height="800" 
              className="v-lazy-image v-lazy-image-loaded"
            />
          </a>
        </div>
        <br />
        
        <div className="content custom container content main home-list is-centered has-text-centered">
          <h2 id="you-want-to-buy-from-japan">Carolina Across 100 Initiative Survey Data Analysis</h2>
          
          <div className="columns has-text-centered is-centered">
            <div className="column is-two-thirds-desktop is-full-mobile">
              <div style={{textAlign: 'left'}}>
                We were hired by the <em className="shadowh">Carolina Across 100 Initiative</em> out of the <em className="shadowh">UNC School of Government</em> to analyze survey data that asked respondents from all across the state about the effect of COVID-19 on their organizations and communities. 
                Using a suite of data analytics tools, we were able to identify common areas of concern and trends in expectations about recovery from the pandemic. We then created visualizations to present these trends to the initiative's stakeholders, to inform their decisions about how the university can help communities across the state.
                The results of our analysis can be viewed on the Carolina Across 100 website.
              </div>
            </div>
          </div>

          <p>Following are relevant materials for this project.
            <strong> Please click on the cards to open the materials. </strong>
          </p>
        </div>

        <div className="containerarr">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </section>

      <section id='pro'>
        <div className="container fade-out-siblings">
          
          <div className="faqcard grow">
            <a href="https://carolinaacross100.unc.edu/wp-content/uploads/2022/02/CX100-report-02.28.22-final.pdf" target="_blank" rel="noopener noreferrer">
              <div className="feature columns is-vcentered">
                <div className="column has-text-centered">
                  <img 
                    className='hoverzoom'
                    src="/pictures/arclight_logo_horizontal.png" 
                    alt="feature image"
                    style={{maxWidth: '200px'}}
                  />
                </div>
                <div className="column is-four-fifths has-text-centered has-vertically-aligned-content">
                  <p className="subtitle"> 
                    Assessing the Impacts & Identifying a Path Forward:
                    Findings from Carolina Across 100
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="faqcard grow">
            <a href="https://carolinaacross100.unc.edu/data/" target="_blank" rel="noopener noreferrer">
              <div className="feature columns is-vcentered">
                <div className="column has-text-centered">
                  <img 
                    className='hoverzoom'
                    src="/pictures/arclight_logo_horizontal.png" 
                    alt="feature image"
                    style={{maxWidth: '200px'}}
                  />
                </div>
                <div className="column is-four-fifths has-text-centered has-vertically-aligned-content">
                  <p className="subtitle">Website: Carolina Across 100</p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="faqcard grow">
            <a href="https://carolinaacross100.unc.edu/listening-and-learning-new-data-will-inform-carolina-across-100-program-launch/?utm_source=Carolina+Across+100&utm_campaign=8661c494fe-EMAIL_CAMPAIGN_2021_09_07_04_56_COPY_01&utm_medium=email&utm_term=0_09fdca389d-8661c494fe-435054923" target="_blank" rel="noopener noreferrer">
              <div className="feature columns is-vcentered">
                <div className="column has-text-centered">
                  <img 
                    className='hoverzoom'
                    src="/pictures/arclight_logo_horizontal.png" 
                    alt="feature image"
                    style={{maxWidth: '200px'}}
                  />
                </div>
                <div className="column is-four-fifths has-text-centered has-vertically-aligned-content">
                  <p className="subtitle">
                    Blog post: Listening and Learning: New Data Will Inform Carolina Across 100 Program Launch
                  </p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default CarolinaAcross100;