import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Page.module.css';

export default function CallMeJeet() {
  return (
    <>
      <Head>
        <title>जीत - Jeet Khamar</title>
        <meta name="description" content="A reflection on my name and what victory really means" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.homeLink}>
            <h1 className={styles.title}>Jeet Khamar</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href="/thoughts" className={`${styles.navLink} ${styles.active}`}>Thoughts</Link>
            <Link href="/engineering" className={styles.navLink}>Engineering</Link>
          </nav>
        </header>

        <main className={styles.main}>
          <article>
            <h2 className={styles.pageTitle}>जीत</h2>
            <p className={styles.date}>January 2025</p>
            
            <div className={styles.articleContent}>
              <p>
                I've been called a lot of things in my life.<br/>
                Some fair, some not.<br/>
                But the name I've been called the most — जीत — wasn't up for debate.<br/>
                My late father chose it.<br/>
                No discussions. No suggestions.<br/>
                जीत means victory.<br/>
                I used to think it was about winning.<br/>
                Being first. Proving something.<br/>
                But as I've grown, I've started to understand what he meant.<br/>
                Victory isn't always loud.<br/>
                Sometimes it's just doing the right thing.<br/>
                Staying consistent.<br/>
                Taking responsibility.<br/>
                So if you're looking for something to call me —<br/>
                Try focused.<br/>
                Try steady.<br/>
                Try determined.<br/>
                Or just call me by my name, now that you know what it means.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

