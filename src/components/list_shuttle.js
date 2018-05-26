import React , {Component} from 'react';
import style  from '../../styles/shuttle_styles';

export default class ListShuttle extends Component{
    render(){
        return(
            <div className = "row" style={style.app}>
                <div className="col s3 offset-s1" style={style.listBox} ></div>
                <div className="col s2 offset-s1">
                    <div className="row"><button className="waves-effect waves-light btn">Add</button></div>
                    <div className="row"><button className="waves-effect waves-light btn">Add All</button></div>
                    <div className="row"><button className="waves-effect waves-light btn">Remove</button></div>
                    <div className="row"><button className="waves-effect waves-light btn">RemoveAll</button></div>
                </div>
                <div className="col s3" style={style.listBox}></div>
            </div>
        );
    }
}