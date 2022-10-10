import React from 'react';
import classes from './assets/style/Style.module.scss'
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className={classes.wrapper}>
      <AppRouter/>
    </div>
  );
}

export default App;
