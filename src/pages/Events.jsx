import { Link } from 'react-router-dom';
import { upcomingEvents } from '../events.js';
import { EventCard, EventStyles } from '../components/EventCard.jsx';

const Events = () => {
  const upcoming = upcomingEvents();

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
              Events
            </h1>
          </div>
        </div>
      </section>

      <section className='section events-section'>
        <div className='container'>
          <p className='subtitle is-5 has-text-centered events-intro'>
            Talks, workshops, and briefings from ArcLight Analytics.
          </p>

          <h2 className='title is-3 events-heading'>Upcoming</h2>
          {upcoming.length > 0 ? (
            upcoming.map((event) => (
              <EventCard key={`${event.date}-${event.title}`} event={event} />
            ))
          ) : (
            <div className='box has-text-centered event-empty'>
              <span className='icon is-large has-text-primary'>
                <i className='fas fa-calendar-alt fa-2x'></i>
              </span>
              <h3 className='title is-4'>No upcoming events</h3>
              <p>
                New talks and workshops will be posted here. Reach out if you
                would like ArcLight to join a briefing or panel.
              </p>
              <Link to='/contact' className='button is-primary'>
                Contact us
              </Link>
            </div>
          )}

          <p className='has-text-centered events-subpage-link'>
            <Link to='/events/past'>View past events</Link>
          </p>
        </div>
      </section>
      <EventStyles />
    </div>
  );
};

export default Events;
