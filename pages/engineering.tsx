import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

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
          </div>
        </header>

        <main className={styles.main}>
          <h2 className={styles.pageTitle}>Engineering</h2>
          <p className={styles.description}>
            The hard lessons learned from building software, scaling machine learning systems, and solving context engineering problems.
          </p>
          <div className={styles.content}>
            <section className={styles.featuredPosts}>
              <h3 className={styles.archiveTitle}>Featured</h3>
              <article className={styles.post}>
                <Link href="/engineering/staying-unstuck-at-a-startup" className={styles.thoughtLink}>
                  <h3>Staying Unstuck at a Startup</h3>
                  <p className={styles.date}>March 14, 2026 • 8 min read</p>
                  <p>
                    At a startup, being stuck isn't a minor annoyance. It's an emergency. Here's how I've learned to never fully stop moving.
                  </p>
                </Link>
              </article>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
