import logo from './logo.svg';
import './App.css';
import Card from './component/card'
import { useState } from 'react';
import Personal from './component/personal';

function App() {

  const [firstname , setfirstname] = useState ("dwadwa")

  const [allData , setAllData] = useState ([
    {
      id: 1,
      firstname: "jesrel A. Villasan",
      title: 'G',
      image: "https://i.pinimg.com/originals/78/2f/03/782f032235bd4b00c80de140b8e70538.jpg",
    },
    
  ])
  const [allPic , setAllPic] = useState ([
    {
      id: 1,
      image: "",
    },
    
    
  ])

  return(
    <div>
      <Card datav={allData}/>
      <Personal datap={allPic}/>
    </div>
  )
}

export default App;