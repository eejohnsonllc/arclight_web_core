import { useEffect } from 'react';

const SbirSttr = () => {
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
              <h1 className="has-text-white title is-1" style={{display: 'inline-block', textShadow: '0 0 10px rgba(71, 102, 98, 1), 0 0 20px rgba(59, 79, 73, 1), 0 0 30px #0ff'}}>
                Review of the SBIR and STTR programs at the Department of Energy
              </h1>
            </div>
          </div>
        </section>
      </section>

      <a id="backbutton"></a>

      <section className="section">
        <div className="has-text-centered is-centered">
          <a href="https://www.nationalacademies.org/our-work/review-of-the-small-business-innovation-research-and-small-business-technology-transfer-programs-at-the-department-of-energy" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://www.nap.edu/cover/25674/450" 
              alt="SBIR STTR Review icon" 
              width="550"
              height="800" 
              className="v-lazy-image v-lazy-image-loaded"
            />
          </a>
        </div>
        <br />
        
        <div className="content custom container content main home-list is-centered has-text-centered">
          <h2 id="you-want-to-buy-from-japan">Review of the SBIR and STTR programs at the Department of Energy</h2>
          
          <div className="columns has-text-centered is-centered">
            <div className="column is-two-thirds-desktop is-full-mobile">
              <div style={{textAlign: 'left'}}>
                Dr. Johnson served as the Principal Consultant for the Review of the Small Business Innovation
                Research and Small Business Technology Transfer Programs at the <em className="shadowh"> Department
                of Energy</em>.
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
            <a href="https://www.nationalacademies.org/our-work/review-of-the-small-business-innovation-research-and-small-business-technology-transfer-programs-at-the-department-of-energy" target="_blank" rel="noopener noreferrer">
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
                    Report: Review of the SBIR and STTR Programs at the Department of Energy
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

export default SbirSttr;