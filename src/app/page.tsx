import { countries } from '@/data/countries';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={`${styles.header} glass-panel`}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>GeoChronicle</h1>
          <nav>
            <ul className={styles.navList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#countries">Explore Countries</Link></li>
              <li><Link href="#about">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={`${styles.title} animate-fade-in stagger-1`}>
            Discover the <span>History</span> of Global Capitals
          </h1>
          <p className={`${styles.subtitle} animate-fade-in stagger-2`}>
            Journey through time and explore how the world's most iconic capital cities have evolved, grown, and transformed across the centuries.
          </p>
          <div className={`animate-fade-in stagger-3`}>
            <Link href="#countries" className={styles.primaryButton}>
              Start Exploring
            </Link>
          </div>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.glowOrb}></div>
        </div>
      </section>

      {/* Countries Grid Section */}
      <section id="countries" className={`${styles.countriesSection} container section`}>
        <h2 className={styles.sectionTitle}>Featured Nations</h2>
        <div className={styles.grid}>
          {countries.map((country) => (
            <Link href={`/country/${country.id}`} key={country.id} className={styles.cardLink}>
              <div className={`${styles.card} glass-panel`}>
                <div className={styles.cardImageContainer}>
                  <img src={country.imageUrl} alt={country.name} className={styles.cardImage} />
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardRegion}>{country.region}</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{country.name}</h3>
                  <p className={styles.capitalLabel}>Capital: <span className={styles.capitalName}>{country.capital}</span></p>
                  <p className={styles.cardDescription}>{country.description.substring(0, 80)}...</p>
                  <span className={styles.exploreText}>View History →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GeoChronicle. All rights reserved.</p>
        <p className={styles.footerSubtext}>Graduation Project - Week 1</p>
      </footer>
    </main>
  );
}
