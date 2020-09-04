import React from "react"
import {Card, CardBody, CardImg, CardText} from "reactstrap"
import { Link } from 'react-router-dom';
import Loading from './ComponentLoading'
import '../styles/list.css';

const List = (props) =>{
    const card = props.comics.map((comic)=>{
        const {image : { small_url }, volume:{name}, date_added} = comic;
        var date = new Date(date_added)
        return(
            <div key={comic.id} className="col-12 col-md-3 col-lg-2">
                <Card className="border-0 cardbody">
                    <Link to={`/comic-details/${comic.id}`}>
                        <div className="d-flex justify-content-center">
                            <CardImg  src={small_url} className="imagecard center"/>
                        </div>
                        <CardBody>
                            <div className="cardText">
                                <CardText className="namecard">{name}</CardText>
                                <CardText className="cardate">{date.toDateString()}</CardText>
                            </div>
                        </CardBody>
                    </Link>
                </Card>
            </div>
        )
    })
    return(
        <div className="center-block">
            <div className="row">
                {card}
            </div>
        </div>
    )
}

export default List