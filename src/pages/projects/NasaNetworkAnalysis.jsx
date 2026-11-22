const positionMeasures = [
  {
    title: 'Degree centrality',
    text: 'The number of distinct collaborators an organization has. It identifies the most and least-connected actors, separating the hubs from one-off, peripheral participants.',
  },
  {
    title: 'Betweenness centrality',
    text: 'How often an organization sits on the shortest path between two others. It identifies organizations that connect parts of the program that would otherwise be separate.',
  },
  {
    title: 'Influence score',
    text: 'Weights each organization’s connections by how well-connected its partners are. A tie to a major player counts for more than the same number of ties to peripheral participants.',
  },
];

const structureMeasures = [
  {
    title: 'Clustering coefficient',
    text: 'Whether an organization’s partners also collaborate with one another, revealing tight-knit research groups rather than ties that simply run through a single central partner.',
  },
  {
    title: 'Community detection',
    text: 'Groups densely interconnected actors algorithmically, showing where the clusters sit and which centers and universities anchor each one.',
  },
  {
    title: 'Bipartite projection',
    text: 'Redraws the map as firm-to-firm ties through shared partners, showing which firms travel in the same research circles.',
  },
];

const NasaNetworkAnalysis = () => {
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
                NASA SBIR/STTR Collaboration Network Analysis
              </h1>
            </div>
          </div>
        </section>
      </section>

      <section className='section'>
        <div className='container'>
          <p className='subtitle is-5' style={{ marginBottom: '1.25rem' }}>
            STTR awardees and their co-award partners · NASA TechPort project
            records, FY 2015–2024
          </p>
          <p>
            The figure below maps the collaboration network of NASA’s STTR
            program as recorded in NASA TechPort for fiscal years 2015 through
            2024, linking 264 STTR-awardee small businesses to 214 research and
            NASA partner organizations through 765 documented project
            collaborations. Node size reflects degree centrality, and edge
            width reflects the number of shared awards.
          </p>
          <p>
            Collaboration concentrates around a small number of central
            organizations. NASA field centers such as Glenn, Langley, Goddard,
            Johnson, Ames, Marshall, and Kennedy anchor the network, while
            research universities including MIT, Stanford, Central Florida,
            Carnegie Mellon, and Arizona State form a second tier of frequent
            partners. This pattern reflects the STTR requirement that every
            award has a research-institution partner.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <img
              src='/pictures/nasa-network-analysis.jpg'
              alt='Collaboration network of NASA STTR awardees and their partners, FY2015–FY2024'
              style={{
                width: '100%',
                height: 'auto',
                background: 'white',
                borderRadius: '12px',
              }}
            />
            <figcaption
              className='is-size-7'
              style={{ marginTop: '0.75rem', color: '#4a4a4a' }}
            >
              Source: NASA TechPort supporting-organization records, FY
              2015–2024. Network built reproducibly in R (igraph).
            </figcaption>
          </figure>

          <h2 className='title is-3'>What the network analysis can measure</h2>
          <h3 className='title is-5'>Each organization’s position</h3>
          <div className='columns is-multiline'>
            {positionMeasures.map((measure) => (
              <div key={measure.title} className='column is-4'>
                <div className='box' style={{ height: '100%' }}>
                  <h4 className='title is-5'>{measure.title}</h4>
                  <p style={{ marginBottom: 0 }}>{measure.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className='title is-5' style={{ marginTop: '1.5rem' }}>
            The network as a whole
          </h3>
          <div className='columns is-multiline'>
            {structureMeasures.map((measure) => (
              <div key={measure.title} className='column is-4'>
                <div className='box' style={{ height: '100%' }}>
                  <h4 className='title is-5'>{measure.title}</h4>
                  <p style={{ marginBottom: 0 }}>{measure.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className='title is-3' style={{ marginTop: '2rem' }}>
            Within NASA, and across the SBIR universe
          </h2>
          <p>
            The network was built reproducibly in R from public TechPort
            records, and each of the measures above can be computed directly
            from it. ArcLight can compute the same measures across the full
            multi-agency SBIR/STTR record, placing NASA’s program in context:
            whether its hubs are agency-specific or government-wide, and which
            partner organizations bridge agencies.
          </p>
          <a
            href='/pictures/nasa-network-analysis.docx'
            className='button is-primary'
            download
          >
            Download the one-pager
          </a>
        </div>
      </section>
    </>
  );
};

export default NasaNetworkAnalysis;
