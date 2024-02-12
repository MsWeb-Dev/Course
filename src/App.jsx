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
      image: "../dist/img/car.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Tikuvchilik",
      image: "../dist/img/tikuvchilik.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Hamshiralik",
      image: "../dist/img/doctor.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Agronomlik",
      image: "../dist/img/agronomlikk.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Zamonaviy kasblar",
      image: "../dist/img/computer.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Oshpazlik",
      image: "../dist/img/cooking.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Qandolatchilik",
      image: "../dist/img/qandolatchilik.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Ingliz tili",
      image: "../dist/img/ingliztili.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Koreys tili",
      image: "../dist/img/koreystili.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " Rus tili",
      image: "../dist/img/rustili.webp",
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