import {
  eventDayLabel,
  eventMonthLabel,
  formatEventDate,
} from '../events.js';

const eventLinks = (event) => {
  if (event.links?.length) return event.links;
  if (event.link) {
    return [{ href: event.link, label: event.linkLabel || 'Learn more' }];
  }
  return [];
};

export const EventCard = ({ event, past = false }) => {
  const links = eventLinks(event);

  return (
    <article className={`box event-card ${past ? 'is-past' : ''}`}>
      {event.flyer ? (
        <a
          className='event-flyer-link'
          href={event.flyerHref || event.flyer}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`View the ${event.title} flyer`}
        >
          <img
            className='event-flyer'
            src={event.flyer}
            alt={`${event.title} flyer`}
          />
        </a>
      ) : null}
      <div className='event-card-main'>
        <div className='event-date' aria-hidden='true'>
          <span className='event-month'>{eventMonthLabel(event.date)}</span>
          <span className='event-day'>{eventDayLabel(event.date)}</span>
        </div>
        <div className='event-body'>
          <h3 className='title is-4'>{event.title}</h3>
          <p className='event-meta'>
            <span>{formatEventDate(event.date)}</span>
            {event.time ? <span>{event.time}</span> : null}
            {event.location ? <span>{event.location}</span> : null}
          </p>
          {event.description ? (
            <p className='event-description'>{event.description}</p>
          ) : null}
          {links.length > 0 ? (
            <div className='event-actions'>
              {links.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`button ${index === 0 ? 'is-primary' : 'is-light'}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export const EventStyles = () => (
  <style>
    {`
      .events-section {
        padding-top: 3rem;
        padding-bottom: 1rem;
      }

      .events-intro {
        max-width: 40rem;
        margin: 0 auto 2.5rem;
      }

      .events-heading {
        margin-bottom: 1.25rem;
      }

      .events-subpage-link {
        margin-top: 2rem;
        font-weight: bold;
      }

      .events-subpage-link a {
        color: #2C7F7F;
      }

      .event-card {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        margin-bottom: 1.25rem;
        padding: 1.5rem;
        border-radius: 12px;
      }

      .event-flyer-link {
        display: block;
      }

      .event-flyer {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 10px;
      }

      .event-card-main {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
      }

      .event-date {
        flex: 0 0 5.5rem;
        background: #2C7F7F;
        color: white;
        border-radius: 10px;
        text-align: center;
        padding: 0.85rem 0.5rem;
        line-height: 1;
      }

      .event-month {
        display: block;
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 0.35rem;
      }

      .event-day {
        display: block;
        font-size: 2rem;
        font-weight: bold;
      }

      .event-body {
        flex: 1;
        min-width: 0;
      }

      .event-body .title {
        margin-bottom: 0.5rem;
      }

      .event-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem 1rem;
        color: #4a4a4a;
        margin-bottom: 0.75rem;
      }

      .event-description {
        margin-bottom: 1rem;
      }

      .event-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .event-card.is-past .event-date {
        background: #6b8f8f;
      }

      .event-empty {
        padding: 2.5rem 1.5rem;
      }

      .event-empty .title {
        margin-top: 1rem;
      }

      .event-empty p {
        max-width: 34rem;
        margin: 0 auto 1.25rem;
      }

      @media (max-width: 768px) {
        .events-section {
          padding-top: 2rem;
        }

        .event-card {
          gap: 1rem;
          padding: 1.25rem;
        }

        .event-card-main {
          flex-direction: column;
          gap: 1rem;
        }

        .event-date {
          flex-basis: auto;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
        }

        .event-month {
          margin-bottom: 0;
        }

        .event-day {
          font-size: 1.6rem;
        }
      }
    `}
  </style>
);
