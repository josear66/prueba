import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import {books} from './books'
import Book from './book'

const BookList = () => {
  return (
    <>
      <h1>Amazon best sellers </h1>
      <section className='bookList'>
        {books.map((book, index) => {
          return <Book {...book} key = {book.id} number = {index} />
        })}
      </section>
    </>
    
  )
}

// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input 
//           type="text"
//           name='exanple' 
//           onChange={(e) => console.log(e.target.value)}
//           style={{margin:'1rem 0'}} />
//         <button type="submit">submit</button>
//         <div>
//           <button type='button' onClick={() => console.log('Click me')}>Click me</button>
//         </div>
//       </form>
//     </section>
//   );
// }

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <BookList />
)