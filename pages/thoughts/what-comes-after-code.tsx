import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Page.module.css';

export default function WhatComesAfterCode() {
  return (
    <>
      <Head>
        <title>What Comes After Code - Jeet Khamar</title>
        <meta name="description" content="Programming is changing really fast right now. The industry is moving toward a new type of programming based on describing intent to the computer." />
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
          <article>
            <h2 className={styles.pageTitle}>What Comes After Code</h2>
            <p className={styles.date}>September 27, 2025 • 4 min read</p>
            
            <div className={styles.articleContent}>
              <p>
                Programming is changing. The industry is moving away from traditional code toward something entirely different—a <a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer" className={styles.link}>new type of programming</a> that's distilled down into you describing the intent to the computer for what you want in the most concise way possible.
              </p>
              
              <p>
                There are kind of two camps right now. One thinks we'll keep writing formal programming languages forever. The other thinks you'll just chat with a bot to build software. I'm firmly in the chat camp, but there are <a href="https://aschmelyun.com/blog/ai-is-a-fad-and-programming-is-dead/" target="_blank" rel="noopener noreferrer" className={styles.link}>problems</a> with both of those visions that need solving.
              </p>
              
              <p>
                The chatbot approach has serious flaws: you build something that becomes unchangeable, AI makes decisions you can't control, underlying details turn opaque, and iteration cycles are painfully slow. Today, if you want precise control over your software, you need more than typing "change this about my app" into a text box. You need surgical precision. But this limitation is temporary.
              </p>
              
              <p>
                <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer" className={styles.link}>AI coding tools</a> have solved the engineer-to-machine gap—you can now give directions to AI like you would to an engineer, with technical precision and some coding knowledge. They've cracked the pseudocode-to-code translation. This is huge and has established the foundation for everything that comes next.
              </p>
              
              <p>
                What I see coming next goes beyond engineer-level communication entirely. Instead of talking to your AI like it's an engineer on your team, you'll talk to it like your CTO or Director of Engineering. You simply describe the outcome—the AI handles everything else internally. The missing piece is natural language-to-outcome translation, where pure intent automatically becomes working software.
              </p>
              
              <p>
                Most people still can't participate in software creation because they're locked out by technical knowledge requirements. The future belongs to those with <a href="https://kasanoff.com/blog/2020/5/18/intuition-is-the-highest-form-of-intelligence" target="_blank" rel="noopener noreferrer" className={styles.link}>intuition</a>—intuition for how software should look and feel, and intuition for what good software feels like to users.
              </p>

              <p>
                We're moving from millions of lines of impenetrable code to something beautifully simple:
              </p>
              
              <p className={styles.quote}>
                "Here's what I want built, here's how it should feel."
              </p>
              
              <p>
                That's it. That's the entire specification. That's <a href="https://www.rocket.new/" target="_blank" rel="noopener noreferrer" className={styles.link}>the future</a> of software.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
