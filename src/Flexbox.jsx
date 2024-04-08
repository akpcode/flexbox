import React from "react";
import "./Flexbox.css";
import Myfunctions from "./MyFunctions.jsx";

function Flexbox() {
    return (
      <div className="container_flex">
        <div className="flex_container">
        <h1 className="box1">Ola</h1>
            <h1 className="box2">Ade</h1>
            <h1 className="box3">Olaiya</h1>
            <h1 className="box4">Sanya</h1>
        </div>
       <Myfunctions/>
       <div className="grid_container">
            <h1 className="grid1">Ola</h1>
            <h1 className="grid2">Ade</h1>
            <h1 className="grid3">Olaiya</h1>
            <h1 className="grid4">Sanya</h1>

            <h1 className="grid5">Ola</h1>
            <h1 className="grid6">Ade</h1>
            <h1 className="grid7">Olaiya</h1>
            <h1 className="grid8">Sanya</h1>

            <h1 className="grid9">Ola</h1>
            <h1 className="grid10">Ade</h1>
            <h1 className="grid11">Olaiya</h1>
            <h1 className="grid12">Sanya</h1>

            <h1 className="grid13">Ola</h1>
            <h1 className="grid14">Ade</h1>
            <h1 className="grid15">Olaiya</h1>
            <h1 className="grid16">Sanya</h1>
       </div>
      </div>
    );
  } 
  
  export default Flexbox;

