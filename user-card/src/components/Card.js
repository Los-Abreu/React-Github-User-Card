import React from 'react';
import styled from 'styled-components';

const UsercardDiv = styled.div`
display:flex;
flex-direction: column;
align-items:center;
background-color: cadetblue;
max-width: 100%;
height: auto;
padding:3%;
border-radius: 10px;
box-sizing: border-box;
`;
const Img = styled.img`
border-radius: 10px;
`;
export default function Card(props){
    return(
        <UsercardDiv>
        <Img src = {props.userPic}/>
        <h1>Hey I'm {props.name}</h1>
        <h2>{props.location}</h2>
        <h3>My Followers: {props.followers}</h3>
        <h3>Im Following: {props.following}</h3>
        </UsercardDiv>
    )
}