const measures = [
  {
    kind: 'Position',
    title: 'Degree centrality',
    text: 'Counts distinct collaborators, separating hubs from one-off, peripheral participants.',
  },
  {
    kind: 'Position',
    title: 'Betweenness centrality',
    text: 'How often an organization sits on the shortest path between two others: the bridges that join otherwise separate parts of the program.',
  },
  {
    kind: 'Position',
    title: 'Influence score',
    text: 'Weights each tie by how well connected the partner is, so links to major players count for more.',
  },
  {
    kind: 'Structure',
    title: 'Clustering coefficient',
    text: 'Whether an organization’s partners also work with each other, revealing tight-knit research groups.',
  },
  {
    kind: 'Structure',
    title: 'Community detection',
    text: 'Algorithmically groups densely linked actors, showing which centers and universities anchor each cluster.',
  },
  {
    kind: 'Structure',
    title: 'Bipartite projection',
    text: 'Redraws the map as firm-to-firm ties through shared partners: which firms travel in the same research circles.',
  },
];

const stats = [
  { value: '264', label: 'STTR-awardee firms' },
  { value: '214', label: 'Research and NASA partners' },
  { value: '765', label: 'Documented collaborations' },
  { value: '10', label: 'Fiscal years, FY15–FY24' },
];

const NasaSbirNetwork = () => {
  return (
    <>
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
                NASA SBIR/STTR Collaboration Network
              </h1>
            </div>
          </div>
        </section>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-7'>
              <a
                href='/pictures/nasa-sbir-network.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/pictures/nasa-sbir-network.jpg'
                  alt='NASA SBIR/STTR Collaboration Network one-pager'
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    background: 'white',
                  }}
                />
              </a>
            </div>
            <div className='column is-5'>
              <h2 className='title is-3'>
                Who collaborates on NASA STTR awards
              </h2>
              <p>
                Drawn from NASA TechPort, this map links 264 STTR-awardee small
                businesses to 214 research and NASA partner organizations
                through 765 documented project collaborations, covering fiscal
                years 2015 through 2024.
              </p>
              <p>
                Collaboration concentrates around a few hubs. NASA field
                centers — Glenn, Langley, Goddard, Johnson, Ames, Marshall, and
                Kennedy — anchor the network. MIT, Stanford, Central Florida,
                Carnegie Mellon, and Arizona State form a second tier of
                frequent partners, reflecting STTR’s required
                research-institution partner.
              </p>
              <p>
                Node size reflects degree centrality, and edge width reflects
                the number of shared awards. Arclight produces these measures
                for clients and can extend them across the full multi-agency
                SBIR/STTR record.
              </p>
              <a
                href='/pictures/nasa-sbir-network.pdf'
                className='button is-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                View the one-pager
              </a>
            </div>
          </div>

          <div
            className='columns is-multiline'
            style={{ marginTop: '2.5rem' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className='column is-3-desktop is-6'>
                <div className='box has-text-centered' style={{ height: '100%' }}>
                  <p
                    className='title is-2'
                    style={{ color: '#2C7F7F', marginBottom: '0.25rem' }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ marginBottom: 0 }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className='title is-3' style={{ marginTop: '2.5rem' }}>
            What the network analysis can measure
          </h2>
          <div className='columns is-multiline'>
            {measures.map((measure) => (
              <div
                key={measure.title}
                className='column is-4-desktop is-6-tablet'
              >
                <div className='box' style={{ height: '100%' }}>
                  <p
                    className='is-size-7 has-text-weight-bold'
                    style={{
                      color: '#2C7F7F',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {measure.kind}
                  </p>
                  <h3 className='title is-5'>{measure.title}</h3>
                  <p style={{ marginBottom: 0 }}>{measure.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NasaSbirNetwork;
