import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Page.module.css';

export default function WritingCodeIsTheEasiestThing() {
  return (
    <>
      <Head>
        <title>Writing Code Is the Easiest Thing an Agent Can Do - Jeet Khamar</title>
        <meta name="description" content="Code is where agents feel at home. The real frontier isn't software engineers - it's the domain experts who always had the knowledge but never had the abstraction layer." />
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
            <h2 className={styles.pageTitle}>Writing Code Is the Easiest Thing an Agent Can Do</h2>
            <p className={styles.date}>May 4, 2026 • 8 min read</p>
            
            <div className={styles.articleContent}>
              <p>
                Writing code is the easiest thing an AI agent can do. I don&apos;t mean that dismissively - I mean it structurally. Code is the one domain where agents have instant feedback, deterministic verification, more training data than they could ever need, and a toolset so small it fits on a sticky note. Every other kind of knowledge work is harder for agents than writing code, and I think understanding <em>why</em> tells you something important about where things are going.
              </p>

              <p>
                This isn&apos;t another post about whether AI will replace software engineers. I find that conversation boring at this point. What I&apos;m interested in is the people who were never in the software engineering domain to begin with - the doctors, the accountants, the ops managers - and why <em>they</em> are the real frontier of what agents can do.
              </p>

              <p>
                For sixty years, code was the bottleneck. The person who understood the problem couldn&apos;t express it directly to a machine - they had to go through a programmer, and context always leaked in the handoff. Now that translation layer is the part agents handle best, and the bottleneck has moved to the other side entirely.
              </p>

              <h3 className={styles.sectionTitle}>Code has a compiler. Nothing else does.</h3>

              <p>
                The reason agents are so good at code isn&apos;t that code is simple. Anyone who&apos;s debugged a distributed system knows it isn&apos;t. It&apos;s that code gives you something almost no other kind of professional work does: a way to check whether you got it right, instantly, without asking a human. You write code, you run it, and the compiler tells you if it&apos;s wrong. The test suite tells you if the logic is broken. The linter tells you if you&apos;ve drifted from convention. The agent gets unambiguous, binary feedback in seconds, and it can use that feedback to iterate toward a correct solution without anyone in the loop. That&apos;s the property that makes everything else possible.
              </p>

              <p>
                In my experience, this is the thing people underestimate most when they talk about AI and code. It&apos;s not that models are particularly brilliant at programming. It&apos;s that programming happens to be the one domain where a model&apos;s tendency to be wrong on the first try doesn&apos;t matter much, because there&apos;s a fast, cheap, automated way to catch the errors and try again. An agent writing code is in a tight loop: generate, run, read the error, fix, repeat. Each pass actually converges instead of drifting. And the whole cycle takes seconds.
              </p>

              <p>
                There&apos;s no equivalent for this in law, or medicine, or sales, or operations. An agent can write a legal brief that reads well and is completely wrong about precedent, and there&apos;s no automated check that catches it - you find out when a human expert reads it, or worse, when a judge does months later. There&apos;s no &quot;run&quot; button for a marketing strategy. There&apos;s no test suite for a project plan. In those domains, checking whether the output is correct requires exactly the kind of expensive human judgment you were trying to get around in the first place.
              </p>

              <p>
                On top of that, software is the best-documented professional field on earth. The entire collective knowledge of the discipline - hundreds of millions of public repositories, decades of Q&amp;A, design patterns with names and documented trade-offs - was put online over thirty years. Models have trained on all of it. Compare that to law, where the good research is behind paywalls, or finance, where the useful models are proprietary, or medicine, where clinical notes are (rightly) confidential. And on top of <em>that</em>, the people building these models are programmers themselves - they use the models to write the code that improves the models, which is a loop no other domain gets.
              </p>

              <p>
                The numbers bear this out. Real-world coding tasks went from a 4% agent solve rate in 2023 to roughly 50-75% by 2025, and most of that gain came from better scaffolding around the models rather than the models themselves getting dramatically smarter. The domain just happened to have every property agents need to work autonomously.
              </p>

              <h3 className={styles.sectionTitle}>The abstraction that was always missing</h3>

              <p>
                Here&apos;s what I think is actually interesting about this, and it&apos;s not the thing most people focus on. The conversation about what this means for programmers has been done to death. What I find more interesting is what it means for everyone who <em>isn&apos;t</em> a programmer but always had the knowledge that actually mattered.
              </p>

              <p>
                Every major jump in computing has done the same thing: it killed a layer of complexity so humans could work closer to the problem they actually care about. Punchcards to assembly. Assembly to C. C to Python. Each time, the previous layer didn&apos;t go away - it just became infrastructure, invisible to the person building on top of it. What&apos;s happening now is the same pattern, one level up. The jump isn&apos;t from Python to some better programming language. It&apos;s from code to intent - you express what you want in the language of your domain, and the agent handles the translation into code.
              </p>

              <p>
                I think about this from the perspective of every non-technical person I&apos;ve worked with who had deep domain knowledge and couldn&apos;t get it into software without losing half of it in the handoff. The accountant who knows exactly how invoice chasing should work, what the compliance edge cases are, which exceptions the current system misses - she always had the most important input. She just couldn&apos;t hand it directly to a computer. She had to go through a programmer who&apos;d approximate her knowledge, and the approximation was always lossy. Now she can describe what she needs to an agent, and the agent writes the code. Her expertise flows through without an interpreter in the middle.
              </p>

              <p>
                Boris Cherny, who leads Claude Code at Anthropic, mentioned something on a podcast that stuck with me. One of the most effective people on his team has been shipping a production Go service for a month without really knowing Go. The code is correct, it runs well, and the human&apos;s job is deciding what to build and whether the result is right - not writing the syntax. On the same team, the PM builds features, the designer builds features, the finance person builds features. Not because they learned to code, but because the thing that separated &quot;technical&quot; from &quot;non-technical&quot; was always the code, and the code is now the agent&apos;s job.
              </p>

              <p>
                This isn&apos;t no-code. I&apos;ve used no-code tools, and the problem with them is that they constrain you to whatever the platform builder anticipated. What&apos;s happening here is different - the agent is flexible in the way a human programmer is, but it&apos;s faster and it doesn&apos;t get tired. You describe the behaviour you want, the constraints it should respect, the outcomes you expect, and the agent figures out how to make it happen. <strong>The scarce input is no longer &quot;someone who can code&quot; - it&apos;s &quot;someone who deeply understands the problem.&quot;</strong> That was always the more valuable thing. It just didn&apos;t used to be sufficient on its own.
              </p>

              <h3 className={styles.sectionTitle}>The gap is real, but it&apos;s closing fast</h3>

              <p>
                If code is the easy part for agents because it has compilers and tests and instant feedback, the obvious question is: what about everything else? And the honest answer is that there&apos;s still a real gap.
              </p>

              <p>
                The reason agents can&apos;t do for law or medicine or enterprise operations what they can do for code comes down to the same property that makes code easy: those fields don&apos;t have a &quot;run&quot; button. There&apos;s no way for an agent to try something, check instantly whether it worked, and iterate without a human evaluating each attempt. In code, the compiler is the oracle. In law, the oracle is a judge, and you wait months. In medicine, the oracle is the patient&apos;s outcome, and you might wait years. In enterprise operations, &quot;correct&quot; involves regulations, audits, contracts, and processes that run across teams and time zones with exceptions that are the real work, not edge cases.
              </p>

              <p>
                However, the thing I keep noticing is how quickly parts of this gap are closing. Financial compliance and fraud detection already run in tight automated loops - flag, investigate, resolve - with humans overseeing rather than doing each step. Medical imaging is getting to the point where an agent can check its own work because the output is visual and verifiable against known patterns. Infrastructure and deployment are already nearly as automated as writing code, because they have the same structural properties (deterministic, scriptable, testable). In each case, someone built a way to check the agent&apos;s output fast and cheaply, and once that existed, the same code-like pattern kicked in: agents iterate, humans provide context and judgment.
              </p>

              <p>
                I think this is the real frontier for AI, and it&apos;s not getting enough attention. <strong>The hard problem isn&apos;t making code generation better - it&apos;s giving other domains the same structural advantages that code has always had.</strong> That means building verification systems for fields where &quot;correct&quot; has always been a slow, expensive, human-dependent judgment call. Some of these are years away. Some are closer than people think. The sequence is predictable even if the exact timing isn&apos;t: the closer a field gets to having its own version of &quot;try it, check it, iterate,&quot; the faster agents will take over the mechanical parts of the work there too.
              </p>

              <p>
                Of course, there&apos;s a deeper question underneath this: whether every domain <em>can</em> be made verifiable in the first place. Code has a compiler because code is formal - rigid syntax, defined semantics, a machine that evaluates it against a spec. That&apos;s a property of the domain, not something anyone invented. It&apos;s not obvious you can build an equivalent for whether a piece of legal advice is sound, or whether a therapist&apos;s response was appropriate, or whether a product strategy is good. Some kinds of &quot;correct&quot; might be inherently resistant to automated checking - not because we haven&apos;t built the tooling, but because the judgment is genuinely subjective and can&apos;t be reduced to pass or fail. I don&apos;t have a clean answer to this. It&apos;s possible that a large chunk of knowledge work sits permanently on the wrong side of a line that code happens to be on the right side of. It&apos;s also possible we&apos;ll find clever proxies that get us most of the way there. But it&apos;s worth being honest that &quot;build compilers for everything&quot; is a harder problem than it sounds, because some things might not compile.
              </p>

              <p>
                In my experience, the people making the most progress on this don&apos;t work at AI labs. They work in healthcare, finance, legal tech, logistics, and manufacturing, because they&apos;re the ones who understand what &quot;correct&quot; means in their specific domain. Which is the whole point of this post: domain expertise is becoming the primary input for agents everywhere, not just in software. The people who always had the knowledge but never had the right abstraction layer are the ones this moment is really for. Code was the middleman, and the middleman&apos;s job turned out to be the easiest thing an agent can do.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
