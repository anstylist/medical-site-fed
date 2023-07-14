import { useEffect, useState } from 'react'
import './CardStatistics.scss'

const CardStatistics =(props) =>{   

    const{num, simbol, icono,text}=props
    
    const[count,setCount]=useState(0)


    useEffect(() => {  
        
        if(count<num){
            let interval
            if(num===700){
                interval = setInterval(() => {
                    setCount(count+20) 
                }, 20);
            }
            else if(num===99){
                interval = setInterval(() => {
                    setCount(count+1) 
                }, 5);
            }
            else if(num===50){
                interval = setInterval(() => {
                    setCount(count+1) 
                }, 20);
            }
            else{
                interval = setInterval(() => {
                    setCount(count+1) 
                },40);
            }                   
                
            return () => {
                clearInterval(interval);
          };

        }
                
      }, [count]);

    return(
    <div className='container__card'>
        <i className='container__card--icono'>{icono}</i>
        <div className='container__card_content'>
            <h3>
               <span className='container__card_content--count'>{count}</span>
                <span className='container__card_content--simbolo'>{simbol}</span>                
            </h3>
            <p className='container__card_content--text'>{text}</p>
        </div>
    </div>
    
    )
 
}



export default CardStatistics