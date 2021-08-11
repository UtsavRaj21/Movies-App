import React from 'react';
import MoviesTable from '../../components/moviesTable/moviesTable';
import NavBar from '../../components/navBar/navBar';
import Pagination from '../../components/pagination/pagination';
import SideBar from '../../components/sideBar/sideBar';
import './moviesList.css';
import Loader from '../../components/loader/loader';
import { HandleGetMovies } from './dataManager';
import { connect } from 'react-redux';

class MoviesList extends React.Component {
        constructor(props){
                super(props);
                this.state ={
                    search:"",
                    pageNumber:1,
                    "rating":"all",
                    data:[],
                    loader:true,
                };
                }

                async componentDidMount () {
                    let data = await HandleGetMovies();
                    this.setState({
                        data: data,
                        loader: false
                    });
                    this.props.updateMovies(data);
                }

                

                changeRating = (e) =>{
                    this.setState({
                        "rating":e.target.value === "all" ? "all" :parseInt(e.target.value),
                        pageNumber:1
                    })
                }

                changeSearch = (e) => {
                    this.setState({
                        search : e.target.value,
                        pageNumber:1,
                    })
                    
                }

                changePage = (pageNumber) =>{
                    this.setState({
                        pageNumber:pageNumber,
                    })
                }

                prev = (e) =>{
                    if(this.state.pageNumber == 1) return;
                    this.setState({
                        
                        pageNumber:this.state.pageNumber-1,
                    })
                }

                next = (e) =>{
                    if(this.state.pageNumber == 4) return;
                    
                    this.setState({
                        pageNumber:this.state.pageNumber+1,
                    })
                }
                


                render() {
                    let data = this.state.data;
  
                    let filterData = data.filter((movie) => {
                        if(this.state.rating != "all"){
                            return movie.rating === this.state.rating;
                        }
                       return true;
                   })

                     filterData = filterData.filter((movie) => {
                         let movieName = movie.name.toLowerCase();
                         let search = this.state.search.toLowerCase();
                        return movieName.includes(search);
                    })



                    
                    let finalData = [];
                    for(let i = (this.state.pageNumber -1)*5 ; i<(this.state.pageNumber*5) && i < filterData.length; i++){
                        finalData.push(filterData[i]);
                    }

                   

                    return (
                        <div className="main-container">
                            {this.state.loader ? <Loader/> :""}
                            <NavBar />
                            <SideBar />
                            <div className="movie-table-container">
                                <div className="filter">
                                    <input value = {this.state.search} className="movie-search" type="text" placeholder="Search for Movies" onChange={this.changeSearch}/>
                                    <select class="rating-box" onChange={this.changeRating}>
                                
                                    <option value={"all"} selected >All Rating</option>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                                <MoviesTable data={finalData}/>
                               <div className="pagination">
                                    <img className="logo1" src="https://e7.pngegg.com/pngimages/120/417/png-clipart-font-awesome-arrow-web-typography-computer-icons-left-arrow-cdr-angle.png" alt="logo" onClick={this.prev}></img>
                                    <Pagination totalMovies={filterData.length} changePage={this.changePage}/>
                                     <img className="logo2" src="https://cdn.imgbin.com/23/23/7/imgbin-computer-icons-font-awesome-theme-left-arrow-6DFu54EJrHzfyLqFwUKuduVtj.jpg" alt="logo" onClick={this.next}></img> 
                               </div>
                               
                            </div>
                        </div>
                    )
                }
           
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapActionToProps = dispatch => {
    return {
        updateMovies: (data) => dispatch({type: "updateMovies", data: data})
    }
}

export default connect(mapStateToProps,mapActionToProps)(MoviesList);