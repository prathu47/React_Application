import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Carousel = () => {
  let data = [
    {
      id: "1",
      img: "https://www.wallpaperbetter.com/wallpaper/167/914/543/tea-and-books-2K-wallpaper.jpg",
      text: "jhghjb"
    },
    {
      id: "2",
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      text: "jvghvhjv"
    },
    {
      id: "3",
      img: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752",
      text: "trfetyf"
    },
  ]
  const [Number, setNumber] = useState(0)
  return (

    <div style={{backgroundImage: `url(${data[Number].img})`,height:"80vh"}}>

      
        {/* <img src={data[Number].img} width="100%" style={{ height: 480 }} alt="" /> */}
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",height:"100%",alignItems:"flex-end" }}>
        <Button onClick={()=>setNumber(Math.abs((Number-1))%3)}>sub</Button>
        <h4>
          {
            data[Number].text
          }
        </h4>
        <Button onClick={()=>setNumber((Number+1)%3)}>add</Button>
      </div>
      
      </div>
  )
}

export default Carousel