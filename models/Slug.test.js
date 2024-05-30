const { test, expect } = require('@jest/globals');
// const { createSlug } = require('./createSlug.js');

const posts = [
  { title: 'Ciambellone', slug: 'ciambellone' },
  { title: 'Cracker alla barbabietola', slug: 'cracker-alla-barbabietola' },
  { title: 'Pane fritto dolce', slug: 'pane-fritto-dolce' },
];

const createSlug = (title, posts) => {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const existingSlugs = posts.map((post) => post.slug);
  if (!existingSlugs.includes(slug)) {
    return slug;
  }
  // counter per rendere unico lo slug se è già presente
  let i = 1;
  while (existingSlugs.includes(slug + '-' + i)) {
    i++;
  }
  return slug + '-' + i;
};

test('createSlug dovrebbe ritornare una stringa', () => {
  const slug = createSlug('titolo', posts);
  expect(typeof slug).toBe('string');
});

test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
  const slug = createSlug('titolo', posts);
  expect(slug).toBe(slug.toLowerCase());
});
