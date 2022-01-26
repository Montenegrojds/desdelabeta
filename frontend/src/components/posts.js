import React, { Component } from 'react';
import axios from 'axios';
import {Button, Card, Row} from 'react-bootstrap'
import { FullPost } from './fullpost';
import { Router } from 'react-router-dom';
export class BlogPost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            posts: [],
            info: {},
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

    getFullPost(id){
        <Router.Link to="posts/:id">Landing Page</Router.Link>
        
    }
    
    render(){
        return(
            <Row xs={1} md={2} className="g-4">
                {this.state.posts.map(item =>(
                
                    <Card key={item.id} bg="secondary" style={{ width: '18rem' }}>   
                        <Card.Img variant="top" src="https://desdelabeta.com/wp-content/uploads/2021/10/2-1.png" />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.body.slice(0,70)}...</Card.Text>
                        <Button variant="success" 
                            href={'post/' + item.id}  
                        >
                            Post
                        </Button>

                        
                        <Card.Footer>{item.author} {item.created_at}</Card.Footer>
                    </Card>
                ))}
            </Row>
        )
    }
}
