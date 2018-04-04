
import React, {Component} from 'react';
import postData from '../data/threadItems'

// I'm sure there's a more efficient way to grab data from postData rather than grabbing at a certain index.
// It feels really barbarian

const textAreaStyle={
    fontSize: '13px',
    height: '55px',
    // width:'100%',
    marginBottom:'2px'
}
const formStyle={
    width:'100%'
}

class Thread extends Component{
    constructor(props){
        super(props)
        this.state={
            comments: postData[props.threadID].comments,
            textInput:''
        }
        this.updateInput=this.updateInput.bind(this)
    }
    onSubmit(event){
        event.preventDefault()

    }
    updateInput(event){
        this.setState({
            textInput: event.target.value
        })
    }

    render(){

        const Comments = postData[this.props.threadID].comments.map( (item, index) => {
            return(
                <div key={index} >
                    <span><i className="fas fa-user-circle mr-2"></i>{postData[this.props.threadID].comments[index].name}</span>
                    <p><small>{postData[this.props.threadID].comments[index].comment}</small></p>
                </div>
            )
        } )

        return(
                <div className="col-m-12 col-sm-9 justify-content-start mt-5 ">
                    <h2>{postData[this.props.threadID].title}</h2>
                    <p><small className='text-muted' >Author: {postData[this.props.threadID].author} </small></p>
                    <p>{postData[this.props.threadID].description}</p>
                    <div className="dropdown-divider mb-5"></div>
                        {Comments}

                        <form style={formStyle} className="form-group" onSubmit={this.onSubmit} >
                            <textarea style={textAreaStyle} id="comment" className="form-control" value={this.state.textInput} onChange={this.updateInput} ></textarea>
                            <button className="btn btn-danger btn-sm" >Add a comment</button>
                        </form>


                </div>
        )
    }
};

export default Thread
