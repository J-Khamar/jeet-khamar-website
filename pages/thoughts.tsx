import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

export default function Thoughts() {
  return (
    <>
      <Head>
        <title>Thoughts - Jeet Khamar</title>
        <meta name="description" content="Thoughts and writings by Jeet Khamar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.homeLink}>
            <h1 className={styles.title}>Jeet Khamar</h1>
          </Link>
          <div className={styles.headerRight}>
            <nav className={styles.nav}>
              <Link href="/thoughts" className={`${styles.navLink} ${styles.active}`}>Thoughts</Link>
              <Link href="/engineering" className={styles.navLink}>Engineering</Link>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          <h2 className={styles.pageTitle}>Thoughts</h2>
          <div className={styles.content}>
            <article className={styles.post}>
              <Link href="/thoughts/call-me-jeet" className={styles.thoughtLink}>
                <h3>जीत</h3>
                <p className={styles.date}>January 2025</p>
                <p>
                  A brief introduction.
                </p>
              </Link>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
