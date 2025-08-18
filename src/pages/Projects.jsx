import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../projects.js';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Helper function to determine if link is internal (React route) or external
  const isInternalLink = (link) => {
    return link.startsWith('/projects/');
  };

  useEffect(() => {
    filterProjects(activeTab);
  }, [activeTab]);

  const filterProjects = (tab) => {
    if (tab === 'all') {
      setFilteredProjects(projects);
    } else {
      // Filter based on keywords
      const filtered = projects.filter(project => {
        const keywords = project.projectkeywords.map(k => k.toLowerCase());
        switch (tab) {
          case 'policy-evaluation':
            return keywords.some(k => k.includes('policy') || k.includes('state'));
          case 'data-viz':
            return keywords.some(k => k.includes('visualization') || k.includes('tableau') || k.includes('chart'));
          case 'data-analysis':
            return keywords.some(k => k.includes('analysis') || k.includes('survey') || k.includes('covid'));
          default:
            return true;
        }
      });
      setFilteredProjects(filtered);
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* Hero Section */}
      <section id='hero'>
        <section className="hero is-medium has-bg-img-project fadeIn">
          <div className="hero-body">
            <div className="container has-text-centered text">
              <h1 className="has-text-white title is-1" style={{display: 'inline-block'}}>Projects</h1>
            </div>
          </div>
        </section>
      </section>

      {/* Tabs Section */}
      <section id='tabs-section' style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <div className="container">
          <div className="tabs is-toggle is-toggle-rounded is-centered" id='tabs'>
            <ul>
              <li className={activeTab === 'all' ? 'is-active' : ''} id='all-tab'>
                <a onClick={() => handleTabClick('all')}>
                  <span className="icon is-small"><i className="fas fa-image"></i></span>
                  <span>All</span>
                </a>
              </li>
              <li className={activeTab === 'policy-evaluation' ? 'is-active' : ''} id='policy-evaluation-tab'>
                <a onClick={() => handleTabClick('policy-evaluation')}>
                  <span className="icon is-small"><i className="fa fa-university"></i></span>
                  <span>Policy Evaluation</span>
                </a>
              </li>
              <li className={activeTab === 'data-viz' ? 'is-active' : ''} id='data-viz-tab'>
                <a onClick={() => handleTabClick('data-viz')}>
                  <span className="icon is-small"><i className="fas fa-chart-bar"></i></span>
                  <span>Data Visualization</span>
                </a>
              </li>
              <li className={activeTab === 'data-analysis' ? 'is-active' : ''} id='data-analysis-tab'>
                <a onClick={() => handleTabClick('data-analysis')}>
                  <span className="icon is-small"><i className="fas fa-calculator"></i></span>
                  <span>Data Analytics</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Cards Section */}
      <section id="cards" style={{marginBottom: '3rem', padding: '0 1rem', width: '100%'}}>
        <div className="container is-fluid" style={{maxWidth: '100%'}}>
          <div className="columns is-multiline is-centered" style={{margin: '0 -0.75rem'}}>
            {filteredProjects.map((project) => (
              <div key={project.projectid} className="column is-4-widescreen is-6-desktop is-12-tablet" style={{padding: '0.75rem'}}>
                <div className="card is-shady" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      {isInternalLink(project.link) ? (
                        <Link to={project.link}>
                          <img src={project.projectimg} alt={project.projectname} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                        </Link>
                      ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <img src={project.projectimg} alt={project.projectname} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                        </a>
                      )}
                    </figure>
                  </div>
                  <div className="card-content" style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
                    <div className="content" style={{flex: '1'}}>
                      <h4 className="title is-5">{project.projectname}</h4>
                      <p>{project.projctdescription}</p>
                      <div className="tags" style={{marginBottom: '1rem', marginTop: 'auto'}}>
                        {project.projectkeywords.map((keyword, idx) => (
                          <span key={idx} className="tag is-link" style={{marginRight: '0.5rem', marginBottom: '0.5rem'}}>{keyword}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{marginTop: 'auto'}}>
                      {isInternalLink(project.link) ? (
                        <Link 
                          to={project.link}
                          className="button is-link is-fullwidth"
                        >
                          View Project
                        </Link>
                      ) : (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="button is-link is-fullwidth"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="has-text-centered" style={{padding: '3rem'}}>
              <p className="subtitle">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;