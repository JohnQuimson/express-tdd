const createSlug = (title, posts) => {
  // controllo no titolo
  if (!title) {
    throw new Error('Titolo non presente');
  }

  // controllo titolo stringa
  if (typeof title !== 'string') {
    throw new Error('Formato titolo errato');
  }

  // controllo presenza array
  if (!Array.isArray(posts)) {
    throw new Error('Array dei post mancante');
  }

  // creo lo slug dal titolo -> minuscolo e replace spazi con -
  let slug = title.toLowerCase().replaceAll(' ', '-');

  // controllo presenza doppio slug
  const existingSlugs = posts.map((post) => post.slug);
  if (!existingSlugs.includes(slug)) {
    return slug;
  }

  // counter per rendere unico lo slug se è già presente
  let i = 1;
  while (existingSlugs.includes(`${slug}-${i}`)) {
    i++;
  }
  return `${slug}-${i}`;
};

module.exports = { createSlug };
