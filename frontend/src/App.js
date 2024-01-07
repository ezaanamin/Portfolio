import React from "react";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Header from "./component/Header";
import MyProjets from "./component/MyProjets";
import ProfessionalExpertise from "./component/Professional Expertise";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {
  const router = createBrowserRouter([


    {
      path: "/",
      element: (
        <>

       
        <Header />
        <About />
        <ProfessionalExpertise />
        <MyProjets />
        <Blog />
        <Contact /> 
        </>
      )
    },
    
 
  ]);
  return (
    <RouterProvider router={router} />

  );
}

export default App;
