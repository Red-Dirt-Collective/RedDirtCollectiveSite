import React from 'react'
import dustBowl from '../DustBowl.jpg';
import depressionMasks from '../depression-masks.jpg';
import hands from './hands.png';
import styled from 'styled-components';

const TextScreen = styled.div`
  margin:20vh;
`;

const ImageScreen  = styled.div`
  padding: 1rem;
  background-image:url("${props => props.img}");
  background-size:cover;
  background-attachment: fixed;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const InfoPanel  = styled.div`
 background-image: linear-gradient(45deg, #000000 8.33%, #f5f4e1 8.33%, #f5f4e1 50%, #000000 50%, #000000 58.33%, #f5f4e1 58.33%, #f5f4e1 100%);
 background-size: 101.82px 101.82px;
`;


export default () => (
  <div> 
    <ImageScreen img={dustBowl}>
      <h1 class="title">RED DIRT COLLECTIVE</h1>  
      <h3 style= {{"margin-top":"200px","color":"#f5f4e1", "font-size":"20px"}}> Helping eachother through our crisis.</h3> 
      <i class="more"></i>
    </ImageScreen>
    <TextScreen>
      <div> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,</p>
      </div>
      <div> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,</p>
      </div>
    </TextScreen>
    <ImageScreen img={depressionMasks}>
      
    </ImageScreen>
  </div>
 
)
