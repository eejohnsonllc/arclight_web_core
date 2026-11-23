// Add an event by copying an object into this array.
// date is YYYY-MM-DD. Events on or after today appear on /events.
// Earlier events appear on /events/past.
export const events = [
  {
    title:
      'Building Healthy, Resilient Communities: Leveraging AI & Collective Assets for Lasting Impact',
    date: '2027-01-21',
    time: '11:00 AM – 4:00 PM',
    location: '915 Pearl Park Way, Charlotte, NC',
    flyer: '/events/jan-ai-event-flyer.jpg',
    flyerHref: '/events/jan-ai-event-flyer.pdf',
    description:
      'An action-oriented conference for technology innovators, healthcare and academic leaders, community organizations, and local government. Building on the March 2026 workshop, the day focuses on U.S. veteran healthcare and how responsible AI and community assets can support practical, patient-centered solutions. Jess Anderson, Mayor of Chapel Hill, is the featured speaker. Tickets purchased before December 15 are offered at a reduced rate. Sponsorships are available at events@arclightanalytics.com.',
    links: [
      { href: 'https://bit.ly/4z5K9ng', label: 'Register' },
      { href: '/events/jan-ai-event-flyer.pdf', label: 'View the flyer' },
      {
        href: '/events/jan-ai-event-sponsor-sheet.pdf',
        label: 'Sponsorship details',
      },
    ],
  },
  {
    title:
      'Building Healthy, Resilient Communities through Human-Centered AI',
    date: '2026-03-05',
    location: 'Chapel Hill, NC',
    description:
      'Leaders from across sectors asked what would have to be true before communities could trust AI with health and safety problems. The workshop centered on relationships and governance: Medicaid eligibility gaps, cross-sector connections, and next steps on use cases, guardrails, and areas of need.',
    link: '/events/ai-community-health-event-recap.pdf',
    linkLabel: 'Read the recap',
  },
];

const parseEventDate = (iso) => {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const startOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const eventEnd = (event) => parseEventDate(event.endDate || event.date);

export const formatEventDate = (iso) =>
  parseEventDate(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export const eventMonthLabel = (iso) =>
  parseEventDate(iso).toLocaleDateString('en-US', { month: 'short' });

export const eventDayLabel = (iso) => parseEventDate(iso).getDate();

export const upcomingEvents = () => {
  const today = startOfToday();
  return events
    .filter((event) => eventEnd(event) >= today)
    .sort((a, b) => parseEventDate(a.date) - parseEventDate(b.date));
};

export const pastEvents = () => {
  const today = startOfToday();
  return events
    .filter((event) => eventEnd(event) < today)
    .sort((a, b) => parseEventDate(b.date) - parseEventDate(a.date));
};
