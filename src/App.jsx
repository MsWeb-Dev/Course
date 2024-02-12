import React from 'react'
import "./App.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from './layout/rootLayout'
import Home from './page/Home'
import Footer from './components/footer'
import Courses from './page/Courses'
import About from './page/About'
function App() {
  const data = [
    
    {
      title: "Mashinasozlik",
      image: "/img/car.jpg",
      description: "Mashinasozlikni 0dan o'rganish.",
    },
    {
      title: "Tikuvchilik",
      image: "/img/tikuvchilik.jpg",
      description: "Dizaynerlik tikuvchilik bo'yicha barcha bilimlar.",
    },
    {
      title: "Hamshiralik",
      image: "/img/doctor.jpg",
      description: "Nafaqat uy hamshirasi balki profissional hamshiralik darajasigacha.",
    },
    {
      title: "Agronomlik",
      image: "/img/agronomlikk.jpg",
      description: "Agronom bo'lsh uchun kerak bo'ladigan barcha bilimlar.",
    },
    {
      title: " Zamonaviy kasblar",
      image: "/img/computer.jpg",
      description: "Dasturlash SMM Kopmyter savodxonligi",
    },
    {
      title: "Oshpazlik",
      image: "/img/cooking.jpeg",
      description: "Oshxona qirolichasi bo'lish imkoniyati.",
    },
    {
      title: "Qandolatchilik",
      image: "/img/qandolatchilik.jpg",
      description: "Qandolatchilikdagi barcha bilimlar.",
    },
    {
      title: " Ingliz tili",
      image: "/img/ingliztili.png",
      description: "ILETS CEFR va boshlang'ich bilimlar",
    },
    {
      title: " Koreys tili",
      image: "/img/koreystili.png",
      description: "Koreys tiidan boshlang'ich bilimlar",
    },
    {
      title: " Rus tili",
      image: "/img/rustili.webp",
      description: "Rus tiidan boshlang'ich bilimlar",
    },
    


  ];
  const router=(createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout></RootLayout>}>
          <Route index element={<Home data={data}></Home>}></Route>
          <Route path='/courses' element={<Courses  data={data}></Courses>} ></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/footer' element={<Footer></Footer>}></Route>
      </Route>
    )
  ))

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
