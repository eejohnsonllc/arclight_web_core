const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer a {
            color: white !important;
            font-size: 1.3rem !important;
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
            font-weight: bold !important;
            text-decoration: none !important;
          }
          .footer a:hover {
            color: #f8f9fa !important;
            text-decoration: underline !important;
          }
          .footer .content {
            font-size: 1.3rem !important;
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
            font-weight: bold !important;
            color: white !important;
          }
        `}
      </style>
      <section className="pagefooter">
        <footer className="footer has-background-dark">
          <div className="content has-text-centered has-text-white">
            <div>
              <a href="/">ArcLight Analytics</a> |{' '}
              <a href="mailto:admin@arclightanalytics.com">admin@arclightanalytics.com</a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;