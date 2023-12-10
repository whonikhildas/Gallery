import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [images,setImages] = useState([]);

  // useEffect(()=>{
  //   getImages()
  // },[])


  const getImages= async ()=>{
    try{const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImages(data);
    // console.log(data);
  } catch (error){
    console.error("Error");
  }
  };
  return (


    <>
  <div className='flex flex-col justify-center align-items-center'>
    <button
    onClick={getImages}
    className='px-5 py-3 bg-cyan-700 text-white font-bold '
    >Get images</button>
      <div className='p-10'>
          {images.map((elem,i)=>{
            return <img
              key={i}
              src={elem.download_url}
              width={200}
              height={300}
              className='m-10 rounded inline-block'
            />
          })}
      </div>

  </div>


    </>
  );
}

export default App;
