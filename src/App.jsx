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
      image: "../../public/img/car.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Tikuvchilik",
      image: "../../public/img/tikuvchilik.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Hamshiralik",
      image: "../../public/img/doctor.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Agronomlik",
      image: "../../public/img/agronomlikk.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Zamonaviy kasblar",
      image: "../../public/img/computer.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Oshpazlik",
      image: "../../public/img/cooking.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Qandolatchilik",
      image: "../../public/img/qandolatchilik.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Ingliz tili",
      image: "../../public/img/ingliztili.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Koreys tili",
      image: "../../public/img/koreystili.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Rus tili",
      image: "../../public/img/rustili.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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