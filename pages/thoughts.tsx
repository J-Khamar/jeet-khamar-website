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
                <Link href="/thoughts/writing-code-is-the-easiest-thing" className={styles.thoughtLink}>
                  <h3>Writing Code Is the Easiest Thing an Agent Can Do</h3>
                  <p className={styles.date}>May 4, 2026 • 8 min read</p>
                  <p>
                    Code is where agents feel at home. The real frontier isn&apos;t software engineers - it&apos;s the domain experts who always had the knowledge but never had the abstraction layer.
                  </p>
                </Link>
              </article>
            </section>
            
            {/* Archive - Compact List for Older Posts */}
            <section className={styles.archivePosts}>
              <h3 className={styles.archiveTitle}>Archive</h3>
              <div className={styles.compactList}>
                <Link href="/thoughts/two-years-of-learning" className={styles.compactLink}>
                  <div className={styles.compactPost}>
                    <span className={styles.compactTitle}>Two Years of Learning in Two Minutes</span>
                    <span className={styles.compactDate}>Mar 8, 2026 • 6 min</span>
                  </div>
                </Link>
                <Link href="/thoughts/what-comes-after-code" className={styles.compactLink}>
                  <div className={styles.compactPost}>
                    <span className={styles.compactTitle}>What Comes After Code</span>
                    <span className={styles.compactDate}>Sep 27, 2025 • 4 min</span>
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
