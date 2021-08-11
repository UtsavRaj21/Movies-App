import React from 'react';
import MoviesTableRows from '../moviesTableRows/moviesTableRows';
import './moviesTable.css';

class MoviesTable extends React.Component{
    constructor(props){
                super(props);
                this.state ={};
    }
    render() {
        let data = this.props.data;
        let header={
            sno: "S.No.",
            name: "Movies",
            genre: "Genre",
            rating: "Rating"
        }

        let rows = [];

        for(let i of data){
            rows.push(<MoviesTableRows key={i.sno} data={i} />);
        }
        
        return (
            <div className="movies-table">
                <MoviesTableRows data={header} header={true}/>
               {rows}
            </div>
        )
    }
           
}

export default MoviesTable;