import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeet Khamar</title>
        <meta name="description" content="Jeet Khamar - Building Rocket to automate software engineering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Jeet Khamar</h1>
          <div className={styles.headerRight}>
            <nav className={styles.nav}>
              <Link href="/thoughts" className={styles.navLink}>Thoughts</Link>
              <Link href="/engineering" className={styles.navLink}>Engineering</Link>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            <p className={styles.intro}>
              I'm building <a href="https://www.rocket.new/" target="_blank" rel="noopener noreferrer" className={styles.link}>Rocket</a> to automate <a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer" className={styles.link}>software engineering</a>. I spend most of my time designing constrained in-flow agents and solving context engineering problems.
            </p>
            
            <p className={styles.description}>
              Originally from Nairobi, Kenya, I moved to India for my undergraduate studies in Computer Science and Math, where I developed a deep interest in machine learning algorithms and statistical methods.
            </p>
            
            <p className={styles.description}>
              In the <a href="https://www.dhiwise.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>past</a>, I have built production-grade machine learning pipelines, worked on similarity search problems, and fine-tuned large language models for domain-specific applications.
            </p>
            
            <p className={styles.contact}>
              Connect with me on <a href="https://www.linkedin.com/in/jeet-khamar-389003229/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a> or via <a href="mailto:jeetkhamar2022@gmail.com" className={styles.link}>email</a>.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
