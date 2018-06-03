import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import style  from '../../styles/shuttle_styles';

export default class ListShuttle extends Component{
   
    constructor(){
        super();
        this.state = {
            originalList : ["Taiwan", "Saudi Arabia", "Egypt", "Australia", "Dominica", "Kazakhstan", "Peru", "Uganda", "Zimbabwe", "Cambodia", "Honduras", "Japan", "Vietnam", "Western Sahara", "Guinea", "Laos", "Barbados", "Mexico", "New Zealand", "India"],
            selectedList: [],
            countryToAdd: '',
            countryToRemove: '',
            selectedToAdd:false,
            selectedToRemove:false
        }
    }
    add(){
      let arr = this.state.selectedList;
      if(this.state.countryToAdd.length > 0){
          arr.push(this.state.countryToAdd);
      }
      this.setState({
          selectedList : arr
      })
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
    changeState(value,index){
        this.setState({
            selectedToAdd: !this.state.selectedToAdd,
            countryToAdd: value
        })
        
    }
    render(){
        console.log(this.state.countryToAdd);
        return(
            <div className = "row" style={style.app}>
                <div className="col s3 offset-s1" style={style.listBox} >
                    {
                            this.state.originalList.map((val,ind)=>{
                                return <div key={ind} ref={ind} 
                                    onClick={this.changeState.bind(this,val,ind)}>{val}</div> 
                            })
                          }
                </div>
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
                <div className="col s3" style={style.listBox}>
                    {
                        this.state.selectedList.map((val,ind) =>{
                            return (
                                <div key={ind}>{val}</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}