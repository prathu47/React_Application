import {useEffect,useState} from 'react'
import Card from './Card1'
import axios from "axios"


function Home1() {
  const [count, setCount] = useState([]);
  useEffect(()=>{
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://localhost:3000/data');
          console.log(resp.data);
          setCount(resp.data)
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };
  sendGetRequest();
  },[]
  )
  return (
    <div style={{backgroundColor:"#e7eff2",padding:"20px"}}>
        <h1 style={{textAlign:'center', paddingTop:"40px"}}>ADVICE ON HOW TO MAKE WISE INVESTMENTS</h1>
        <h4 style={{textAlign:"center", paddingBottom:"30px"}}>If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals.</h4>
        <div className='row'>
            {
                count.map((element)=>{
                            return(
                            <div className="col col-4" key={element.id}><Card data={element}/></div>
    
                            )
                        })
            }
    
        </div>
    </div>
  )
}

export default Home1
