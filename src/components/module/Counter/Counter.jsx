import React, { useState } from 'react';
import { Button } from '../Button/Button';

export const Counter = ({ setOpen }) => {
   const [Counter, setCounter] = useState(0);

   const increase = () => {
      setCounter(Counter + 1);
   };

   const reduce = () => {
      setCounter(Counter - 1);
   };

   if(Counter < -5 || Counter > 6){
      setOpen(true)
   }

   return (
      <div>
         <h1>This is Function!!</h1>
         <Button clickOnButton={increase}>Increase</Button>
         <Button clickOnButton={reduce}>Reduce</Button>
         <p>{Counter}</p>
      </div>
   );
};
