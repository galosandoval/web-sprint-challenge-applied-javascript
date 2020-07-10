// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker (articleObject) {
  const card = document.createElement('div')
  card.classList.add('card')

  const headline = document.createElement('div')
  headline.classList.add('headline')
  headline.textContent = articleObject.headline
  
  const author = document.createElement('div')
  author.classList.add('author')

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')

  const authorsImg = document.createElement('img')
  authorsImg.src = articleObject.authorPhoto

  const byAuthorsName = document.createElement('span')
  byAuthorsName.textContent = `By ${articleObject.authorName}`

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(authorsImg)
  author.appendChild(byAuthorsName)

  card.addEventListener('click', () => {
    console.log(articleObject.headline)
  })

  return card
}

// console.log(cardMaker())

const articleCardData = 'https://lambda-times-backend.herokuapp.com/articles'

const cardscontainer = document.querySelector('.cards-container')
// axios.get(articleCardData)
//   .then((res) => {
//     res.data.articles.bootstrap.forEach(element => {
//       cardscontainer.appendChild(cardMaker(element))
//     });
//   })
//   .catch((err) => {
//     console.log('oops', err)
//   })
// axios.get(articleCardData)
//   .then((res) => {
//     res.data.articles.javascript.forEach(element => {
//       cardscontainer.appendChild(cardMaker(element))
//     });
//   })
//   .catch((err) => {
//     console.log('oops', err)
//   })
// axios.get(articleCardData)
//   .then((res) => {
//     res.data.articles.jquery.forEach(element => {
//       cardscontainer.appendChild(cardMaker(element))
//     });
//   })
//   .catch((err) => {
//     console.log('oops', err)
//   })
// axios.get(articleCardData)
//   .then((res) => {
//     res.data.articles.node.forEach(element => {
//       cardscontainer.appendChild(cardMaker(element))
//     });
//   })
//   .catch((err) => {
//     console.log('oops', err)
//   })
// axios.get(articleCardData)
//   .then((res) => {
//     res.data.articles.technology.forEach(element => {
//       cardscontainer.appendChild(cardMaker(element))
//     });
//   })
//   .catch((err) => {
//     console.log('oops', err)
//   })

axios.get(articleCardData)
  .then((res) => {
    for(let i in res.data.articles){
      res.data.articles[i].forEach(element => {
       cardscontainer.appendChild(cardMaker(element))            
    });
  }  
  })
  .catch((err) => {
    console.log('oops', err)
  })