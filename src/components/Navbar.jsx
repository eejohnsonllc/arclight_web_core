import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    // Trigger logo animation on route change
    setIsLogoVisible(false);
    const timer = setTimeout(() => {
      setIsLogoVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <section id='navigation'>
      <style>
        {`
          .navbar, .navbar * {
            border: none !important;
            border-top: none !important;
            border-bottom: none !important;
            border-left: none !important;
            border-right: none !important;
            box-shadow: none !important;
          }
          .dropdown-menu {
            border: none !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
          }
          .dropdown-divider {
            display: none !important;
          }
          .nav-link, .dropdown-item {
            border: none !important;
            font-size: 1.3rem !important;
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
            font-weight: bold !important;
          }
          .navbar-nav .nav-link:focus, .navbar-nav .nav-link:hover {
            border: none !important;
          }
          
          /* Logo animation and text shadow for desktop */
          .navbar-brand {
            overflow: hidden;
          }
          
          .navbar-brand img {
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
          }
          
          .navbar-brand img.slide-in {
            transform: translateX(0);
            opacity: 1;
          }
          
          .navbar-brand img.slide-out {
            transform: translateX(-100%);
            opacity: 0;
          }
          
          /* Desktop-only text shadow effect */
          @media (min-width: 769px) {
            .navbar-brand img {
              filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.4)) 
                      drop-shadow(1px 1px 2px rgba(44, 127, 127, 0.3));
            }
            
            .navbar-brand img:hover {
              filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.5)) 
                      drop-shadow(2px 2px 4px rgba(44, 127, 127, 0.4));
              transform: scale(1.02);
            }
          }
          
          /* Mobile responsive styles - Balanced approach */
          @media (max-width: 768px) {
            .navbar-brand img {
              width: 120px !important;
              height: auto !important;
            }
            .navbar-nav .nav-item {
              margin: 0 !important;
              padding: 0 !important;
            }
            .navbar-nav .nav-link {
              font-size: 0.8rem !important;
              padding: 0.25rem 0.4rem !important;
              margin: 0 !important;
              white-space: nowrap !important;
              line-height: 1.2 !important;
              min-height: auto !important;
            }
            .dropdown-item {
              font-size: 0.7rem !important;
              padding: 0.2rem 0.4rem !important;
            }
            .dropdown-menu {
              margin-top: 0.1rem !important;
              border-radius: 4px !important;
              position: static !important;
              float: none !important;
              width: 100% !important;
              background-color: #f8f9fa !important;
              border: 1px solid #dee2e6 !important;
            }
            .navbar-nav {
              padding: 0.2rem 0 !important;
              margin: 0 !important;
              display: flex !important;
              flex-direction: column !important;
              width: 100% !important;
            }
            .navbar-collapse {
              background-color: rgba(248, 249, 250, 0.95) !important;
              border-radius: 4px !important;
              margin-top: 0.2rem !important;
              padding: 0.3rem !important;
              max-height: 75vh !important;
              overflow-y: auto !important;
            }
            .dropdown-toggle::after {
              display: inline-block !important;
            }
            .navbar {
              padding: 0.3rem 0.5rem !important;
              min-height: auto !important;
            }
            .navbar-toggler {
              padding: 0.2rem 0.4rem !important;
              font-size: 0.8rem !important;
            }
            .container-fluid {
              padding: 0.2rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .navbar-brand img {
              width: 100px !important;
              height: auto !important;
            }
            .navbar-nav .nav-link {
              font-size: 0.75rem !important;
              padding: 0.2rem 0.35rem !important;
              margin: 0 !important;
              white-space: nowrap !important;
              line-height: 1.1 !important;
              min-height: auto !important;
            }
            .dropdown-item {
              font-size: 0.65rem !important;
              padding: 0.15rem 0.3rem !important;
            }
            .container-fluid {
              padding-left: 0.3rem !important;
              padding-right: 0.3rem !important;
            }
            .dropdown-menu {
              font-size: 0.75rem !important;
              margin-top: 0.1rem !important;
            }
            .navbar-collapse {
              margin-top: 0.15rem !important;
              padding: 0.2rem !important;
              max-height: 65vh !important;
            }
            .navbar {
              padding: 0.25rem 0.4rem !important;
            }
            .navbar-toggler {
              padding: 0.15rem 0.3rem !important;
              font-size: 0.75rem !important;
            }
          }
          
          /* Ensure dropdown works on mobile */
          @media (max-width: 991px) {
            .navbar-nav .dropdown-menu {
              position: static !important;
              float: none !important;
              width: 100% !important;
              margin-top: 0.1rem !important;
              background-color: #f8f9fa !important;
              border: 1px solid #dee2e6 !important;
              border-radius: 4px !important;
            }
            .dropdown-item {
              padding: 0.2rem 0.4rem !important;
              border-bottom: 1px solid #e9ecef !important;
              font-size: 0.7rem !important;
            }
            .dropdown-item:last-child {
              border-bottom: none !important;
            }
            .dropdown-item:hover {
              background-color: #e9ecef !important;
            }
          }
        `}
      </style>
      <nav
        className='navbar sticky-top navbar-expand-lg navbar-light bg-light'
        style={{
          border: 'none !important',
          borderTop: 'none !important',
          borderBottom: 'none !important',
          borderLeft: 'none !important',
          borderRight: 'none !important',
          boxShadow: 'none !important',
          fontFamily: "'Lato', sans-serif",
        }}
      >
        <div className='container-fluid'>
          <Link
            className='navbar-brand'
            to='/'
            style={{ marginLeft: '1.5rem' }}
          >
            <img
              src='/pictures/arclight_logo_horizontal.png'
              alt='ArcLight Analytics'
              width='280'
              height='280'
              className={isLogoVisible ? 'slide-in' : 'slide-out'}
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarScroll'
            aria-controls='navbarScroll'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarScroll'>
            <ul
              className='navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll'
              style={{ '--bs-scroll-height': '100px' }}
            >
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  to='/'
                  style={{
                    fontWeight: 'bold',
                    border: 'none !important',
                    borderTop: 'none !important',
                    borderBottom: 'none !important',
                    borderLeft: 'none !important',
                    borderRight: 'none !important',
                  }}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='projectsDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{
                    fontWeight: 'bold',
                    border: 'none !important',
                    borderTop: 'none !important',
                    borderBottom: 'none !important',
                    borderLeft: 'none !important',
                    borderRight: 'none !important',
                  }}
                >
                  Projects
                </a>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='projectsDropdown'
                  style={{
                    border: 'none !important',
                    borderTop: 'none !important',
                    borderBottom: 'none !important',
                    borderLeft: 'none !important',
                    borderRight: 'none !important',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/projects'
                      style={{ fontWeight: 'bold' }}
                    >
                      All Projects
                    </Link>
                  </li>
                  <li>
                    <hr
                      className='dropdown-divider'
                      style={{ display: 'none !important' }}
                    />
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/projects/carolina-across-100'
                      style={{
                        fontWeight: 'bold',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        maxWidth: '300px',
                      }}
                    >
                      Carolina Across 100 Initiative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/projects/rapid-covid'
                      style={{
                        fontWeight: 'bold',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        maxWidth: '300px',
                      }}
                    >
                      RAPID: COVID-19 Ecosystem Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/projects/sbir-sttr'
                      style={{
                        fontWeight: 'bold',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        maxWidth: '300px',
                      }}
                    >
                      SBIR/STTR Programs Review
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/projects/small-biz-needs'
                      style={{
                        fontWeight: 'bold',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        maxWidth: '300px',
                      }}
                    >
                      SBIR: Small Business Innovation & National Needs
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  to='/about'
                  style={{
                    fontWeight: 'bold',
                    border: 'none !important',
                    borderTop: 'none !important',
                    borderBottom: 'none !important',
                    borderLeft: 'none !important',
                    borderRight: 'none !important',
                  }}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  to='/contact'
                  style={{
                    fontWeight: 'bold',
                    border: 'none !important',
                    borderTop: 'none !important',
                    borderBottom: 'none !important',
                    borderLeft: 'none !important',
                    borderRight: 'none !important',
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
