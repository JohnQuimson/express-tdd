const { test, expect } = require('@jest/globals');
// const { createSlug } = require('./createSlug.js');

const posts = [
  { title: 'Ciambellone', slug: 'ciambellone' },
  { title: 'Cracker alla barbabietola', slug: 'cracker-alla-barbabietola' },
  { title: 'Pane fritto dolce', slug: 'pane-fritto-dolce' },
];

const createSlug = (title, posts) => {
  if (!title) {
    throw new Error('Titolo non presente');
  }

  if (typeof title !== 'string') {
    throw new Error('Formato titolo errato');
  }

  if (!Array.isArray(posts)) {
    throw new Error('Array dei post mancante');
  }

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
  return `${slug}-${i}`;
};

module.exports = { createSlug };

// stringa
test('createSlug dovrebbe ritornare una stringa', () => {
  const slug = createSlug('titolo', posts);
  expect(typeof slug).toBe('string');
});

// stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
  const slug = createSlug('titolo', posts);
  expect(slug).toBe(slug.toLowerCase());
});

// spazi replaced con -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
  const slug = createSlug('titolo', posts);
  expect(slug).toBe(slug.toLowerCase());
});

// unique slug
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
  const slug = createSlug('Ciambellone', posts);
  expect(slug).toBe('ciambellone-1');
});

// no titolo || formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
  expect(() => createSlug('', posts)).toThrow('Titolo non presente');
  expect(() => createSlug(123, posts)).toThrow('Formato titolo errato');
});
