import React, { useState, useEffect } from 'react'; // update
import { db } from 'fbase'; // add
import fishThumb from '../fish.png';

const BookList = () => {
  const [books, setBooks] = useState([]); // update

  // add
  useEffect(() => {
    console.log('effect');
    const unsub = db.collection('mateusz_atopech').onSnapshot(snapshot => {
      const allBooks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooks(allBooks);
    });
    return () => {
      console.log('cleanup');
      unsub();
    };
  }, []);

  // add
  const deleteBook = id => {
    db.collection('books')
      .doc(id)
      .delete();
  };

  return (
    <div className='section section-books'>
      <div className='container'>
        <h5>Historia pomiarów</h5>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <div className='card book'>
                <div className='book-image'>
                  <img src={fishThumb} alt='book thumb' />
                </div>
                <div className='book-details'>
                  <div className='book-title'>Data pomiaru: {book.datetime}</div>
                  <div className='book-author'>Czujnik krańcowy #1: {book.EdgeSensor1}</div>
                  <div className='book-year'>Czujnik krańcowy #2: {book.EdgeSensor2}</div>
                  <div className='book-year'>Poziom cieczy #1: {book.FluidLevel1}</div>
                  <div className='book-year'>Poziom cieczy #2: {book.FluidLevel2}</div>
                  <div className='book-year'>Grzałka: {book.Heater}</div>
                  <div className='book-year'>Oświetlenie #1: {book.Light1}</div>
                  <div className='book-year'>Oświetlenie #2: {book.Light2}</div>
                  <div className='book-year'>Temperatura #1: {book.Temp1}</div>
                  <div className='book-year'>Temperatura #2: {book.Temp2}</div>
                  <div className='book-year'>pH wody: {book.Water_pH}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;