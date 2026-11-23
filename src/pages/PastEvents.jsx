import { Link } from 'react-router-dom';
import { pastEvents } from '../events.js';
import { EventCard, EventStyles } from '../components/EventCard.jsx';

const PastEvents = () => {
  const past = pastEvents();

  return (
    <div>
      <section id='hero' className='hero is-medium has-bg-img fadeIn'>
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
              Past Events
            </h1>
          </div>
        </div>
      </section>

      <section className='section events-section'>
        <div className='container'>
          <p className='subtitle is-5 has-text-centered events-intro'>
            Earlier talks, workshops, and briefings from ArcLight Analytics.
          </p>

          {past.length > 0 ? (
            past.map((event) => (
              <EventCard
                key={`${event.date}-${event.title}`}
                event={event}
                past
              />
            ))
          ) : (
            <div className='box has-text-centered event-empty'>
              <span className='icon is-large has-text-primary'>
                <i className='fas fa-history fa-2x'></i>
              </span>
              <h3 className='title is-4'>No past events yet</h3>
              <p>Events will move here after they have taken place.</p>
            </div>
          )}

          <p className='has-text-centered events-subpage-link'>
            <Link to='/events'>Back to upcoming events</Link>
          </p>
        </div>
      </section>
      <EventStyles />
    </div>
  );
};

export default PastEvents;
