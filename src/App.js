import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FileUpload from "./components/FileUpload";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
	<BrowserRouter>	  
    <div className="container" style={{ width: "750px" }}>
	  <Navbar />
      <div className="my-3">        
        <h4>React Hooks File Upload</h4>
      </div>
      <FileUpload />
	  <Footer />
    </div>
	</BrowserRouter>
  );
}

export default App;
