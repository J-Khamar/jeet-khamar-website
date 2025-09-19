import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Prevent any transitions during initial load
                var css = document.createElement('style');
                css.innerHTML = '*, *::before, *::after { transition: none !important; animation-duration: 0s !important; }';
                document.head.appendChild(css);
                
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = savedTheme || systemTheme;
                  document.documentElement.setAttribute('data-theme', theme);
                  
                  // Apply theme styles immediately for critical elements
                  if (theme === 'dark') {
                    document.documentElement.style.setProperty('--bg-color', '#000000');
                    document.documentElement.style.setProperty('--text-color', '#e5e7eb');
                  } else {
                    document.documentElement.style.setProperty('--bg-color', '#faf9f6');
                    document.documentElement.style.setProperty('--text-color', '#2a2a2a');
                  }
                } catch (e) {
                  // Fallback to system preference if localStorage fails
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.style.setProperty('--bg-color', '#000000');
                    document.documentElement.style.setProperty('--text-color', '#e5e7eb');
                  }
                }
                
                // Re-enable transitions after a brief delay
                setTimeout(function() {
                  css.remove();
                }, 100);
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
