import StatementStyles from '../components/StatementStyles';

const stats = [
  {
    figure: '64',
    label: 'processor cores',
    detail: '2× Intel Xeon Gold · 128 parallel threads',
    lead: true,
  },
  {
    figure: '256 GB',
    label: 'DDR5 memory',
  },
  {
    figure: '25 GbE',
    label: 'networking',
  },
  {
    figure: 'RAID 10',
    label: 'fault-tolerant storage',
  },
];

const sources = [
  'Federal awards',
  'Solicitations',
  'Firm & investment',
  'Patents',
  'Organizations',
  'SBIR/STTR',
  'Location & geo',
  'Budgets & laws',
  'State policy',
];

const answers = [
  'Impact evaluations',
  'Maps & dashboards',
  'Ranked target lists',
  'Analysis-ready data',
];

const uses = [
  {
    title: 'Evaluate',
    text: 'Measure program impact with linked panel data.',
    example: 'e.g., SBIR/STTR for NASEM, DOE, NASA',
  },
  {
    title: 'Map',
    text: 'Map spending, firms and incentives by place.',
    example: 'e.g., 20 yrs of federal spending by county',
  },
  {
    title: 'Plan',
    text: 'Size markets, gaps and capital needs.',
    example: 'e.g., state incentive comparisons',
  },
  {
    title: 'Target',
    text: 'Find the right firms, labs and university partners.',
    example: 'e.g., partners matched to solicitations',
  },
];

const specs = [
  ['Processors', '2× Intel Xeon Gold 6548Y+ (64C/128T)'],
  ['Memory', '256 GB DDR5 RDIMM'],
  ['Fast tier', '4× 3.84 TB SSD'],
  ['Capacity tier', '4× 8 TB 12 Gbps SAS'],
  ['Protection', 'Hardware RAID 10 + mirrored M.2 boot'],
  ['Network', 'Dual 10/25 GbE + dual 1 GbE'],
  ['Power', 'Dual redundant 1100 W PSUs + UPS'],
  ['OS & access', 'Windows Server 2025, Remote Desktop'],
  ['Support', 'Dell ProSupport NBD onsite, 3 yr'],
];

const trust = [
  'Owned, single-tenant hardware; no public cloud',
  'Encrypted VPN access, individual credentials',
  'Redundant: RAID 10, mirrored boot, dual power, UPS',
  'Hardened: TPM 2.0, verified parts, remote monitoring',
];

const growth = [
  'GPU for text analysis and private, on-premise AI',
  'PostGIS spatial database; browser RStudio & Jupyter',
  'More storage, encrypted backups, open bays to expand',
];

const ArcServer = () => {
  return (
    <div className='cap-page'>
      <StatementStyles />
      <style>
        {`
          .arc-stats,
          .arc-flow,
          .arc-uses {
            display: grid;
            gap: 0.7rem;
            margin-bottom: 1.7rem;
          }

          .arc-stats {
            grid-template-columns: 1.35fr 1fr 1fr 1fr;
          }

          .arc-flow {
            grid-template-columns: 1.15fr 1fr 0.9fr;
          }

          .arc-uses {
            grid-template-columns: repeat(4, 1fr);
          }

          .arc-stat {
            background: #fff;
            border: 1px solid #2C7F7F;
            border-radius: 8px;
            padding: 0.95rem 1rem;
          }

          .arc-stat.is-lead {
            background: #363636;
            border-color: #363636;
            color: #fff;
          }

          .arc-figure {
            margin: 0;
            font-size: 1.7rem !important;
            font-weight: 700 !important;
            line-height: 1;
            color: #2C7F7F;
          }

          .arc-stat.is-lead .arc-figure {
            color: #fff;
            font-size: 2.4rem !important;
          }

          .arc-stat-label,
          .arc-stat-detail {
            margin: 0.3rem 0 0;
            line-height: 1.35;
          }

          .arc-stat-label {
            font-weight: 700 !important;
          }

          .arc-stat.is-lead .arc-stat-label,
          .arc-stat.is-lead .arc-stat-detail {
            color: #E8F4F4;
          }

          .arc-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-top: 0.7rem;
          }

          .arc-tags .cap-pill {
            display: inline-block;
            width: auto;
          }

          .cap-step.is-dark {
            background: #363636;
            border-color: #363636;
            color: #fff;
          }

          .cap-step.is-dark h3,
          .cap-step.is-dark p,
          .cap-step.is-dark .cap-num {
            color: #fff;
          }

          .arc-answers {
            margin: 0.55rem 0 0 !important;
            padding: 0 0 0 1.1rem !important;
            border: none !important;
            list-style: disc;
            text-align: left;
          }

          .arc-answers li {
            margin: 0.15rem 0;
          }

          .arc-example {
            margin: 0.55rem 0 0;
            color: #2C7F7F;
            font-size: 0.88rem !important;
          }

          .arc-spec {
            display: grid;
            grid-template-columns: 8.2rem 1fr;
            gap: 0.35rem 1rem;
            align-items: baseline;
            margin: 0;
            padding: 0.55rem 0;
            border-bottom: 1px solid #E8F4F4;
          }

          .arc-spec dt {
            font-weight: 700 !important;
          }

          .arc-spec dd {
            margin: 0;
          }

          .arc-points {
            margin: 0 !important;
            padding: 0 !important;
            list-style: none;
            border: none !important;
            text-align: left;
          }

          .arc-points li {
            position: relative;
            padding: 0.35rem 0 0.35rem 1rem;
          }

          .arc-points li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.75rem;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 2px;
            background: #2C7F7F;
          }

          .arc-aside {
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
          }

          .cap-signoff a {
            color: #fff;
            font-weight: 700 !important;
          }

          @media (max-width: 900px) {
            .arc-stats,
            .arc-flow,
            .arc-uses {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .arc-spec {
              grid-template-columns: 1fr;
              gap: 0.1rem;
            }
          }
        `}
      </style>

      <header className='cap-mast'>
        <div className='cap-wrap cap-mast-inner'>
          <img
            className='cap-logo'
            src='/pictures/arclight_logo_horizontal.png'
            alt='ArcLight Analytics'
          />
          <div className='cap-mast-meta'>
            <p className='cap-kicker'>Research computing</p>
            <p className='cap-site'>Dell PowerEdge R760</p>
            <p className='cap-place'>Chapel Hill · Research Triangle, NC</p>
          </div>
        </div>
      </header>

      <div className='cap-wrap'>
        <h1 className='cap-headline'>
          What is the <em>ARC</em> Server?
        </h1>
      </div>
      <div className='cap-rule' />

      <div className='cap-wrap cap-body'>
        <p className='cap-lead'>
          Arclight&apos;s own secure data platform. We bring your scattered
          federal, state, commercial and in-house data into one place, link
          it, and turn it into{' '}
          <strong>evaluations, maps, plans and partner targets</strong> for
          government and economic development work.
        </p>

        <div className='arc-stats'>
          {stats.map((stat) => (
            <article
              key={stat.figure}
              className={`arc-stat${stat.lead ? ' is-lead' : ''}`}
            >
              <p className='arc-figure'>{stat.figure}</p>
              <p className='arc-stat-label'>{stat.label}</p>
              {stat.detail ? (
                <p className='arc-stat-detail'>{stat.detail}</p>
              ) : null}
            </article>
          ))}
        </div>

        <p className='cap-kicker cap-label'>How it works</p>
        <div className='arc-flow'>
          <article className='cap-step'>
            <p className='cap-num'>1 · Bring it all in</p>
            <div className='arc-tags'>
              {sources.map((source) => (
                <span key={source} className='cap-pill'>
                  {source}
                </span>
              ))}
              <span className='cap-pill is-featured'>Your files</span>
            </div>
          </article>
          <article className='cap-step is-dark'>
            <p className='cap-num'>2 · Link & analyze on ARC</p>
            <p>
              We clean and link records across sources by firm ID, place and
              time into one panel, then run econometrics, GIS and text
              analysis in place.
            </p>
          </article>
          <article className='cap-step'>
            <p className='cap-num'>3 · Deliver answers</p>
            <ul className='arc-answers'>
              {answers.map((answer) => (
                <li key={answer}>{answer}</li>
              ))}
            </ul>
          </article>
        </div>

        <p className='cap-kicker cap-label'>What clients use it for</p>
        <div className='arc-uses'>
          {uses.map((use) => (
            <article key={use.title} className='cap-card'>
              <h2>{use.title}</h2>
              <p>{use.text}</p>
              <p className='arc-example'>{use.example}</p>
            </article>
          ))}
        </div>

        <div className='cap-split'>
          <section>
            <p className='cap-kicker cap-label'>Under the hood</p>
            {specs.map(([label, value]) => (
              <dl key={label} className='arc-spec'>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </dl>
            ))}
          </section>
          <div className='arc-aside'>
            <section>
              <p className='cap-kicker cap-label'>Built for trust</p>
              <ul className='arc-points'>
                {trust.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <p className='cap-kicker cap-label'>Built to grow</p>
              <ul className='arc-points'>
                {growth.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <footer>
        <div className='cap-trust'>
          <div className='cap-wrap'>
            <p className='cap-kicker'>Arclight Analytics</p>
            <p className='cap-site'>
              Data science & policy consulting · Chapel Hill, NC
            </p>
          </div>
        </div>
        <div className='cap-signoff'>
          <div className='cap-wrap cap-signoff-row'>
            <span>Evan Johnson, Founder & Director</span>
            <a href='mailto:evanej@arclightanalytics.com'>
              evanej@arclightanalytics.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArcServer;
