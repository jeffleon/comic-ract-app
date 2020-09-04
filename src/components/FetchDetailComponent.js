import React,{Component} from "react"
import axios from "axios"
import ComicDetails from "./ComicDetailsComponent"

async function fetchurl(detail_url){
    const url = detail_url + "/?api_key=REACT_APP_KEY&format=json"
    const proxyurl = "https://damp-badlands-29550.herokuapp.com/";
    const response = await axios.get(proxyurl + url)
    return response
}
class FetchDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            comicdetails:[],
            err: false
        }
    }
    async componentDidMount(){
        if(this.props.comic != null)
        {
            const res = await fetchurl(this.props.comic.api_detail_url)
            this.setState({
                comicdetails: res.data.results
            })
        }else{
            this.setState({
                err: true
            })   
        }
    }
    componentDidCatch(error, info) {
        {console.log("entre al error")}

      }
    render(){
        return(
            <div>
                {this.state.err === false?<ComicDetails details={this.state.comicdetails}/>:<div></div>}
            </div>
        )
    }
}

export default FetchDetails