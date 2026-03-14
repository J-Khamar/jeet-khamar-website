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
                I've spent the last two years building AI agents and backend infrastructure at a startup. I'm not a ten-year veteran. But I've noticed something in that time: the engineers around me who deliver consistently aren't necessarily the most talented. They're the ones who handle confusion well. When they hit a wall - AWS Bedrock returning cryptic stream errors because the SDK uses camelCase error codes in some regions and PascalCase in others, or Claude returning <code>tool_use</code> blocks with null content that crash the message pipeline, or the product scope shifting overnight so half the orchestration logic needs rethinking (all three of these have happened to me in the last few months) - they don't freeze. They find a way to keep going.
              </p>

              <p>
                This post is about how I've tried to become that kind of engineer. It's partly about habits, partly about how I think through fear, and partly about how AI tools have changed what "stuck" even means.
              </p>

              <h3 className={styles.sectionTitle}>Startup walls are different from big-company walls</h3>

              <p>
                In a large company, what stops you is usually <em>people</em>. A review queue. An approval chain. Some platform team that owns the thing you need changed. The way you get past those obstacles is social: knowing the right person, having your manager lean on their manager, working around the bottleneck entirely.
              </p>

              <p>
                At a startup, what stops you is usually <em>your own knowledge</em>. There is no platform team. You are the platform team, the data team, and half the frontend team. Your obstacles tend to look like this: you need to stream LLM responses to the client via SSE, but your compression middleware is silently buffering the stream and nothing comes through until the whole response is done. Your ECS deploy script isn't pausing Kafka consumers before replacing containers, so in-flight research jobs are getting dropped mid-execution - and you've never written a deploy script before. Multiple Kafka consumers are processing task status events at the same time, and they're overwriting each other's updates to the same chat message, but only under load. The document parsing service you depend on (LlamaParse) times out intermittently, and nobody on the team has dug into its polling API to understand why.
              </p>

              <p>
                What all of these have in common is that <strong>the obstacle is a gap in what you know, not a person standing in your way.</strong> In a big company, you'd go find the expert. At a startup, you have to <em>become</em> the expert, at least enough to get past the problem.
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
                For instance, I know at a high level how Kafka consumer groups rebalance partitions. I couldn't implement a consumer from scratch. But when research jobs started getting processed twice after a deploy, I could reason about whether it was a rebalancing issue or a duplicate-publish issue. That distinction saved me a day, because it pointed me straight to the deploy script - we weren't pausing consumers before swapping containers, so messages were being re-delivered during the rebalance.
              </p>

              <p>
                Likewise, I know roughly how AWS Bedrock streams responses via its EventStream binary protocol - enough that when our Claude streaming broke in a specific region, I had an instinct that it was an error-code format issue rather than a networking problem. I know roughly how Redis Streams differ from Kafka topics - enough that when we migrated our event system from one to the other, I could anticipate where the semantics wouldn't map cleanly.
              </p>

              <p>
                <strong>You don't need deep expertise to stay unstuck. You need orientation - a rough map that tells you which direction to walk.</strong> I try to build these maps intentionally. When I encounter something new - a new LLM provider's streaming protocol, an AWS service I haven't used, a Go concurrency pattern I'm unfamiliar with - I spend an hour or two reading enough to explain it to a colleague. Sometimes I write it up. That's usually sufficient. The goal is never mastery. The goal is to not be <em>completely</em> lost when something goes sideways.
              </p>

              <h3 className={styles.sectionTitle}>AI agents are the best research partner I've ever had</h3>

              <p>
                This is the part that feels genuinely new to me - the part that wouldn't have been possible even two years ago. When I get stuck on something outside my area of knowledge, the first thing I do now is throw an AI agent at it.
              </p>

              <p>
                Here's a specific example. We were building an agentic report-editing loop - a long-running SSE stream where Claude makes tool calls to search-and-replace sections of a research report. The agent kept crashing when Bedrock returned <code>tool_use</code> blocks with null content. My first instinct was that we were constructing the message history wrong. I spent an hour staring at the message conversion code. Instead, I pointed an AI agent at our Bedrock adapter and the Anthropic API docs and asked "under what conditions does Claude return a tool_use block with null content?" It came back with the answer in minutes: when the model's response is truncated due to max tokens, the final tool_use block can be incomplete. The fix was a three-line nil check in the message converter. Total time stuck: twenty minutes, instead of what could have been half a day of guessing.
              </p>

              <p>
                I do this all the time now. Bedrock streaming errors in a specific AWS region? I ask the agent to compare the error code formats across SDK versions - that's how I found the camelCase-vs-PascalCase bug that AWS themselves have <a href="https://github.com/aws/aws-sdk-java-v2/issues/6575" target="_blank" rel="noopener noreferrer" className={styles.link}>documented as a known issue</a>. Kafka consumers mysteriously reprocessing messages? I describe the deployment sequence and ask the agent what could cause a rebalance. Authorization headers not being extracted correctly? I've been through three rounds of that one - different header keys, different casing conventions - and each time the agent helped me narrow it down faster than I would have by reading middleware code line by line.
              </p>

              <p>
                <strong>I treat AI agents like a colleague who's read everything but built nothing.</strong> They can scan an entire codebase in seconds and surface things I'd never have found by searching manually. But they also get things wrong constantly - confidently, convincingly wrong. So I never take the answer at face value. I use it as a starting point, then verify. Even when the agent is wrong, though, it usually narrows the search. It turns "I have no idea what's happening" into "I have two or three theories to test". That's the difference between being stuck and being in motion.
              </p>

              <h3 className={styles.sectionTitle}>Always have a second thing going</h3>

              <p>
                Whenever I can, I keep two workstreams active. One is the main thing - whatever has a deadline or a customer waiting. The other is something lower-stakes: wiring up Prometheus metrics, improving structured logging, building out Grafana dashboards, or hardening error handling across the agent pipeline. When the main thing stalls - maybe I'm waiting for an AWS IAM policy change, or the CTO needs to decide whether we're cutting a feature - I switch to the second thing.
              </p>

              <p>
                The important part is that the second thing is genuinely <em>lower-stakes</em>. I've made the mistake of running two customer-facing features in parallel, and it's awful. One of them is always frozen, and your founder can see it. <strong>The second workstream should be something you can drop the instant the main one unblocks.</strong> If you'd feel guilty dropping it, it's too important to be your backup task.
              </p>

              <p>
                At a startup this is easier than it sounds, because the list of useful-but-not-urgent work is infinite. There's always a NoOp adapter to replace with a real implementation, a Slack notification to wire up for a failure mode nobody's monitoring, a context propagation bug where <code>job_id</code> isn't threading through to async paths. I keep a running list of these in my notes and pull from it whenever I'm waiting on something.
              </p>

              <h3 className={styles.sectionTitle}>Do the uncertain work first</h3>

              <p>
                When I start a new project - especially an agent pipeline - I now always begin with whatever part I'm least confident about. Usually that's the integration boundary: the place where my system talks to an external service or processes an unfamiliar data format. The Exa search API, the LlamaParse document pipeline, the Bedrock streaming protocol - these are the places where things go wrong.
              </p>

              <p>
                I used to do the opposite. I'd start with the parts I knew how to build, get some momentum, and leave the uncertain parts for later. This feels good in the short term. You're writing code, making progress, feeling productive. But it's a bad strategy, because you discover the hard problems <em>after</em> you've already committed to an architecture that might not accommodate them. The first few days of a project feel miserable when you work this way - you're wrestling with the hardest part and have nothing to show for it - but miserable on day two is much better than miserable on day twelve.
              </p>

              <p>
                Now I force myself to prototype the scariest integration on day one. When we built the deep research pipeline - a multi-agent system where a controller delegates to research and business intelligence sub-agents, each with their own web search tools - I didn't start with the orchestration logic. I started by getting a single Exa search query working end-to-end, from the agent's tool call through to parsed results. It was ugly. But it confirmed the integration was viable before I'd written a thousand lines of orchestration code around it.
              </p>

              <h3 className={styles.sectionTitle}>Ask before you're drowning</h3>

              <p>
                For the first year of my career, I'd wait until I was completely stuck before asking anyone for help. I thought asking too early would make me look like I couldn't handle the work. I was wrong. <strong>Asking early, with specifics about what you've already tried, makes you look sharp, not helpless.</strong>
              </p>

              <p>
                "I'm stuck" is a bad message. "Bedrock is returning empty streams intermittently in us-east-1, I've confirmed it's not a timeout on our side, and I think it might be related to the SigV4 signing on long-running requests but I can't find anything in the AWS docs" is a useful message. Even if your CTO can't solve it, they might know something you don't - maybe they've seen a similar issue with another AWS service, or they can escalate to your AWS support contact.
              </p>

              <p>
                The trick is that your request for help should demonstrate that you've already done work. People - especially busy people at startups - are happy to give you the last 20% of the answer when you've clearly done the first 80% of the digging yourself.
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
