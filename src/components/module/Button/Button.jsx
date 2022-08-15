import React from 'react';

export const Button = ({ children, clickOnButton }) => {
   return <button onClick={clickOnButton}>{children}</button>;
};
