import StatementStyles from '../components/StatementStyles';

const services = [
  {
    number: '01',
    title: 'Innovation & IP Valuation',
    text: 'Ex-ante valuation of patents, portfolios, and intangible assets — calibrated to observed market reactions, citation networks, and commercialization outcomes, not narrative comparables.',
  },
  {
    number: '02',
    title: 'Predictive Outcome Modeling',
    text: 'Probabilistic forecasting of clinical, regulatory, financing, and adoption outcomes — modeling the skew and right-tail dynamics that black-box scores miss.',
  },
  {
    number: '03',
    title: 'Program & Policy Evaluation',
    text: 'Causal evaluation of R&D and innovation programs — DiD, event studies, synthetic control, and production-function methods, the same rigor we bring to National Academies studies.',
  },
  {
    number: '04',
    title: 'Data Architecture & Linkage',
    text: 'Relational pipelines linking grants, patents, publications, procurement, financing, and people — entity resolution that makes innovation systems measurable end to end.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Link the Evidence',
    text: 'Connect administrative, patent, financing, and clinical datasets into one governed relational layer.',
  },
  {
    number: '02',
    title: 'Calibrate the Models',
    text: 'Ground AI/ML features in peer-reviewed econometric estimates and causal benchmarks.',
  },
  {
    number: '03',
    title: 'Quantify Uncertainty',
    text: 'Express results as scenarios and probability distributions — not false precision.',
  },
  {
    number: '04',
    title: 'Deliver Decisions',
    text: 'Reproducible, audit-ready valuation and forecasting outputs for diligence and oversight.',
  },
];

const audiences = [
  {
    name: 'Investors',
    text: 'Diligence, IP valuation, and portfolio targeting.',
  },
  {
    name: 'Regulators',
    text: 'Independent evidence for innovation and technology policy.',
  },
  {
    name: 'Evaluators',
    text: 'Federal-grade program evaluation and impact measurement.',
  },
  {
    name: 'Healthcare Leaders',
    text: 'Forecasting commercialization and adoption pathways.',
  },
  {
    name: 'Labs & Institutions',
    text: 'Translating research portfolios into measurable economic value.',
  },
];

const methods = [
  { label: 'Causal Inference', featured: true },
  { label: 'Econometric Modeling', featured: true },
  { label: 'Difference-in-Differences' },
  { label: 'Event Studies' },
  { label: 'Synthetic Control' },
  { label: 'Production Functions' },
  { label: 'Machine Learning' },
  { label: 'Entity Resolution' },
  { label: 'Network Analysis' },
  { label: 'Patent Analytics' },
  { label: 'R · Stata · SQL' },
  { label: 'Reproducible Pipelines' },
];

const partners = ['DOD', 'NASA', 'DOE', 'NSF', 'NIH', 'SRI', 'NASEM'];

const Capabilities = () => {
  return (
    <div className='cap-page'>
      <StatementStyles />

      <header className='cap-mast'>
        <div className='cap-wrap cap-mast-inner'>
          <img
            className='cap-logo'
            src='/pictures/arclight_logo_horizontal.png'
            alt='ArcLight Analytics'
          />
          <div className='cap-mast-meta'>
            <p className='cap-kicker'>Capabilities statement</p>
            <p className='cap-site'>arclightanalytics.com</p>
            <p className='cap-place'>Chapel Hill · Research Triangle, NC</p>
          </div>
        </div>
      </header>

      <div className='cap-wrap'>
        <h1 className='cap-headline'>
          Scientifically rigorous economic analysis,{' '}
          <span className='cap-break' />
          built <em>into</em> your AI and analytics platforms.
        </h1>
      </div>
      <div className='cap-rule' />

      <div className='cap-wrap cap-body'>
        <p className='cap-lead'>
          Modern analytics platforms are fluent at <strong>prediction</strong>{' '}
          — but prediction is not <strong>evidence</strong>. ArcLight closes
          that gap. We pair causal inference, administrative data engineering,
          and innovation-systems economics with machine learning so that
          valuation and forecasting outputs are{' '}
          <strong>
            reproducible, peer-review defensible, and decision-ready
          </strong>{' '}
          for high-stakes capital, regulatory, and program decisions.
        </p>

        <p className='cap-kicker cap-label'>What we do</p>
        <div className='cap-services'>
          {services.map((service) => (
            <article key={service.number} className='cap-card'>
              <p className='cap-num'>{service.number}</p>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <p className='cap-kicker cap-label'>How we integrate with your stack</p>
        <div className='cap-steps'>
          {steps.map((step) => (
            <article key={step.number} className='cap-step'>
              <p className='cap-num'>Step {step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className='cap-split'>
          <section>
            <p className='cap-kicker cap-label'>Who we serve</p>
            {audiences.map((audience) => (
              <dl key={audience.name} className='cap-audience'>
                <dt>{audience.name}</dt>
                <dd>{audience.text}</dd>
              </dl>
            ))}
          </section>
          <section>
            <p className='cap-kicker cap-label'>Methods & toolkit</p>
            <div className='cap-methods'>
              {methods.map((method) => (
                <span
                  key={method.label}
                  className={`cap-pill${method.featured ? ' is-featured' : ''}`}
                >
                  {method.label}
                </span>
              ))}
            </div>
            <div className='cap-evidence'>
              <p className='cap-kicker cap-label'>Evidence base</p>
              <p>
                Grounded in peer-reviewed research and National Academies
                evaluations — linking NIH RePORTER, USPTO, USAspending, FDA,
                PitchBook, and a proprietary policy-document database.
              </p>
            </div>
          </section>
        </div>
      </div>

      <footer>
        <div className='cap-trust'>
          <div className='cap-wrap'>
            <p className='cap-kicker'>
              Trusted by federal agencies & research institutions
            </p>
            <ul className='cap-partners'>
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='cap-signoff'>
          <div className='cap-wrap cap-signoff-row'>
            <span>Evan Johnson, PhD · Founder & Director</span>
            <span>Evidence first, always</span>
            <span>arclightanalytics.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Capabilities;
