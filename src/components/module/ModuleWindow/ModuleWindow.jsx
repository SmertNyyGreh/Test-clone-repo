import React, {useState} from 'react';

import { Counter } from '../Counter/Counter.jsx';
import { Button } from '../Button/Button';
import { Componentsss } from '../Componentsss/Componentsss';

export const ModuleWindow = () => {
   const [open, setOpen] = useState(false)

   return (
      <div>
         <Counter setOpen={setOpen} />
         <Componentsss open={open} setOpen={setOpen} />
         <Button clickOnButton={() => setOpen(true)}>Hello</Button>
      </div>
   );
};
