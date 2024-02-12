import React from 'react';
import "./home.css"
import { AiTwotoneMessage } from "react-icons/ai";
import Courses from './Courses';
function Home({data}) {
  return (
    <div className='container-fluid'>
      <div className="home-content">
        <div class="container">
          <div className="messege">
            <a href="tel:+998774048881"><AiTwotoneMessage style={{ width: "50px", height: "50px" }} className='message' /></a>
          
          </div>
          <div class="row ">
            <div class="col-sm-6 col-md align-self-start text-white   home-content-column home-content-column-h1 m-2 p-2">
              <h1 className="h1 text-center p-4 mt-5 ">
                Bilim Najot
                o'quv markazi
              </h1>
              <p className="h4 text-center ">
                Bizning o'quv markazimizda nafaqat nazariy bilimlar balki amaliy bilimlar bilan  ham ko'nikmalaringizni oshirib borasiz!
              </p>
              <a className='btn btn-outline-secondary text-center  offset-5 p-2 home-registr' href='https://t.me/Parkent_bilim_najot'>Kursga yozilish</a>
              
            </div>
            <div class="col-sm-5 col-md align-self-end text-white  d-flex justify-content-center home-content-column home-content-column-img  m-2 p-2">
              <img src="/img/logo.jpg" alt="" className="img img-fluid home-img" />
            </div>
          </div>
        </div>
        <Courses data={data} ></Courses>
      </div>
    </div>

  );
}

export default Home;
