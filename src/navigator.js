import React from 'react'
import { Component } from "react"
import { Switch , Route , BrowserRouter} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import SideBarButtons from './components/sideBarButtons/sideBarButtons';
import MoviesList from "./containers/moviesList/moviesList";

class Navigator extends Component{
    render(){
        return(
            // <BrowserRouter>
            // <Switch>
            //     <Route path="/movies" component={SideBar}></Route>
            //     <Route path="/moviesList" exact component={MoviesList}></Route>
                
            //     <Route path="/header" component={NavBar}></Route>
            //     <Route path="/sidebar" component={SideBar}></Route>
            // </Switch>
            // </BrowserRouter>
           <>
                {/* <NavBar/>
                <SideBar/> */}
                <MoviesList/>
           </>
            
        );
    }
}

export default Navigator;

// npm install react-router-dom