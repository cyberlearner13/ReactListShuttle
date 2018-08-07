import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import style  from '../../styles/shuttle_styles';

export default class ListShuttle extends Component{

    constructor(props){
        super(props);
        this.state = {
            originalList : ["Taiwan", "Saudi Arabia", "Egypt", "Australia", "Dominica", "Kazakhstan", "Peru", "Uganda", "Zimbabwe", "Cambodia", "Honduras", "Japan", "Vietnam", "Western Sahara", "Guinea", "Laos", "Barbados", "Mexico", "New Zealand", "India"],
            selectedList: [],
            countryToAdd: '',
            countryToRemove: '',
            removeIndex:0,
            selectedToAdd:false,
            selectedToRemove:false
        }
    }
    add(){
      let arr = this.state.selectedList;
      let { countryToAdd,selectedToAdd } = this.state;

      if(countryToAdd.length > 0 && this.state.selectedToAdd){
        if(!arr.includes(countryToAdd)){
            arr.push(countryToAdd);
        }

      }
      this.setState({
          selectedList : arr
      })
    }

    addAll(){
        let tempArray = [];
        // this method should add all the fields to the list
        //if second list is already full then,don't addAll
        if(this.state.selectedList.length === this.state.originalList.length){
            return;
        }
        else{
          this.state.originalList.forEach(val => {
            tempArray.push(val);
          });

          this.setState({
            selectedList : tempArray
          })
        }
    }
    remove(){
        let arr = this.state.selectedList;
        let { countryToRemove } = this.state;

        if(countryToRemove.length > 0 && this.state.selectedToRemove){
          if(arr.includes(countryToRemove)){
             arr.splice(this.state.removeIndex,1);
          }
        }
        this.setState({
            selectedList : arr
        });
    }
    removeAll(){
        if(this.state.selectedList.length === 0){
            return;
        }
        else{
          this.setState({
            selectedList : []
          })
        }
    }
    addCountry(value,index){
        this.setState({
            selectedToAdd: !this.state.selectedToAdd,
            countryToAdd: value
        })

    }

    removeCountry(value,index){
      this.setState({
         selectedToRemove: !this.state.selectedToRemove,
         countryToRemove: value,
         removeIndex: index
      });
    }

    render(){
        console.log(this.state.countryToAdd);
        return(
            <div className = "row" style={style.app}>
                <div className="col s3 offset-s1" style={style.listBox} >
                    {
                            this.state.originalList.map((val,ind)=>{
                                return <div key={ind} ref={ind}
                                    onClick={this.addCountry.bind(this,val,ind)}>{val}</div>
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
                                <div key={ind} onClick={this.removeCountry.bind(this,val,ind)}>{val}</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
