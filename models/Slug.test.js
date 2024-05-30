// importazione non necessaria, ma usata per intellisense
const { test, expect } = require('@jest/globals');
const fs = require('fs');
const path = require('path');

const getSlug = () => {
  const filePath = path.resolve(__dirname, '../db/posts.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileContent);
  return posts.map((post) => post.slug);
};

const createSlug = (string) => {
  const array = getSlug();
  let originalSlug = string.toLowerCase().replaceAll(' ', '-');
  let newSlug = originalSlug;
  // counter per garantire l'unicità dello slug
  let counter = 1;
  while (array.includes(newSlug)) {
    newSlug = `${originalSlug}-${counter}`;
    counter++;
  }
  return newSlug;
};

// return stringa
test('createSlug dovrebbe ritornare una stringa', () => {
  const slug = createSlug('titolo di esempio');
  expect(typeof slug).toBe('string');
});
