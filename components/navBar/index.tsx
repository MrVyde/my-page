'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Upload } from 'lucide-react';



const navItems = [
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Journal', href: '/journal' },
  
];

const shareOptions = [
    { label: 'Copy link', action: () => navigator.clipboard.writeText(window.location.href) },
    { label: 'Send a mail', action: () => window.location.href = '/contact' },
    { label: 'Download Resume', action: () => window.open('/pdf/resume.pdf', '_blank') },
    { label: 'GitHub', action: () => window.open('https://github.com/MrVyde', '_blank') },
    { label: 'LinkedIn', action: () => window.open('https://linkedin.com/in/david-adebisi-35655526a', '_blank') },
  ];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  

  return (
    <header>
      {/* Top Row: Name + Icons + CTA */}
      <div className="flex items-center justify-between px-2 md:px-6 py-4 border-b border-transparent md:border-zinc-200 dark:md:border-zinc-300">
        <div className="w-full flex justify-start md:justify-center relative">
          <div className="text-xl md:text-3xl font-bold text-left md:text-center">
            MrVyde
          </div>

          <div className="absolute right-0 flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-gray-600"
              >
                <Upload size={20} />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <ul className="divide-y divide-gray-100">
                    {shareOptions.map((option, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => {
                            option.action();
                            setOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <a
              href="mailto:mrvyde@gmail.com"
              className="bg-orange-500 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-orange-600 transition"
            >
              Let’s work
            </a>
          </div>
        </div>
      </div>



      {/* Navigation Links */}
      <nav className="flex justify-start md:justify-center gap-2 items-end  h-11 border-b border-gray-900 dark:border-zinc-300">
            {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                <div
                    key={label}
                    className="relative px-1 md:px-4  py-3 md:hover:bg-gray-200 md:dark:hover:bg-gray-700 transition rounded-sm h-full flex items-end"
                >
                    <Link
                    href={href}
                    className={`text-sm font-medium transition ${
                        isActive
                        ? 'text-gray-900'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-gray-900 dark:hover:text-black'
                    }`}
                    >
                    {label}
                    </Link>
                    {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900" />
                    )}
                </div>
                );
            })}
    </nav>
    </header>
  );
}