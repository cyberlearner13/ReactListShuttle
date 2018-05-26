import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ListShuttle from './components/list_shuttle';

class App extends Component{
    render(){
        return(
            <div>
                <ListShuttle />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector("#app"));