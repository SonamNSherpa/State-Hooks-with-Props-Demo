import React from "react";
import {useState} from "react"
import styles from '../App.module.css'


type CountType ={
  count:number;
}

const ModifyCount:React.FC<CountType>= ({count}) => {
   
  const [firstValue, setValue] = useState<number>(count);
  const [message, setMessage] = useState<string | null>('');
  function increment(){
    setValue(firstValue + 1);
    setMessage('');
  }
  function decrement(){
    if(firstValue == 0){
      setMessage('The value is 0, cannot decrement further');
      return;
    }
    else {
        setValue(firstValue -1);
  }
}
  
  return(
    <>
    <p className={styles.message}>{message}</p>
    <fieldset className={styles.container}>
    <div>
      <h1 className={styles.value}>{firstValue}</h1>
      <button className={styles.button} onClick={increment}>Increment by 1</button>
      <button className={styles.button} onClick={decrement}>Decrement by 1</button>
    </div>
    </fieldset>
    
    </>
    
  )
}





export default ModifyCount;