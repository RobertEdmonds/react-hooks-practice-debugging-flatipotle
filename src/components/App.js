import React, { useState } from "react";
import Form from "./Form";
import Order from "./Order";
import logo from "../images/logo.png";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
    setOrders([...orders, order]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form addOrder={addOrder}/>
      <div className="ui raised container segment">
        <h1 className="ui block header">All Orders</h1>
        <div className="ui three cards">{orders.map((order, idx) => {
    return <Order key={idx} order={order} />;
  })}</div>
      </div>
    </div>
  );
}

export default App;
