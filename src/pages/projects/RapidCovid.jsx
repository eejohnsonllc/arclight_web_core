import { useEffect } from 'react';

const RapidCovid = () => {
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
              <h1 className="has-text-white title is-1" style={{display: 'inline-block',textShadow: '0 0 10px rgba(71, 102, 98, 1), 0 0 20px rgba(59, 79, 73, 1), 0 0 30px #0ff'}}>
                RAPID: Examining the Innovative Ecosystem During the COVID-19 Pandemic
              </h1>
            </div>
          </div>
        </section>
      </section>

      <a id="backbutton"></a>
, 
      <section className="section">
        <div className="has-text-centered is-centered">
          <a href="https://www.sciencedirect.com/science/article/pii/S0048733321001943?via%3Dihub" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://ars.els-cdn.com/content/image/1-s2.0-S0048733321001943-gr2.jpg" 
              alt="RAPID COVID Research icon" 
              width="1000"
              height="900" 
              className="v-lazy-image v-lazy-image-loaded"
            />
          </a>
        </div>
        <br />
        
        <div className="content custom container content main home-list is-centered has-text-centered">
          <h2 id="you-want-to-buy-from-japan">RAPID: Examining the Innovative Ecosystem During the COVID-19 Pandemic</h2>
          
          <div className="columns has-text-centered is-centered">
            <div className="column is-two-thirds-desktop is-full-mobile">
              <div style={{textAlign: 'left'}}>
                For this ongoing project, Dr. Johnson assembled a Relational Database Management System (RDMS)
                that brings together data from the <em className="shadowh">USASpending</em>, <em className="shadowh">Systems for Award Management</em>, and <em className="shadowh">Dynamic Small Business Search</em>
                databases. Data cleaning and analysis was also performed using Python. Dr. Johnson and his
                collaborators recently authored a paper about the RDMS which was published in a special issue of
                Research Policy.
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
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2032914" target="_blank" rel="noopener noreferrer">
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
                  <p className="subtitle">RAPID Grant Award Abstract</p>
                </div>
              </div>
            </a>
          </div>

          <div className="faqcard grow">
            <a href="https://doi.org/10.1016/j.respol.2021.104398" target="_blank" rel="noopener noreferrer">
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
                    A Framework and Databases for Measuring Entrepreneurial Ecosystems. A paper derived from this project published in a special issue of Research Policy.
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

export default RapidCovid;