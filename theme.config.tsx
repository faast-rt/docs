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
};

export default config;
