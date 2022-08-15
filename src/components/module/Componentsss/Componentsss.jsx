import React from 'react';

import styles from './Componentsss.module.scss';

import { Button } from '../Button/Button';

export const Componentsss = ({ open, setOpen }) => {
   return open ? (
      <div className={styles.componentsModule}>
         <Button clickOnButton={() => setOpen(false)}>Close</Button>
      </div>
   ) : null;
};
