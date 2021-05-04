import React from 'react'
import dustBowl from '../DustBowl.jpg';
import styled from 'styled-components';
import illustration from '../duststorm.jpg';
import democracy from '../democracy.svg';
import policy from '../policy.svg';
import aid from '../aid.svg';

const ScrollSnap = styled.div`
  height: 1280px;

  @media (min-width: 600px) {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-padding: 80px;
  }
`;

const TextScreen = styled.div``;

const ImageScreen = styled.div`
  padding: 1rem;
  background-image:url("${props => props.img}");
  background-size:cover;
  background-attachment: fixed;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const InfoPanel = styled.div`
  padding: 20px;
  display: flex;
  justify-content:space-around;
  flex-direction:row;
  flex-wrap:wrap;
`;

const TextBlock = styled.div`
  background: #f5f4e1;
  width: 400px;
  text-align:justify;
  font-size:18px;
  padding:8px;
`;

const PanelTitle = styled.h3`
  text-align: left;
`;

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
  <ScrollSnap>
    <ImageScreen className="snapAlignStart" img={dustBowl}>
      <h1 class="title">RED DIRT COLLECTIVE</h1>
      <h3 style= {{"marginTop":"200px","color":"#f5f4e1", "fontSize":"20px"}}> Helping each other through our crisis.</h3>
      <i class="more"></i>
    </ImageScreen>
    <TextScreen className="snapAlignStart">
      <InfoPanel>
      <TextBlock><PanelTitleBlock>
          <PanelIcon src={democracy}>
          </PanelIcon>
          <PanelTitle>Incubating Democratic Institutions</PanelTitle>
        </PanelTitleBlock>
        In truly free society, we all must have some control over the institutions that affect our lives -- whether that's where we work, where we live, where we learn, or where we gather. Institutions like cooperatives, land trusts, tenants' unions, labor unions, neighborhood associations, and PREC's will return control of our lives back to us. One of our principal goals is to create, nurture and connect emancipatory systems of self-governance.
      </TextBlock>
      <TextBlock>
        <PanelTitleBlock>
          <PanelIcon src={policy}>
          </PanelIcon>
          <PanelTitle>Writing Policy & Analysis</PanelTitle>
        </PanelTitleBlock>
          It's one thing to know what our problems are. It's more difficult to invent a solution, and it's harder still to translate that solution into real governance. That's why our Policy branch prioritizes a deep understanding of Norman, Oklahoma. We write and analyze policies to direct our city towards actions that will help the poor and the working class, translating their will into city ordinances, funds, capital projects, budgets and other tangible policy.
      </TextBlock>
      <TextBlock><PanelTitleBlock>
          <PanelIcon src={aid}>
          </PanelIcon>
          <PanelTitle>Cultivating Mutual Aid</PanelTitle>
        </PanelTitleBlock>Before any group of people can have power they must first be organized. Before we can organize, we must meet one another, get to know each other, take care of each others' needs. For this reason, we develop solutions for mutual aid such as outdoor pantries, food delivery, mutual aid fairs, community gardens, brake light repair, and many other platforms for sharing both needs and provisions. This also serves to connect those who have a common interest, but may otherwise not meet.</TextBlock>
      </InfoPanel>
    </TextScreen>
    <ImageScreen img={illustration}>

    </ImageScreen>

  </ScrollSnap>
)
