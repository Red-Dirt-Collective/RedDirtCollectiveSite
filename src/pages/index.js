import React from 'react'
import dustBowl from '../DustBowl.jpg';
import depressionMasks from '../goggles.jpg';
import hands from './hands.png';
import coffee from '../coffee.jpg';
import styled from 'styled-components';
import illustration from '../duststorm.jpg';
import phone from '../phone.svg';
import policy from '../policy.svg';
import money from '../money.svg';
import { blue } from 'color-name';

const TextScreen = styled.div`
  margin:10vh;
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
  padding: 20px;
  display:flex;
  justify-content:space-around;
  flex-direction:row;
  flex-wrap:wrap;
`;

const TextBlock  = styled.div`
  background: #f5f4e1;
  width: 400px;
  text-align:justify;
  font-size:18px;
  padding:8px;
`;

const PanelTitle = styled.h3``;

const PanelIcon = styled.img`
  width:80px;
  padding-right:8px;
`;

const PanelTitleBlock = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
`;



export default () => (
  <div> 
    <ImageScreen img={dustBowl}>
      <h1 class="title">RED DIRT COLLECTIVE</h1>  
      <h3 style= {{"margin-top":"200px","color":"#f5f4e1", "font-size":"20px"}}> Helping each other through our crisis.</h3> 
      <i class="more"></i>
    </ImageScreen>
    <TextScreen>
      <InfoPanel> 
      <TextBlock><PanelTitleBlock>
          <PanelIcon src={phone}>
          </PanelIcon>
          <PanelTitle>Cooperatives</PanelTitle>
        </PanelTitleBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,
      </TextBlock>
      <TextBlock>
        <PanelTitleBlock>
          <PanelIcon src={policy}>
          </PanelIcon>
          <PanelTitle>Policy Papers/Analysis</PanelTitle>
        </PanelTitleBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,
      </TextBlock>
      <TextBlock><PanelTitleBlock>
          <PanelIcon src={money}>
          </PanelIcon>
          <PanelTitle>Mutual Aid</PanelTitle>
        </PanelTitleBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,</TextBlock>
      </InfoPanel>
    </TextScreen>
    <ImageScreen img={illustration}>

    </ImageScreen>
     
  </div>
 
)
