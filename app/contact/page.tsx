'use client';

import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';


export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [status, setStatus] = useState('idle');


 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  setStatus('submitting');

  const token = await recaptchaRef.current?.executeAsync();
if (!token) {
  setStatus('error');
  return;
}

  const formData = new FormData(form);

const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    token, // send to backend for verification
  }),
});

  if (res.ok) {
    setStatus('success');
    form.reset();
  } else {
    setStatus('error');
  }
};

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border-1 mt-6">
      <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
      <p className="text-gray-600 mb-6">
        My inbox is always open. You can also reach me directly at{' '}
            <a href="mailto:mrvyde@gmail.com" className="text-orange-400 underline">
                mrvyde@gmail.com
            </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
            Name<span className="text-gray-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
            Email<span className="text-pink-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
            Message<span className="text-pink-600">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            size="invisible"
            ref={recaptchaRef}
        />

        <button
          type="submit"
          className="bg-orange-300 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Send
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-2">Thanks! Your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2">Oops! Something went wrong. Please try again.</p>
        )}
      </form>

      <p className="text-xs text-gray-500 mt-6">
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </div>
  );
}