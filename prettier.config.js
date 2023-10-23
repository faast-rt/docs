module.exports = {
  semi: true,
  singleQuote: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-pkg',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
  proseWrap: 'always', // printWidth line breaks in md/mdx
};
