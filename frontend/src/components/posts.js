import React, { Component } from 'react';
import axios from 'axios';
import {Button, Card, Row} from 'react-bootstrap'

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
            <Row xs={1} md={2} className="g-4">
                {this.state.posts.map(item =>(
                
                    <Card key={item.id} bg="secondary" style={{ width: '18rem' }}>   
                        <Card.Img variant="top" src="https://desdelabeta.com/wp-content/uploads/2021/10/2-1.png" />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.body.slice(0,70)}...</Card.Text>
                        <Button variant="success" 
                            onClick={
                                () => console.log(item.id)
                            }    
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
