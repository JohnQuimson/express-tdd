<h1 align="center">
  
 express-tdd
  
</h1>

<!-- <h4 align="center">summary <a href="http://electron.atom.io" target="_blank">"link"</a>.</h4> -->

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p> -->

<p align="center">
  <a href="#description">Description</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#used-technologies">Used technologies</a> 
</p>

![screenshot](https://raw.githubusercontent.com/gist/mahmudinm/47588cab5af928d2c8a2976d90216ea7/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif)

## Description

Impariamo a ragionare in ottica TDD e a scrivere i nostri Unit Tests.

- Creiamo i test per la nostra funzione createSlug che crea gli slug dei nostri post ricevendo come argomento:

  - il titolo da convertire
  - la lista di tutti i post.

- Eseguiamo i seguenti test:
  - createSlug dovrebbe ritornare una stringa
  - createSlug dovrebbe ritornare una stringa in lowercase
  - createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
  - createSlug dovrebbe incrementare di 1 lo slug quando esiste già
  - createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
  - createSlug dovrebbe lanciare un errore se manca l'array dei post

Lavoriamo in ottica TDD, quindi prima scriviamo il singolo test, e dopo scriviamo il codice necessario per far superare il nostro test.

### Bonus

Creiamo una classe Model la quale dovrà superare i seguenti test:

- Model dovrebbe essere una classe (crea un'istanza della classe Model)
- L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza
- L'istanza di model dovrebbe avere il metodo read
- L'istanza di model dovrebbe avere il metodo add
- read dovrebbe ritornare un array
- add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
 git clone ('link of the repository')

# Go into the repository
 cd ('file name')

# Install dependencies
 npm install

# Run the app
 npm run dev
```

## Used technologies

This software uses the following technologies:

- [Node.js](https://)
- [Express](https://)

> GitHub [@JohnQuimson](https://github.com/JohnQuimson) &nbsp;&middot;&nbsp;
> Twitter [@John Henric Quimson](https://www.linkedin.com/in/john-henric-quimson-973827280/)
