declare module 'react-google-recaptcha' {
  import * as React from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    size?: 'invisible' | 'compact' | 'normal';
    theme?: 'light' | 'dark';
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    tabindex?: number;
    hl?: string;
    isolated?: boolean;
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    execute(): void;
    executeAsync(): Promise<string>;
    reset(): void;
    getValue(): string | null;
  }
}