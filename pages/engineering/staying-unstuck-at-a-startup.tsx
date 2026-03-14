import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Page.module.css';

export default function StayingUnstuck() {
  return (
    <>
      <Head>
        <title>Staying Unstuck at a Startup - Jeet Khamar</title>
        <meta name="description" content="At a startup, being stuck isn't a minor annoyance. It's an emergency. Here's how I've learned to never fully stop moving." />
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
          <article>
            <h2 className={styles.pageTitle}>Staying Unstuck at a Startup</h2>
            <p className={styles.date}>March 14, 2026 • 8 min read</p>
            
            <div className={styles.articleContent}>
              <p>
                At a startup, being stuck isn't a minor annoyance. It's an emergency. There's nobody else to pick up the slack, no backlog of safe busywork to retreat into, no chain of managers who can go hammer on doors for you. When you grind to a halt, the whole company feels it. <strong>If you want to survive at a startup, you have to learn how to never fully stop moving.</strong>
              </p>

              <p>
                I've spent the last two years building AI agents and backend infrastructure at a startup. I'm not a ten-year veteran. But I've noticed something in that time: the engineers around me who deliver consistently aren't necessarily the most talented. They're the ones who handle confusion well. When they hit a wall, they don't freeze. They find a way to keep going.
              </p>

              <p>
                This post is about how I've tried to become that kind of engineer. It's partly about habits, partly about how I think through fear, and partly about how AI tools have changed what "stuck" even means.
              </p>

              <h3 className={styles.sectionTitle}>Startup walls are different from big-company walls</h3>

              <p>
                In a large company, what stops you is usually <em>people</em>. A review queue. An approval chain. Some platform team that owns the thing you need changed. The way you get past those obstacles is social: knowing the right person, having your manager lean on their manager, working around the bottleneck entirely.
              </p>

              <p>
                At a startup, what stops you is usually <em>your own knowledge</em>. There is no platform team. You are the platform team, the data team, and half the frontend team. A couple of months ago, one of our streaming endpoints just stopped streaming. No errors, no timeouts - the response would arrive all at once instead of token by token. I spent hours looking at the handler, the connection logic, the model configuration. The problem turned out to be the compression middleware. Gzip was buffering the entire response before sending it. A thirteen-line fix. <strong>The obstacle is almost always a gap in what you know, not a person standing in your way.</strong> In a big company, you'd go find the expert. At a startup, you have to <em>become</em> the expert, at least enough to get past the problem.
              </p>

              <h3 className={styles.sectionTitle}>Most of the time you're stuck, you're actually just afraid</h3>

              <p>
                Here's the uncomfortable part. When I look back at the times I've been stuck - truly stuck, not just waiting on a deploy - the technical problem was almost never the real issue. <strong>The real issue was that I was avoiding the part that scared me.</strong>
              </p>

              <p>
                I'd circle around it. Read the docs again. Refactor something adjacent. Check Slack. Convince myself I needed to "understand the problem better" before I could act. What I was really doing was putting off the moment where I had to open the lid on something I didn't understand and start poking around inside it.
              </p>

              <p>
                This happens to me less now than it did a year ago, but it still happens. The pattern is always the same: I notice I've been "working on" a problem for an hour without actually doing anything concrete. That's the signal. It means I'm circling instead of engaging. The only fix I've found is to notice it, admit to myself what's happening, and force myself to do the thing I'm avoiding - even if I have no idea whether it'll work. If you're early in your career, like me, this feeling is especially intense. You're painfully aware that someone with more experience would probably resolve this in ten minutes.
              </p>

              <p>
                I think this is the part of being a good engineer that gets talked about the least. It's not about knowing more, or being faster, or having better tools. It's about your willingness to sit in confusion without panicking.
              </p>

              <h3 className={styles.sectionTitle}>You don't need to be an expert. You need to be oriented.</h3>

              <p>
                One thing that's helped me enormously is deliberately building rough, working knowledge of every piece of technology in our stack. Not expertise. Just enough to have a sense of how the thing works and where to look when it breaks.
              </p>

              <p>
                Earlier this year, our LLM provider started intermittently failing - empty streams, throttling errors, sometimes just silence. I needed to build retry logic, but the errors weren't consistent. Some came back as HTTP 429s, some as stream-level exceptions, and some as connections that just produced nothing. Because I'd spent time understanding how the streaming protocol actually works - the binary event format, the way errors surface at different layers - I could classify which errors were worth retrying and which meant something was fundamentally wrong. In the process I discovered that the provider uses PascalCase error codes in some responses and camelCase in others. Maybe that's documented somewhere. I didn't find it.
              </p>

              <p>
                <strong>You don't need deep expertise to stay unstuck. You need orientation - a rough map that tells you which direction to walk.</strong> I try to build these maps intentionally. When I encounter something new, I spend an hour or two reading enough to explain it to a colleague. Sometimes I write it up. The goal is never mastery. The goal is to not be <em>completely</em> lost when something goes sideways.
              </p>

              <h3 className={styles.sectionTitle}>AI agents are the best research partner I've ever had</h3>

              <p>
                This is the part that feels genuinely new to me - the part that wouldn't have been possible even two years ago. When I get stuck on something outside my area of knowledge, the first thing I do now is throw an AI agent at it. Not to write my code - to <em>investigate</em>. I point it at an unfamiliar codebase, or a provider's SDK, or a wall of logs, and ask it a specific question. It comes back with something useful about a third of the time. That's an incredible hit rate when the alternative is spending hours reading source code I've never seen before, or firing off a support ticket and waiting a day.
              </p>

              <p>
                <strong>I treat AI agents like a colleague who's read everything but built nothing.</strong> They can scan an entire codebase in seconds and surface things I'd never have found by searching manually. But they also get things wrong constantly - confidently, convincingly wrong. So I never take the answer at face value. I use it as a starting point, then verify. Even when the agent is wrong, it usually narrows the search. It turns "I have no idea what's happening" into "I have two or three theories to test". That's the difference between being stuck and being in motion.
              </p>

              <h3 className={styles.sectionTitle}>Always have a second thing going</h3>

              <p>
                Whenever I can, I keep two workstreams active. One is the main thing - whatever has a deadline or a customer waiting. The other is something lower-stakes that I can pick up and put down without consequence. When the main thing stalls, I switch to the second thing.
              </p>

              <p>
                The important part is that the second thing is genuinely <em>lower-stakes</em>. I've made the mistake of running two urgent things in parallel, and it's awful. One of them is always frozen, and your founder can see it. <strong>The second workstream should be something you can drop the instant the main one unblocks.</strong> If you'd feel guilty dropping it, it's too important to be your backup task.
              </p>

              <h3 className={styles.sectionTitle}>Do the uncertain work first</h3>

              <p>
                When I start a new project - especially an agent pipeline - I now always begin with whatever part I'm least confident about. Usually that's the integration boundary: the place where my system talks to an external service or processes an unfamiliar data format.
              </p>

              <p>
                I used to do the opposite. I'd start with the parts I knew how to build, get some momentum, and leave the uncertain parts for later. This feels good in the short term. You're writing code, making progress, feeling productive. But it's a bad strategy, because you discover the hard problems <em>after</em> you've already committed to an architecture that might not accommodate them. Miserable on day two is much better than miserable on day twelve.
              </p>

              <h3 className={styles.sectionTitle}>Ask before you're drowning</h3>

              <p>
                For the first year of my career, I'd wait until I was completely stuck before asking anyone for help. I thought asking too early would make me look like I couldn't handle the work. I was wrong. <strong>Asking early, with specifics about what you've already tried, makes you look sharp, not helpless.</strong>
              </p>

              <p>
                "I'm stuck" is a bad message. "I've confirmed X, ruled out Y, and I think it might be Z but I can't find docs on it" is a useful message. Even if your CTO can't solve it directly, they might know something you don't. The trick is that your request for help should demonstrate that you've already done work. People - especially busy people at startups - are happy to give you the last 20% of the answer when you've clearly done the first 80% yourself.
              </p>

              <h3 className={styles.sectionTitle}>Final thoughts</h3>

              <p>
                None of this is about being brilliant. I'm not. I've been doing this for two years and I still get stuck regularly. The difference between now and when I started is that I stay stuck for less time. I'm quicker to recognise when fear is disguising itself as confusion. I'm better at knowing just enough about adjacent systems to form a theory. And I have an AI agent open in another window that can scan ten thousand lines of unfamiliar code before I've finished reading the README.
              </p>

              <p>
                Being unstoppable at a startup isn't about never hitting a wall. It's about what you do in the thirty seconds after you hit it. If you panic, you'll burn hours. If you freeze, you'll burn days. If you take a breath, figure out which part of the problem scares you most, and go poke at it - even without a plan - you'll be surprised how often the wall turns out to be thinner than it looked.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
