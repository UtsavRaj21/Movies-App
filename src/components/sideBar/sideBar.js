import React from 'react';
import './sideBar.css';
import SideBarButtons from '../sideBarButtons/sideBarButtons';

class SideBar extends React.Component{
    constructor(props){
                super(props);
                this.state ={};
                }

    // /*2*/   componentDidMount(){                                  // after the rerender that method run 1st time render 
    //             console.log("mount");
    //         }
        
    // /*3*/   componentDidUpdate(){                                // after update of state after 1st time render (when we update the state)
    //             console.log("Update");
    //         }
 
    // /*4*/   componentWillUnmount(){                             // when the page is remove from the web
               
    //         }

            render(){
                return(
                    <div className = "sidebar">
                        <SideBarButtons text={"All Genre"}/>
                        <SideBarButtons text={"Action"}/>
                        <SideBarButtons text={"Romance"}/>
                        <SideBarButtons text={"Thriller"}/>
                       
                    </div>
                )
            }
           
}

export default SideBar;