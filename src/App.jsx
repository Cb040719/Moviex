import MainNav from './components/MainNav';
import MainContent from './components/MainContent';
import styles from './App.module.scss';
import { useState } from 'react';

const App = () => {

  const [isActive, setIsActive] = useState(false);

  return(
    
    <div className={`${styles.App} ${isActive && styles.active}`}>
      {console.clear()}
      <MainNav titleContent={"Moviesss"} titleFont={"Limelight"} setIsActive={setIsActive}/> 
      <MainContent/>
    </div>
  );
}

export default App;