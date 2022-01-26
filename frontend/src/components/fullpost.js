import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const FullPost = (props)=>{
    
    const {id} =useParams();
    const [postData, setPostData] = useState({post : {}})


    useEffect(() => {
		axios.get(`http://127.0.0.1:8000/api/v1/${id}`).then((res) => {
			setPostData({ post: res.data });
			console.log(res.data);
           
		});
	}, []);

    return(
            <div>
                <h1>
                    {postData.post.title}     
                </h1>
                <h2>
                    {postData.post.author} Fecha: {postData.post.created_at}  
                </h2>
                <p>
                    {postData.post.body}
                </p>
            </div>
        )

}
