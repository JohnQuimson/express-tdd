const { test, expect } = require('@jest/globals');
const { createSlug } = require('./createSlug.js');

const posts = [
  { title: 'Ciambellone', slug: 'ciambellone' },
  { title: 'Cracker alla barbabietola', slug: 'cracker-alla-barbabietola' },
  { title: 'CiaMBellone', slug: 'ciambellone-1' },
];

// stringa
test('createSlug dovrebbe ritornare una stringa', () => {
  const slug = createSlug('titolo', posts);
  expect(typeof slug).toBe('string');
});

// stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
  const slug = createSlug('Titolo Con Lettere Maiuscole', posts);
  expect(slug).toBe('titolo-con-lettere-maiuscole');
});

// spazi replaced con -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
  const slug = createSlug('Titolo Con Spazi', posts);
  expect(slug).toBe('titolo-con-spazi');
});

// unique slug
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
  const slug = createSlug('Ciambellone', posts);
  expect(slug).toBe('ciambellone-2');
});

// no titolo || formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
  expect(() => createSlug('', posts)).toThrow('Titolo non presente');
  expect(() => createSlug(123, posts)).toThrow('Formato titolo errato');
});

// no array posts
test("createSlug dovrebbe lanciare un errore se manca l'array dei post", () => {
  expect(() => createSlug('titolo')).toThrow('Array dei post mancante');
  expect(() => createSlug('titolo', '')).toThrow('Array dei post mancante');
});
