import React , {Component} from 'react';
import style  from '../../styles/shuttle_styles';

export default class ListShuttle extends Component{
    add(){
        alert('add');
    }

    addAll(){
        alert('addAll');
    }
    remove(){
        alert('remove');
    }
    removeAll(){
        alert('removeAll');
    }
    render(){
        return(
            <div className = "row" style={style.app}>
                <div className="col s3 offset-s1" style={style.listBox} ></div>
                <div className="col s2 offset-s1">
                    <div className="row">
                        <button 
                        className="waves-effect waves-light btn" 
                        style={{"width":"150px"}}
                        onClick={this.add.bind(this)}>
                            Add
                        </button>
                    </div>
                    <div className="row">
                        <button 
                        className="waves-effect waves-light btn"
                        style={{"width":"150px"}}
                        onClick={this.addAll.bind(this)}>
                            Add All
                         </button>
                    </div>
                    <div className="row">
                        <button 
                        className="waves-effect waves-light btn" 
                        style={{"width":"150px"}}
                        onClick={this.remove.bind(this)}>
                            Remove
                        </button>
                    </div>
                    <div className="row">
                        <button 
                        className="waves-effect waves-light btn" 
                        style={{"width":"150px"}}
                        onClick={this.removeAll.bind(this)}>
                            RemoveAll
                        </button>
                    </div>
                </div>
                <div className="col s3" style={style.listBox}></div>
            </div>
        );
    }
}