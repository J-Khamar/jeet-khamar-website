import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';
import ThemeToggle from '../components/ThemeToggle';

export default function Engineering() {
  return (
    <>
      <Head>
        <title>Engineering - Jeet Khamar</title>
        <meta name="description" content="Engineering insights and technical articles by Jeet Khamar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.homeLink}>
            <h1 className={styles.title}>Jeet Khamar</h1>
          </Link>
          <div className={styles.headerRight}>
            <nav className={styles.nav}>
              <Link href="/thoughts" className={styles.navLink}>Thoughts</Link>
              <Link href="/engineering" className={`${styles.navLink} ${styles.active}`}>Engineering</Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className={styles.main}>
          <h2 className={styles.pageTitle}>Engineering</h2>
          <div className={styles.content}>
            <p className={styles.comingSoon}>Coming soon.</p>
          </div>
        </main>
      </div>
    </>
  );
}
