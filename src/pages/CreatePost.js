import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import swal from '@sweetalert/with-react';


class CreatePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            form:{
                title: '',
                author: '',
                body: ''
            }
        }
    }
    // ---------------------FUNCTION---------------------//
    onSubmit = async (e)=>{
        e.preventDefault();
        console.log(this.state.form)

        

        try{
            let posts = [...this.props.state.default.posts];

            posts.push({
                id: posts[posts.length-1].id +1,
                reg_dt: new Date(),
                title: this.state.form.title,
                body: this.state.form.body,
                author: this.state.form.author,
                likes: 0,
                bookmarked: false,
            })
            localStorage.setItem('posts', JSON.stringify(posts));
            this.props.actions.setPostList(posts);

            swal({
                title: "Success",
                text: "New post created!",
                icon: "success",
                button: true,
                dangerMode: false,
            }).then(()=>{
                this.props.history.replace('/')
            })

        }catch(e){
            swal({
                title: "Error",
                text: "Oops, something is wrong!",
                icon: "error",
                button: true,
                dangerMode: true,
            }).then(()=>{
                this.props.history.replace('/')
            })
        }
        
        
        
    }
    onChange = (e) =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    // ---------------------RENDER---------------------//
    render(){
        return(
            <div className="pages" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                <Header />
                <div className="post-detail" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                    <form onSubmit={this.onSubmit}>
                        <input className="title-input" type="text" value={this.state.form.title} placeholder="Add Title.." name="title" onChange={this.onChange} required />
                        <div className="extra">
                            <input className="author-input" type="text" value={this.state.form.author} placeholder="Author Name.." name="author" onChange={this.onChange} required />
                        </div>
                        <textarea className="post-textarea" placeholder="Start writing.." name="body" onChange={this.onChange} defaultValue={this.state.form.body} required ></textarea>
                        <input type="submit" className="button" value="Save"/>
                    </form>
                    
                </div>
            </div>
        )
    }
}


export default connect(state => ({
    state: state
  }),
    (dispatch) => ({
      actions: bindActionCreators(Actions, dispatch)
    })
  )(CreatePost);
  