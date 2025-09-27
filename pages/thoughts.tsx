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
          <p className={styles.description}>
            A series of personal notes where I share my thoughts, feelings, and perspective — not just about the work I do, but how I see the world and myself.
          </p>
          <div className={styles.content}>
            {/* Featured Recent Posts */}
            <section className={styles.featuredPosts}>
              <h3 className={styles.archiveTitle}>Featured</h3>
              <article className={styles.post}>
                <Link href="/thoughts/what-comes-after-code" className={styles.thoughtLink}>
                  <h3>What Comes After Code</h3>
                  <p className={styles.date}>September 27, 2025 • 4 min read</p>
                  <p>
                    On the future of programming and what comes after traditional code.
                  </p>
                </Link>
              </article>
            </section>
            
            {/* Archive - Compact List for Older Posts */}
            <section className={styles.archivePosts}>
              <h3 className={styles.archiveTitle}>Archive</h3>
              <div className={styles.compactList}>
                <Link href="/thoughts/call-me-jeet" className={styles.compactLink}>
                  <div className={styles.compactPost}>
                    <span className={styles.compactTitle}>जीत</span>
                    <span className={styles.compactDate}>Jan 15, 2025 • 2 min</span>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
