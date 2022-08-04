import { Route, Switch } from "react-router-dom";
import React, { useState,useEffect } from "react";
import "./App.css";
 
import Login from "./components/Login page/Login";
 
import Loading from "./components/Loading/Loading";
import Home from "./components/Home/Home";
 import Existing from "./components/Existing/Existing";
import Errorload from "./components/Wrong page/Errorload";
import Wrapper from './components/All plans/Wrapper';
import Cancelled from "./components/Cancelled/Cancelled";
function App() {
  const [loading, setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2300)
  },[])
  return (
    <div className="App">
      {loading?<Loading/>:
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/plans" component={Wrapper} />
        <Route exact path="/plan/:id" component={Cancelled} />
        <Route exact path="/myplans" component={Existing} />
        <Route exact component={Errorload} />
      </Switch>}
    </div>
  );
}

export default App;
