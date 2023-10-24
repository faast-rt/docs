import { useRouter } from 'next/router';
import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
  logo: <strong>Faast</strong>,
  docsRepositoryBase: 'https://github.com/faast-rt/docs/tree/main/',
  project: {
    link: 'https://github.com/faast-rt',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const domain = 'faast-rt.com';
    const url =
      'https://faast-rt.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={frontMatter.title || 'Faast - A Serverless runtime in Rust'}
        />
        <meta
          property="og:description"
          content={frontMatter.description || 'A Serverless runtime in Rust'}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta
          name="twitter:title"
          content={frontMatter.title || 'Faast - A Serverless runtime in Rust'}
        />
        <meta
          name="twitter:description"
          content={frontMatter.description || 'A Serverless runtime in Rust'}
        />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Faast',
      };
    }
  },
  banner: {
    key: '1.0-release-in-progress',
    text: (
      <p>
        ⚠️ This website is still in construction, you may find incorrect
        information.
      </p>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <div className="flex flex-col">
        <span>Apache-2.0 {new Date().getFullYear()} © Faast.</span>
        <a href="https://www.netlify.com">
          {' '}
          <img
            src="https://www.netlify.com/v3/img/components/netlify-dark.svg"
            alt="Deploys by Netlify"
          />{' '}
        </a>
      </div>
    ),
  },
};

export default config;
