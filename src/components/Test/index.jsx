import React from 'react';

export const Test = () => {
   localStorage.setItem('lol', 'text');
   return (
      <div>
         <h1>Text</h1>
         <button onClick={() => localStorage.removeItem('lol')}>Click</button>
         <button onClick={() => console.log(localStorage.length)}>Click</button>
      </div>
   );
};
