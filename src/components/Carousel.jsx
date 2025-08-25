import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel
    if (window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleCaptions'));
    }
  }, []);

  return (
    <>
      <style>
        {`
          .carousel-control-prev, .carousel-control-next {
            width: 3rem !important;
            height: 3rem !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            opacity: 0.7 !important;
          }
          
          .carousel-control-prev {
            left: 1rem !important;
          }
          
          .carousel-control-next {
            right: 1rem !important;
          }
          
          .carousel-control-prev-icon, .carousel-control-next-icon {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }
          
          .carousel-control-prev:hover, .carousel-control-next:hover {
            opacity: 1 !important;
          }
          
          /* Carousel Indicators (thin lines) */
          .carousel-indicators {
            bottom: 5px !important;
            margin-bottom: 0 !important;
          }
          
          .carousel-indicators button {
            width: 3px !important;
            height: 3px !important;
            border-radius: 50% !important;
            margin: 0 2px !important;
            opacity: 0.4 !important;
            background-color: #2C7F7F !important;
            border: none !important;
            text-indent: 0 !important;
            box-shadow: none !important;
          }
          
          .carousel-indicators button.active {
            opacity: 1 !important;
            background-color: #2C7F7F !important;
          }
          
          .carousel-indicators [data-bs-target] {
            width: 3px !important;
            height: 3px !important;
            border-radius: 50% !important;
            background-color: #2C7F7F !important;
            border: none !important;
            clip-path: none !important;
          }
          
          #carouselExampleCaptions .carousel-indicators button {
            width: 3px !important;
            height: 3px !important;
            border-radius: 50% !important;
            background-color: #2C7F7F !important;
            border: none !important;
            clip-path: none !important;
            text-indent: -999px !important;
            overflow: hidden !important;
          }
          
          /* Mobile responsive styles */
          @media (max-width: 768px) {
            #carouselExampleCaptions {
              height: 400px !important;
            }
            .carousel-item {
              height: 400px !important;
            }
            .carousel-control-prev, .carousel-control-next {
              width: 2.5rem !important;
              height: 2.5rem !important;
            }
            .carousel-control-prev-icon, .carousel-control-next-icon {
              width: 1.2rem !important;
              height: 1.2rem !important;
            }
            .transparent_card {
              margin: 1rem !important;
              padding: 1rem !important;
            }
            .transparent_card .title {
              font-size: 1.2rem !important;
              margin-bottom: 0.75rem !important;
            }
            .transparent_card .card-text {
              font-size: 0.9rem !important;
              line-height: 1.4 !important;
            }
            .transparent_card .button {
              font-size: 0.9rem !important;
              padding: 0.5rem 1rem !important;
            }
          }
          
          @media (max-width: 576px) {
            #carouselExampleCaptions {
              height: 350px !important;
            }
            .carousel-item {
              height: 350px !important;
            }
            .carousel-control-prev, .carousel-control-next {
              width: 2rem !important;
              height: 2rem !important;
            }
            .carousel-control-prev-icon, .carousel-control-next-icon {
              width: 1rem !important;
              height: 1rem !important;
            }
            .transparent_card {
              margin: 0.5rem !important;
              padding: 0.75rem !important;
            }
            .transparent_card .title {
              font-size: 1.1rem !important;
              margin-bottom: 0.5rem !important;
            }
            .transparent_card .card-text {
              font-size: 0.85rem !important;
              line-height: 1.3 !important;
            }
            .transparent_card .button {
              font-size: 0.85rem !important;
              padding: 0.4rem 0.8rem !important;
            }
            .carousel-control-prev {
              left: 0.5rem !important;
            }
            .carousel-control-next {
              right: 0.5rem !important;
            }
          }
        `}
      </style>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{height: '500px'}}>
        <div className="carousel-indicators">
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="0" 
          className="active"
          aria-current="true" 
          aria-label="Slide 1"
        ></button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      
      <div className="carousel-inner">
        {/* Slide 1 - Carolina Across 100 */}
        <div className="carousel-item active align-items-center justify-content-center"
          style={{backgroundImage: "url('https://images.pexels.com/photos/3970329/pexels-photo-3970329.jpeg?cs=srgb&dl=pexels-markus-spiske-3970329.jpg&fm=jpg')", height: '500px'}}>
          <div className="item" style={{height: '100%'}}>
            <div className="container" style={{height: '100%'}}>
              <div className="row align-items-center" style={{height: '100%'}}>
                <section className="col-md-6 animated fadeIn">
                  <figure className="image is-4by3">
                    <a href="https://carolinaacross100.unc.edu/data/" target="_blank" rel="noopener noreferrer">
                      <img className='opac' src="/pictures/CX100 gif for home page.gif" alt="" />
                    </a>
                  </figure>
                </section>
                <section className="col-md-4 animated fadeIn">
                  <div className="card transparent_card">
                    <div className="card-body">
                      <h5 className="title has-text-white">Carolina Across 100 Initiative Survey Data Analysis</h5>
                      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                        <p className="card-text" style={{marginTop: '1rem', flex: 1}}>
                          Using a suite of data analytics tools, we were able to identify common areas of concern and trends in expectations about
                          recovery from the pandemic. We then created visualizations to present these trends to the initiative's stakeholders, 
                          to inform their decisions about how the university can help communities across the state.
                        </p>
                        <Link to="/projects/carolina-across-100" className="button is-light is-primary"  style={{marginTop: '1rem', alignSelf: 'flex-start'}}>See More</Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 - SBIR DOE */}
        <div className="carousel-item align-items-center justify-content-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')", height: '500px'}}>
          <div className="item" style={{height: '100%'}}>
            <div className="container" style={{height: '100%'}}>
              <div className="row align-items-center" style={{height: '100%'}}>
                <section className="col-md-6 animated fadeIn align-items-center justify-content-center">
                  <figure className="image is-flex is-align-items-center is-justify-content-center">
                    <img className='opac' style={{width: 'auto', maxHeight: '50%'}} src="https://www.nap.edu/cover/25674/450" alt="" />
                  </figure>
                </section>
                <section className="col-md-5 animated fadeIn align-items-center justify-content-center">
                  <div className="card transparent_card">
                    <div className="card-body">
                      <h5 className="title has-text-white">Review of the SBIR and STTR programs at the Department of Energy</h5>
                      <div style={{display: 'flex', alignItems: 'flex-end', gap: '1rem'}}>
                        <p className="card-text" style={{flex: 1, margin: 0}}>
                          Dr. Johnson served as the Principal Consultant for the Review of the Small Business Innovation Research and Small
                          Business Technology Transfer Programs at the Department of Energy.
                        </p>
                        <Link to="/projects/sbir-sttr" className="button is-light is-primary" style={{flexShrink: 0}}>See More</Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 - SBIR NIH */}
        <div className="carousel-item align-items-center justify-content-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')", height: '500px'}}>
          <div className="item" style={{height: '100%'}}>
            <div className="container" style={{height: '100%'}}>
              <div className="row align-items-center" style={{height: '100%'}}>
                <section className="col-md-6 animated fadeIn align-items-center justify-content-center">
                  <figure className="image is-flex is-align-items-center is-justify-content-center">
                    <img className='opac' style={{width: 'auto', maxHeight: '50%'}} src="https://nap.nationalacademies.org/cover/26376/450" alt="" />
                  </figure>
                </section>
                <section className="col-md-5 animated fadeIn align-items-center justify-content-center">
                  <div className="card transparent_card">
                    <div className="card-body">
                      <h5 className="title has-text-white">Assessment of the SBIR and STTR Programs at the National Institutes of Health</h5>
                      <div style={{display: 'flex', alignItems: 'flex-end', gap: '1rem'}}>
                        <p className="card-text" style={{flex: 1, margin: 0}}>
                          Dr. Johnson served as the Principal Consultant for the Review of the Small Business Innovation Research and Small
                          Business Technology Transfer Programs at the Department of Energy.
                        </p>
                        <a href="https://nap.nationalacademies.org/read/26376/chapter/1" className="button is-light is-primary" style={{flexShrink: 0}}>See More</a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 - Framework */}
        <div className="carousel-item align-items-center justify-content-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", height: '500px'}}>
          <div className="item" style={{height: '100%'}}>
            <div className="container" style={{height: '100%'}}>
              <div className="row align-items-center" style={{height: '100%'}}>
                <section className="col-md-6 animated fadeIn align-items-center justify-content-center">
                  <figure className="image is-flex is-align-items-center is-justify-content-center">
                    <img className='opac' style={{width: 'auto', maxHeight: '50%'}}
                      src="https://ars.els-cdn.com/content/image/1-s2.0-S0048733321001943-gr2.jpg" alt="" />
                  </figure>
                </section>
                <section className="col-md-5 animated fadeIn align-items-center justify-content-center">
                  <div className="card transparent_card">
                    <div className="card-body">
                      <h5 className="title has-text-white">A Framework and Databases for Measuring Entrepreneurial Ecosystems</h5>
                      <div style={{display: 'flex', alignItems: 'flex-end', gap: '1rem'}}>
                        <p className="card-text" style={{flex: 1, margin: 0}}>
                          We offer a framework for measurement that places collaborative relationships among entrepreneurs, firms, government agencies, 
                          and research institutions at the center of the ecosystem concept. A major advantage of our approach is that all the underlying 
                          databases are drawn from non-confidential, publicly available sources that are transparently disclosed and regularly updated.
                        </p>
                        <a href="https://www.sciencedirect.com/science/article/pii/S0048733321001943" className="button is-light is-primary" style={{flexShrink: 0}}>See More</a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
};

export default Carousel;