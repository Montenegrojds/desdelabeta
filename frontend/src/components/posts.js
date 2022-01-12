import React, { Component } from 'react';
import axios from 'axios';

export class BlogPost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.getBlogPosts();
        }
    getBlogPosts(){
        axios
        .get('http://127.0.0.1:8000/api/v1/')
        .then(res => {
            this.setState({ posts: res.data });
        })
        .catch(err => {
            console.log(err)
        })

    }
    
    render(){
        return(
            <div>
                {this.state.posts.map(item =>(
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.body}</span>
                        <button 
                            onClick={
                                () => console.log(item.id)
                            }    
                        >
                            Post
                        </button>

                    </div>
                ))}
            </div>
        )
    }
}
