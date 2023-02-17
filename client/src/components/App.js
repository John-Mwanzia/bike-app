import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "./Avatar";
import Content from "./Content";
import Input from "./Input";

function App() {
  return (
    <>
        <Header />
       
        <div className="body-content">
        <Image />
       <Content />
       <Input />
        </div>
     
         <Footer />
    </>

  );
}

export default App;
