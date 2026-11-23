import { useState } from 'react';

const cards = [
  {
    id: 'program',
    title: 'Evaluating a program you fund',
    points: [
      'Every award it made, and who won them',
      'Every research partner those companies brought in',
      'Everything they invented afterward',
    ],
    stat: 'Built on 99,319 awards to 19,607 companies, FY 2009 to FY 2025.',
    diagram: <ProgramDiagram />,
  },
  {
    id: 'priorities',
    title: 'Checking if funding matches your priorities',
    points: [
      'What each agency said it wanted, year by year',
      'What it actually paid for, and how much',
      'Where the two do not line up',
    ],
    stat: '23,750 funding announcements matched to the awards that followed, FY 2009 to FY 2025.',
    diagram: <PrioritiesDiagram />,
  },
  {
    id: 'field',
    title: 'Finding the companies working in your field',
    points: [
      'Who has won federal funding for this kind of work',
      'Who they worked with to do it',
      'What came out of it',
    ],
    stat: '19,607 companies and 10,885 research partnerships, FY 2009 to FY 2025.',
    diagram: <FieldDiagram />,
  },
  {
    id: 'company',
    title: 'Looking into a company before you back it',
    points: [
      'Its full federal funding history, year by year',
      'The labs and universities it has worked with',
      'The inventions that followed',
    ],
    stat: 'Every company followed through name changes and new identifiers, FY 2009 to FY 2025.',
    diagram: <CompanyDiagram />,
  },
  {
    id: 'lab',
    title: 'Finding a partner at a national lab',
    points: [
      'Which labs already work with small companies',
      'Which companies they have worked with',
      'What that work produced',
    ],
    stat: '676 partnerships across 22 national labs and research centers, FY 2009 to FY 2025.',
    diagram: <LabDiagram />,
  },
];

function ProgramDiagram() {
  const circles = [22, 48, 74, 100, 126, 152];
  const diamonds = [34, 64, 94, 124, 154];
  return (
    <svg className='story-svg' viewBox='0 0 340 176' aria-hidden='true'>
      <rect
        x='16'
        y='66'
        width='46'
        height='44'
        rx='7'
        fill='#E4EEF1'
        stroke='#2C7F7F'
        strokeWidth='1.75'
      />
      {circles.map((y) => (
        <line
          key={`in-${y}`}
          x1='62'
          y1='88'
          x2='132'
          y2={y}
          stroke='#C5CED6'
          strokeWidth='1.25'
        />
      ))}
      {diamonds.map((y, i) => (
        <line
          key={`out-${y}`}
          x1='150'
          y1={circles[i]}
          x2='286'
          y2={y}
          stroke='#C5CED6'
          strokeWidth='1.25'
        />
      ))}
      {circles.map((y) => (
        <circle key={y} cx='141' cy={y} r='8' fill='#2C7F7F' />
      ))}
      {diamonds.map((y) => (
        <polygon
          key={y}
          points={`300,${y} 313,${y - 9} 326,${y} 313,${y + 9}`}
          fill='#212529'
        />
      ))}
    </svg>
  );
}

function PrioritiesDiagram() {
  return (
    <svg className='story-svg' viewBox='0 0 340 170' aria-hidden='true'>
      <defs>
        <clipPath id='story-venn-left'>
          <ellipse cx='128' cy='85' rx='108' ry='68' />
        </clipPath>
      </defs>
      <ellipse cx='128' cy='85' rx='108' ry='68' fill='#E6EAEF' stroke='#C9D0D8' />
      <ellipse cx='212' cy='85' rx='108' ry='68' fill='#E6EAEF' stroke='#C9D0D8' />
      <ellipse
        cx='212'
        cy='85'
        rx='108'
        ry='68'
        fill='#2C7F7F'
        clipPath='url(#story-venn-left)'
      />
    </svg>
  );
}

function FieldDiagram() {
  const pale = [];
  for (let row = 0; row < 6; row += 1) {
    for (let col = 0; col < 16; col += 1) {
      const x = 14 + col * 21;
      const y = 16 + row * 26;
      const dx = x - 268;
      const dy = y - 86;
      if (dx * dx + dy * dy > 62 * 62) pale.push([x, y]);
    }
  }
  const cluster = [
    [236, 48],
    [258, 38],
    [282, 50],
    [304, 36],
    [226, 70],
    [250, 64],
    [274, 76],
    [298, 62],
    [232, 96],
    [256, 90],
    [280, 104],
    [304, 88],
    [246, 118],
    [270, 114],
    [294, 126],
  ];
  return (
    <svg className='story-svg' viewBox='0 0 340 160' aria-hidden='true'>
      {pale.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r='5' fill='#E3E7EC' />
      ))}
      <circle cx='268' cy='86' r='62' fill='#D5E3E6' />
      {cluster.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r='6.5' fill='#2C7F7F' />
      ))}
    </svg>
  );
}

function CompanyDiagram() {
  const nodes = [
    { x: 36, y: 58, kind: 'diamond' },
    { x: 108, y: 22, kind: 'diamond' },
    { x: 214, y: 18, kind: 'diamond' },
    { x: 300, y: 56, kind: 'diamond' },
    { x: 48, y: 128, kind: 'box' },
    { x: 170, y: 148, kind: 'box' },
    { x: 286, y: 124, kind: 'box' },
  ];
  return (
    <svg className='story-svg' viewBox='0 0 340 176' aria-hidden='true'>
      {nodes.map((node) => (
        <line
          key={`${node.x}-${node.y}`}
          x1='170'
          y1='86'
          x2={node.x}
          y2={node.y}
          stroke='#C5CED6'
          strokeWidth='1.25'
        />
      ))}
      <circle cx='170' cy='86' r='18' fill='#2C7F7F' />
      {nodes.map((node) =>
        node.kind === 'diamond' ? (
          <polygon
            key={`d-${node.x}`}
            points={`${node.x},${node.y - 9} ${node.x + 9},${node.y} ${node.x},${node.y + 9} ${node.x - 9},${node.y}`}
            fill='#212529'
          />
        ) : (
          <rect
            key={`b-${node.x}`}
            x={node.x - 26}
            y={node.y - 13}
            width='52'
            height='26'
            rx='5'
            fill='#E4EEF1'
            stroke='#2C7F7F'
            strokeWidth='1.5'
          />
        )
      )}
    </svg>
  );
}

function LabDiagram() {
  const labs = [22, 60, 98, 136];
  const firms = [16, 42, 68, 94, 120, 146];
  const links = [
    [0, 1],
    [0, 4],
    [1, 0],
    [1, 2],
    [1, 5],
    [2, 1],
    [2, 3],
    [3, 0],
    [3, 2],
    [3, 5],
  ];
  return (
    <svg className='story-svg' viewBox='0 0 340 170' aria-hidden='true'>
      {links.map(([lab, firm]) => (
        <line
          key={`${lab}-${firm}`}
          x1='78'
          y1={labs[lab] + 12}
          x2='286'
          y2={firms[firm]}
          stroke='#C5CED6'
          strokeWidth='1.15'
        />
      ))}
      {labs.map((y) => (
        <rect
          key={y}
          x='16'
          y={y}
          width='62'
          height='26'
          rx='5'
          fill='#E4EEF1'
          stroke='#2C7F7F'
          strokeWidth='1.5'
        />
      ))}
      {firms.map((y) => (
        <circle key={y} cx='292' cy={y} r='7' fill='#2C7F7F' />
      ))}
    </svg>
  );
}

const StoryCards = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className='story-cards' aria-label='What the record can answer'>
      <div className='story-grid'>
        {cards.map((card) => {
          const open = openId === card.id;
          return (
            <article
              key={card.id}
              className={`story-card${open ? ' is-open' : ''}`}
              tabIndex={0}
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : card.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setOpenId(open ? null : card.id);
                }
              }}
            >
              <span className='story-rule' />
              <h2 className='story-title'>{card.title}</h2>
              <div className='story-stage'>
                <div className='story-diagram'>{card.diagram}</div>
                <div className='story-detail'>
                  <ul className='story-points'>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className='story-stat'>{card.stat}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className='story-coverage'>
        All figures cover FY 2009 to FY 2025: awards by award year, announcements
        by fiscal year, patents by grant date. Award records for DOD and NASA
        start in FY 2019 and NSF&apos;s announcement links in FY 2023, so their
        figures reflect recent awards; NIH dollars span the full window. Patent
        disclosures are from the April 2025 PatentsView release. Research
        partners are named on SBIR awards from FY 2015 and on STTR awards
        throughout. US data.
      </p>
      <style>
        {`
          .story-cards {
            padding: 2.5rem 1.5rem 1rem;
            background: #fff;
          }
          .story-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.25rem;
            max-width: 1320px;
            margin: 0 auto;
          }
          .story-card {
            flex: 0 1 420px;
            width: min(100%, 420px);
            min-height: 390px;
            display: flex;
            flex-direction: column;
            background: #f4f6f8;
            border: 1px solid #e6eaee;
            border-radius: 16px;
            padding: 1.6rem 1.45rem 1.15rem;
            cursor: pointer;
            text-align: left;
            outline: none;
          }
          .story-card:focus-visible {
            box-shadow: 0 0 0 3px rgba(44, 127, 127, 0.35);
          }
          .story-rule {
            display: block;
            width: 42px;
            height: 5px;
            border-radius: 3px;
            background: #2c7f7f;
            margin-bottom: 0.9rem;
          }
          .story-title {
            margin: 0;
            min-height: 4.7rem;
            color: #212529;
            font-size: 1.65rem;
            line-height: 1.15;
            letter-spacing: -0.01em;
          }
          .story-stage {
            position: relative;
            flex: 1;
            min-height: 220px;
          }
          .story-diagram,
          .story-detail {
            position: absolute;
            inset: 0;
            transition: opacity 0.35s ease;
          }
          .story-diagram {
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            bottom: 3.6rem;
            opacity: 1;
          }
          .story-svg {
            width: 100%;
            height: 100%;
            max-height: 168px;
          }
          .story-detail {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 0.15rem;
            opacity: 0;
          }
          .story-cards .story-points {
            list-style: none;
            margin: 0 0 0.9rem !important;
            padding: 0 !important;
            border: none !important;
          }
          .story-points li {
            position: relative;
            margin: 0 0 0.75rem;
            padding-left: 1.15rem;
            color: #212529;
            font-size: 1.02rem;
            line-height: 1.35;
            font-weight: 500;
          }
          .story-points li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.42rem;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #2c7f7f;
          }
          .story-cards p {
            display: block !important;
            background: none !important;
            background-image: none !important;
          }
          .story-cards p::first-letter {
            font-size: inherit !important;
            font-weight: inherit !important;
          }
          .story-stat {
            margin: auto 0 0;
            padding-top: 0.75rem;
            border-top: 1px solid #d5dbe2;
            color: #5b6b82;
            font-size: 0.95rem;
            line-height: 1.4;
          }
          .story-card:hover .story-diagram,
          .story-card:focus-within .story-diagram,
          .story-card.is-open .story-diagram {
            opacity: 0.16;
          }
          .story-card:hover .story-detail,
          .story-card:focus-within .story-detail,
          .story-card.is-open .story-detail {
            opacity: 1;
          }
          .story-coverage {
            max-width: 920px;
            margin: 1.5rem auto 0;
            color: #5b6b82;
            font-size: 0.82rem;
            line-height: 1.45;
          }
          @media (max-width: 768px) {
            .story-cards {
              padding: 1.5rem 1rem 0.5rem;
            }
            .story-card {
              min-height: 370px;
            }
            .story-title {
              font-size: 1.35rem !important;
              min-height: 4.2rem;
            }
            .story-points li {
              font-size: 0.98rem;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .story-diagram,
            .story-detail {
              transition: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default StoryCards;
