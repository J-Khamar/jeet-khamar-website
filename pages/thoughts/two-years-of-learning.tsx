import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Page.module.css';

export default function TwoYearsOfLearning() {
  return (
    <>
      <Head>
        <title>Two Years of Learning in Two Minutes - Jeet Khamar</title>
        <meta name="description" content="I have been out in the real world for about two years now. These are some things I have learned." />
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
            <h2 className={styles.pageTitle}>Two Years of Learning in Two Minutes</h2>
            <p className={styles.date}>March 8, 2026 • 6 min read</p>
            
            <div className={styles.articleContent}>
              <p>
                I have been out in the real world for about two years now. These are some things I have learned. None of them are revolutionary. Most of them I had to learn the hard way, which I suppose is the only way to actually learn anything.
              </p>

              <h3 className={styles.sectionTitle}>Make it real</h3>

              <p>
                I used to believe that the quality of your thinking determined the quality of your life. That the people who did well were the ones who planned better, analyzed deeper, saw further ahead. So I spent a lot of time thinking. Preparing. Mapping things out. And it felt productive. It looked responsible. The problem was that none of it was real. I was making plans in a space where nothing could go wrong because nothing was being tested against anything.
              </p>

              <p>
                What I've come to understand is that you only really know something after you've tried to do it. Not before. The idea in your head can be whatever you want it to be. The thing you've actually made can only be what it is. And that difference — between what you imagined and what you got — is sort of the whole point. That's where the learning actually happens. You don't get it from planning. You get it from making something and seeing what's wrong with it.
              </p>

              <p>
                I think the hardest part of this, at least for me, is that intelligence actively works against you here. If you're smart, you can build very convincing reasons for not starting. The timing isn't right. The action is too small. You need to think it through a little more. And it all sounds reasonable. It sounds like wisdom, even. But it isn't. I've spent enough time doing this to know that it's just being scared of putting something out there that might not be good enough.
              </p>

              <h3 className={styles.sectionTitle}>One thing, then another</h3>

              <p>
                You can't do everything. I found this thought paralysing for a long time. But you can do one thing. And then one more. And then one more after that.
              </p>

              <p>
                The quality of those early things barely matters. What matters is that they happened. I wrote things that were bad. I made decisions that were wrong. But every one of them gave me something I couldn't have gotten from thinking alone. The bad writing showed me what good writing wasn't. The wrong decisions showed me where the real constraints were. It compounds, if you keep going. Slowly enough that you don't notice, and then you look back and it's sort of surprising how far you've come.
              </p>

              <p>
                Part of this — the part that took me longer to get — is that you have to let each one go. If you keep replaying a bad attempt, you won't make the next one. If you hold onto a good result, you'll be too hesitant to risk it. I tend to do both. The people I've watched who are genuinely good at what they do aren't the ones who never get it wrong. They just drop things fast and move on. Good results, bad results, doesn't matter. They give everything to whatever is next. I think that's what makes the compounding actually work. You can't do one thing, then another, then another, if you're still stuck on the first one.
              </p>

              <h3 className={styles.sectionTitle}>Slow down, then go</h3>

              <p>
                There is no shortcut around putting in the time. The people I used to think were naturally talented just had more hours behind them that I couldn't see.
              </p>

              <p>
                But I also learned that time without limits will hollow you out. It starts well. You care about what you're doing, so you do more of it, and because it feels like a choice you don't notice when it stops being one. And then at some point you look up and realize you haven't talked to a close friend in weeks. You let the work eat the rest of your life because it felt like ambition rather than what it actually was.
              </p>

              <p>
                I don't want balance in the way people usually mean it. I don't want to do less. I want to go hard at whatever I'm doing, and then genuinely stop. Not half-present, not mentally still solving something while pretending to be off. Actually gone. This is harder than the working part, honestly. It requires trusting that things will be okay without you for a while, and sometimes they aren't. But I don't think the kind of intensity that good work asks of you is something you can sustain unless you can also fully walk away from it.
              </p>

              <h3 className={styles.sectionTitle}>The in-between</h3>

              <p>
                Every few months I need a day that goes nowhere. Not a rest day, not a fun day. A day that produces nothing. No output. No socializing. No forward motion. Just sitting with myself and checking whether I'm still pointed in a direction I actually want to go.
              </p>

              <p>
                I used to resent needing this. It felt like a flaw. Like I should be able to just keep going, the way other people seemed to. But I've come to accept that these stops are the only thing keeping me from drifting. Without them, the weeks blur together. Each one is fine on its own, but after a few months I look up and I'm somewhere I didn't consciously choose to be.
              </p>

              <p>
                The stopping itself isn't pleasant. It's just me and an honest look at how I've been living, and usually I don't love what I find. That I let certain friendships go quiet. That I filled weeks with things that didn't matter to me. That somewhere along the way I drifted off course without noticing. Part of me thinks I'd be happier if I just never examined any of this. Just kept moving, stayed busy, didn't ask the uncomfortable questions. The rational side of me knows that's how people end up years into a life they didn't want. But knowing that doesn't make the examining part feel any better.
              </p>

              <p>
                I still think it's worth it. The alternative is finding out too late that you've been heading somewhere you never meant to go.
              </p>

              <h3 className={styles.sectionTitle}>Stay open</h3>

              <p>
                I used to think conviction meant not changing your mind. That being firm was the same as being principled. What I actually found is that the most expensive mistakes I've made came from holding onto ideas I no longer believed in, just because I'd been loud about them. There's a kind of pride that makes you defend a position past the point where you know it's wrong, because somehow admitting that feels worse than just quietly being wrong. If I'm being honest with myself, I've done this more than I'd like.
              </p>

              <p>
                Seeking the truth is uncomfortable. It means being willing to feel stupid sometimes. To ask the question that might reveal you understand less than you thought. To sit with someone who disagrees with you and genuinely consider that they might be right. I've gotten better at it, but it doesn't come naturally. The instinct is to defend. I'm trying to get better at noticing that instinct and not following it.
              </p>

              <h3 className={styles.sectionTitle}>Follow curiosity</h3>

              <p>
                Something I've noticed over the past two years is that I keep coming back to whatever genuinely interests me. Not what seems safe, not what has the clearest path. Just whatever I'm curious about. Every meaningful thing I've worked on started that way — not from a plan, but from a pull toward something I wanted to understand better.
              </p>

              <p>
                I think curiosity works because it keeps you honest about what you actually care about, as opposed to what you think you should care about. The things I've done because they seemed smart or strategic have never led anywhere particularly interesting. The things I've done because I couldn't stop thinking about them have led to almost everything that matters to me. I don't fully understand why that is, but it's been consistent enough that I trust it now.
              </p>

              <p>
                Curiosity also tells you when something is done. When you're staying with something out of obligation or comfort rather than real interest, that's worth paying attention to. The same pull that got you into it will go quiet when it's time to move on, if you're honest with yourself about it.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
