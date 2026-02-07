import JsonLd from './JsonLd'

export default function PersonSchema() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gavyn Caldwell',
    url: 'https://gavyncaldwell.com',
    jobTitle: 'Senior Frontend Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Koddi',
    },
    sameAs: [
      'https://github.com/gavyncaldwell',
      'https://linkedin.com/in/gavyncaldwell',
      'https://www.youtube.com/@gavshobbyquest',
    ],
    knowsAbout: ['React', 'TypeScript', 'Next.js', 'AI Tooling', 'Frontend Development'],
    image: 'https://gavyncaldwell.com/images/gallery/headshot.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ogden',
      addressRegion: 'Utah',
      addressCountry: 'US',
    },
  }

  return <JsonLd data={personData} />
}
