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
          <nav className={styles.nav}>
            <Link href="/thoughts" className={styles.navLink}>Thoughts</Link>
            <Link href="/engineering" className={styles.navLink}>Engineering</Link>
          </nav>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            <p className={styles.intro}>
              I'm building <a href="https://www.rocket.new/" target="_blank" rel="noopener noreferrer" className={styles.link}>Rocket</a> to automate <a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer" className={styles.link}>software engineering</a>.
            </p>
            
            <p className={styles.description}>
              I grew up in a town called Nairobi in Kenya. I then moved to India where I completed my undergraduate studies in Computer Science and Math, focusing on algorithms and statistical methods.
            </p>
            
            <p className={styles.description}>
              I've worked on building machine learning pipelines for production systems, fine-tuning large language models for specific domains, and solving statistical inference problems in real-world applications.
            </p>
            
            <p className={styles.contact}>
              Reach out on <a href="https://www.linkedin.com/in/jeet-khamar-389003229/" target="_blank" rel="noopener noreferrer" className={styles.link}>linkedin</a> or by <a href="mailto:jeetkhamar2022@gmail.com" className={styles.link}>mail</a>.
            </p>
          </div>
          
        </main>
      </div>
    </>
  );
}
