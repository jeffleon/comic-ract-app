import React from "react"
import {Media} from "reactstrap"
import "../styles/comicdetails.css"
import Loading from "./ComponentLoading"

function RenderComic({details}){
    console.log(details)
    const Characters = details.character_credits.map((character)=>{
        console.log(character.id)
        return(
            <div key={character.id} className="col-12 col-md-5 m-1">
                <Media tag="li">
                    <Media body>
                        <p>{character.name}</p>
                    </Media>
                </Media>
            </div>
        )
    })
    const Credits = details.concept_credits.map((character)=>{
        console.log(character.id)
        return(
            <div key={character.id} className="col-12 col-md-5 m-1">
                <Media tag="li">
                    <Media body>
                        <p>{character.name}</p>
                    </Media>
                </Media>
            </div>
        )
    })
    const Teams = details.team_credits.map((character)=>{
        console.log(character.id)
        return(
            <div key={character.id} className="col-12 col-md-5 m-1">
                <Media tag="li">
                    <Media body>
                        <p>{character.name}</p>
                    </Media>
                </Media>
            </div>
        )
    })
    const Locations = details.location_credits.map((character)=>{
        console.log(character.id)
        return(
            <div key={character.id} className="col-12 col-md-5 m-1">
                <Media tag="li">
                    <Media body>
                        <p>{character.name}</p>
                    </Media>
                </Media>
            </div>
        )
    })

    return(
        <Media>
            <Media body>
                <div className="details">
                    <h3>Characters</h3>
                    <hr/>
                    <Media list>
                        <div className="row">
                            {Characters}
                        </div>
                    </Media>
                    <h3>Teams</h3>
                    <hr/>
                    <Media list>
                        <div className="row">
                            {Teams}
                        </div>
                    </Media>
                    <h3>Locations</h3>
                    <hr/>
                    <Media list>
                        <div className="row">
                            {Locations}
                        </div>
                    </Media>
                    <h3>Credits</h3>
                    <hr/>
                    <Media list>
                        <div className="row">
                            {Credits}
                        </div>
                    </Media>
                </div>
            </Media>
            <Media top href="#">
                <Media src={details.image.original_url} className='imagedetail'/>
            </Media>
        </Media>
    )
}

const ComicDetails = (props) =>{
        return(
            <div className="content">
                {props && props.details && props.details.image? <RenderComic details={props.details}/>:<Loading />}
            </div>
        );
}
export default ComicDetails