import React from 'react';
import NavBarButtons from '../navBarButtons/navBarButtons';
import './navBar.css';

class NavBar extends React.Component{
    constructor(props){
                super(props);
                this.state ={};
                }

            render(){
                return(
                    <div className = "navbar">
                        <img className="logo" src="https://image.shutterstock.com/image-vector/play-media-button-icon-triangle-260nw-194525675.jpg" alt="logo"></img>
                        <NavBarButtons text={"Home"}/>;
                        <NavBarButtons text={"Movies"}/>;
                        <NavBarButtons text={"About"}/>;
                        <NavBarButtons text={"Contact"}/>;
                        
                    </div>
                )
            }
           
}

export default NavBar;