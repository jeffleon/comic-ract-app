import React from "react"
import {Media} from "reactstrap"
import '../styles/grid.css'
import { Link } from 'react-router-dom';

const Grid = (props) =>{
    const medias = props.comics.map((comic)=>{
        const {image : { small_url }, volume:{name}, date_added} = comic;
        var date = new Date(date_added)
        return(
            <div key={comic.id} className="col-12 m-1">
                <Media tag="li">
                    <Media left middle>
                        <Link to={`/comic-details/${comic.id}`}>
                            <Media src={small_url} alt={name} className="imagemedia"/>
                        </Link>
                    </Media>
                    <Media body>
                        <Media heading className="namegrid">
                            {name}
                        </Media>
                        <div className="datemedia">
                            {date.toDateString()}
                        </div>
                    </Media>
                </Media>
                <hr/>
            </div>
        )
    })
    return(
        <div className="container">
            <Media list>
                {medias}
            </Media>
        </div>
    )

}

export default Grid