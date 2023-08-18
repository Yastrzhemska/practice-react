import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// const book = {
//   id: "642fd89ac8cf5ee957f12361",
//   author: "Barbara O'Connor",
//   book_image: "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
//   book_image_width: 330,
//   book_image_height: 485,
//   title: "WISH",
//   price: 500,
//   quantity: 10,
// };

// const item = (
//   <div>
//     <img src="{book.book_image}" alt="{book.title}" />
//     <h2>{book.title}</h2>
//     <p>{book.author}</p>
//     <p>Price: {book.price}</p>
//     <p>Accessibility: {book.quantity}</p>
//     <button>Order</button>
// </div>
// )

// console.log(item)

// ReactDOM.render(item, document.querySelector('#root'));