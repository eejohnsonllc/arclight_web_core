import { useEffect } from 'react';

const GrantExplorer = () => {
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
                Grant Abstract Text Explorer
              </h1>
              <br />
              <p className='subtitle'>
                <a 
                  style={{color: 'white'}} 
                  href="http://grantabstract-dev.us-east-1.elasticbeanstalk.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </p>
            </div>
          </div>
        </section>
      </section>

      <a id="backbutton"></a>

      <section className="section">
        <div className="has-text-centered is-centered">
          <a 
            style={{color: 'white'}}
            href="http://grantabstract-dev.us-east-1.elasticbeanstalk.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/pictures/grant.png"
              alt="Grant Abstract Text Explorer icon" 
              width="1000" 
              height="900" 
              className="v-lazy-image v-lazy-image-loaded"
            />
          </a>
        </div>
        <br />
        
        <div className="content custom container content main home-list is-centered has-text-centered">
          <h2 id="you-want-to-buy-from-japan">Grant Abstract Text Explorer</h2>
          
          <div className="columns has-text-centered is-centered">
            <div className="column is-two-thirds-desktop is-full-mobile">
              <div style={{textAlign: 'left'}}>
                We built this tool to allow users to search the abstracts of <em>154135 grant awards</em> from
                11 federal award agencies using key words. The tool shows users a table with descriptive
                information on all grants that include the search term in their abstracts, as well as
                visualizations that show which agencies these results come from, trends of awards over time, and
                whether the grants were awarded to socially and economically disadvantaged or women awardees.
                This tool can be used for a variety of purposes, from conducting research on a specific topic to
                informing future grant applications.
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
            <a href="http://grantabstract-dev.us-east-1.elasticbeanstalk.com/" target="_blank" rel="noopener noreferrer">
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
                  <p className="subtitle">Grant Abstract Text Explorer</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default GrantExplorer;