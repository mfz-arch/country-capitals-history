import { countries } from '@/data/countries';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './country.module.css';

export function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.id,
  }));
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const country = countries.find((c) => c.id === resolvedParams.slug);

  if (!country) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <header className={`${styles.header} glass-panel`}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>
            <Link href="/">GeoChronicle</Link>
          </h1>
          <nav>
            <Link href="/" className={styles.backLink}>← Back to Explore</Link>
          </nav>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <img src={country.imageUrl} alt={country.capital} className={styles.heroImage} />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`${styles.heroContent} container`}>
          <span className={`${styles.regionTag} animate-fade-in stagger-1`}>{country.region}</span>
          <h1 className={`${styles.countryName} animate-fade-in stagger-2`}>{country.name}</h1>
          <h2 className={`${styles.capitalName} animate-fade-in stagger-3`}>Capital: {country.capital}</h2>
        </div>
      </section>

      <section className={`${styles.contentSection} container`}>
        <div className={styles.infoGrid}>
          <div className={`${styles.statsCard} glass-panel animate-fade-in stagger-4`}>
            <h3>Key Facts</h3>
            <ul>
              <li><strong>Population:</strong> {country.population}</li>
              <li><strong>Established:</strong> {country.established}</li>
            </ul>
            <p className={styles.description}>{country.description}</p>
          </div>

          <div className={`${styles.timelineSection} animate-fade-in stagger-4`}>
            <h3>Historical Timeline of {country.capital}</h3>
            <div className={styles.timeline}>
              {country.historyTimeline.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <div className={styles.timelineEvent}>{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
