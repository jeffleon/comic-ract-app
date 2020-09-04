import React, {Component} from "react"
import { Switch, Route, Redirect} from "react-router-dom"
import Header from "./HeaderComponent"
import Grid from "./GridComponent"
import List from "./ListComponent"
import FetchDetails from "./FetchDetailComponent"
import axios from "axios"
import "../styles/main.css"

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            comics:[]
        }
    }
    async componentDidMount(){
        const proxyurl = "REACT_HEROKU_CORS";
        const url = "https://comicvine.gamespot.com/api/issues/?api_key=REACT_APP_KEY&format=json"
        const response = await axios.get(proxyurl + url)
        console.log(response.data)
        this.setState({
            comics: response.data.results
        })  
    }
    render(){
        const sendDetails = ({match}) =>{
            return(
                <FetchDetails comic={this.state.comics.filter(comic => comic.id === parseInt(match.params.id,10))[0]}/>
            )
        }
        return(
            <div className="page">
                <Header/>
                <Switch>
                    <Route path="/grid" component={() => <Grid comics={this.state.comics}/>}/>
                    <Route path="/list" component={() => <List comics={this.state.comics}/>}/>
                    <Route path="/comic-details/:id" component={sendDetails}/>
                    <Redirect to="/list"/>
                </Switch>
            </div> 
        );    
    }
}

export default Main;