import React,{Component} from 'react';
import SCP from "./SCP";

class App extends Component
{
    render()
    {
      return(
        <SCP scp={ this.state.scp}/>

      );
    }
    state = { scp: []}

    componentDidMount()
    {
      fetch('https://userdb-df78.restdb.io/rest/content',
      {
        method: 'GET',
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "60b6e0e0318a330b62f58964",
          "content-type": "application/json"
        }
      })
      .then(result => result.json())
      .then((data) => { this.setState({scp: data})})

      .catch(console.log);
    }
   
}


export default App;
