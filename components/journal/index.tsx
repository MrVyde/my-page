'use client';
import { useState } from 'react';

type JournalCardProps = {
  title: string;
  image: string;
  preview: string;
  readTime: number;
};


function JournalCard({ title, image, preview, readTime }: JournalCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-2xl mx-auto mb-10">
         {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="pt-2 p-6">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{preview}</p>

        {expanded && (
          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold mb-2">Why It Hits Tech Workers Hard</h3>
              <p>
                In tech, we pride ourselves on productivity, iteration, and optimization. But the same culture that celebrates hustle can make it hard to recognize when we’re just... stuck. We normalize context-switching, glorify multitasking, and treat flow state like a luxury instead of a necessity.
              </p>
              <p>
                But flow — that immersive, focused state where time disappears — is one of the best antidotes to languishing. And it’s hard to find when your day is broken into 15-minute blocks and your brain is juggling Jira tickets, Slack pings, and code reviews.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Debugging the Feeling</h3>
              <p>So how do you start to feel like yourself again?</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Single-thread your brain:</strong> Carve out uninterrupted time. Turn off notifications. Close the tabs. Let your mind go deep.
                </li>
                <li>
                  <strong>Push a small commit:</strong> Set tiny, achievable goals. Not everything has to be a moonshot. Sometimes, fixing a linter warning is enough.
                </li>
                <li>
                  <strong>Refactor your routine:</strong> Reclaim your mornings. Take real breaks. Step away from the screen. Go analog for a bit.
                </li>
                <li>
                  <strong>Talk to your team:</strong> You’re not the only one feeling this way. Normalize the conversation. Vulnerability is a feature, not a bug.
                </li>
                <li>
                  <strong>Seek support:</strong> If languishing lingers, therapy or coaching can help you reboot. There’s no shame in needing a patch.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">You’re Not Alone</h3>
              <p>
                Languishing doesn’t mean you’re broken. It means you’re human. And in a world that’s always online, always optimizing, always shipping — it’s okay to pause.
              </p>
              <p>
                You don’t have to be in crisis to need care. Sometimes, you just need to defrag your mental hard drive.
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-blue-600 hover:underline focus:outline-none"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
        <div className="text-sm text-gray-500 mt-4">{readTime} min read</div>
      </div>
    </div>
  );
}

export default function JournalEntry() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-10 px-4 flex flex-col items-center">
      <JournalCard
        title="Stuck in Standby: The Silent Struggle Behind the Screen"
        image="journal/overwhelmed.jpeg"
        preview="You feel different lately. You're not burned out, and you're not depressed — but you're not okay either. In the tech world, this feeling often goes unnamed. But it has a name: languishing..."
        readTime={5}
      />
    </div>
  );
}