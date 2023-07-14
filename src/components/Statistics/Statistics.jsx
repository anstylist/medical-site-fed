import CardStatistics from "../CardStatistics/CardStatistics"
import { SlBadge } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaUserDoctor} from "react-icons/fa6";
import './Statistics.scss'

const Statistics =()=>{

    const infoStatistics =[
        {num:20, simbol:'+', icono: <SlBadge size={34}/>,text:'Years of experience'},
        {num:99, simbol:'%', icono: <BiLike size={34}/>,text:'Patients satisfied'},
        {num:700, simbol:'+', icono: <FaBed size={34}/>,text:'Medical beds'},
        {num:50, simbol:'+', icono: <FaUserDoctor size={34}/>,text:'Laboratory Experts'}
    ]

    return (
        <div className="container_statistics">        
            <div className="container_cardstatistics">
            {infoStatistics.map((item,index)=>{
                return (
                <CardStatistics
                    key={index}
                    num={item.num} 
                    simbol={item.simbol} 
                    icono={item.icono} 
                    text={item.text} 
                />)
                })}
            </div>
        </div>
  
    )
}

export default Statistics