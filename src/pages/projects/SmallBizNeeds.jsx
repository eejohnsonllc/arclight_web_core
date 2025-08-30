import { useEffect } from 'react';

const SmallBizNeeds = () => {
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
      <section id='hero' style={{ marginBottom: '2rem' }}>
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
                Small Business Innovation Applied to National Needs
              </h1>
            </div>
          </div>
        </section>
      </section>

      <a id='backbutton'></a>

      <section className='section'>
        <div className='has-text-centered is-centered'>
          <img
            src='/pictures/smallBizNeeds.png'
            alt='SBIR- vs. VC-backed: Features at the Time of Investment'
            width='800'
            height='1200'
            className='v-lazy-image v-lazy-image-loaded'
          />
        </div>
        <br />

        <div className='content custom container content main home-list is-centered has-text-centered'>
          <h2 id='sbir-research'>
            Small Business Innovation Applied to National Needs
          </h2>

          <div className='columns has-text-centered is-centered'>
            <div className='column is-two-thirds-desktop is-full-mobile'>
              <div style={{ textAlign: 'left' }}>
                <p>
                  Dr. Evan Johnson co-authored groundbreaking research on the{' '}
                  <em className='shadowh'>
                    Small Business Innovation Research (SBIR) program
                  </em>{' '}
                  and its critical role in advancing national technological
                  needs. This research, published as an NBER working paper,
                  reveals that SBIR-backed businesses produce three times more
                  patents per firm and nearly eight times the federal contract
                  engagement than their venture capital-backed counterparts.
                </p>
                <p>
                  The study demonstrates that despite often being compared to
                  venture-backed businesses, SBIR-backed businesses pursue
                  fundamentally different strategies focused on technologies
                  with high societal value and externalities. These small
                  businesses excel at developing innovations for small-scale,
                  uncertain, and well-defined problems that are critical to
                  national security, environmental sustainability, and social
                  progress.
                </p>
                <p>
                  The research highlights how the SBIR program serves as an
                  effective vehicle for government investment in risky
                  technologies that have large externalities, bridging the gap
                  between social and private returns on investment. This work
                  provides crucial insights for policymakers and stakeholders in
                  the innovation ecosystem.
                </p>
              </div>
            </div>
          </div>

          <p>
            Following are relevant materials for this research.
            <strong> Please click on the cards to open the materials. </strong>
          </p>
        </div>

        <div className='containerarr'>
          <div className='chevron'></div>
          <div className='chevron'></div>
          <div className='chevron'></div>
        </div>
      </section>

      <section id='pro'>
        <div className='container fade-out-siblings'>
          <div className='faqcard grow'>
            <a
              href='https://www.nber.org/papers/w33945'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='feature columns is-vcentered'>
                <div className='column has-text-centered'>
                  <img
                    className='hoverzoom'
                    src='/pictures/arclight_logo_horizontal.png'
                    alt='NBER Working Paper'
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <div className='column is-four-fifths has-text-centered has-vertically-aligned-content'>
                  <p className='subtitle'>
                    NBER Working Paper: Small Business Innovation Applied to
                    National Needs
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className='faqcard grow'>
            <a
              href='https://ssti.org/blog/recent-research-sbir-companies-support-critical-national-needs'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='feature columns is-vcentered'>
                <div className='column has-text-centered'>
                  <img
                    className='hoverzoom'
                    src='/pictures/arclight_logo_horizontal.png'
                    alt='SSTI Article'
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <div className='column is-four-fifths has-text-centered has-vertically-aligned-content'>
                  <p className='subtitle'>
                    SSTI Article: Recent Research - SBIR Companies Support
                    Critical National Needs
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className='faqcard grow'>
            <a
              href='/papers/SmallBizNeeds.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='feature columns is-vcentered'>
                <div className='column has-text-centered'>
                  <img
                    className='hoverzoom'
                    src='/pictures/arclight_logo_horizontal.png'
                    alt='PDF Download'
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <div className='column is-four-fifths has-text-centered has-vertically-aligned-content'>
                  <p className='subtitle'>
                    Download PDF: Small Business Innovation Applied to National
                    Needs
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

export default SmallBizNeeds;
