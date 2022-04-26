import React from 'react'
import dustBowl from '../DustBowl.jpg';
import styled from 'styled-components';
import illustration from '../duststorm.jpg';
import democracy from '../democracy.svg';
import policy from '../policy.svg';
import aid from '../aid.svg';
import icon_az from "../fa-icons/amazon-brands.svg"
import icon_fb from "../fa-icons/facebook-square-brands.svg"
import icon_dollar from "../fa-icons/hand-holding-dollar-solid.svg"
import icon_patreon from "../fa-icons/patreon-brands.svg"
import icon_paypal from "../fa-icons/paypal-brands.svg"
import icon_form from "../fa-icons/wpforms-brands.svg"

const ScrollSnap = styled.div`
  height: 1280px;

  @media (min-width: 600px) {
    scroll-snap-type: y mandatory;
    scroll-padding: 80px;
  }
`;

const TextScreen = styled.div``;

const ImageScreen = styled.div`
  padding: 1rem;
  background-image:url("${props => props.img}");
  background-size:cover;
  background-attachment: fixed;
  min-height:100vh;
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

const LinksContainer = styled.div`
  max-width: 100%;
  min-width: 
`;

const LinkBoxStyle = {
  backgroundColor: "#fef7f5",
  padding: "20px 60px",
  margin: "20px",
  display: "block",
  textAlign: "center",
  boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.8)",
};

const LinkBox = ({ link, label,icon }) => (
  <a href={link} style={LinkBoxStyle} target="_blank">
    <img src={icon} style={{ height: "20px" }} />
    &nbsp;
    {label}
  </a>
);

export default () => (
  <ScrollSnap>
    <ImageScreen className="snapAlignStart" img={dustBowl}>
      <h1 className="title">RED DIRT COLLECTIVE</h1>
      <h3 style={{ "margin": "50px 0", "color": "#f5f4e1", "fontSize": "20px" }}> Helping each other through our crisis.</h3>
      <LinksContainer>
        <LinkBox label="Volunteer Form" icon={icon_form} link="https://docs.google.com/forms/d/e/1FAIpQLSdETHnFQuf-eHB2JypXvUeWvkzsOI7dfJTj3Bu0oniVQCd3FA/viewform" />
        <LinkBox label="Patreon" icon={icon_patreon} link="https://www.patreon.com/RedDirtCollective" />
        <LinkBox label="Amazon Wishlist" icon={icon_az} link="https://www.amazon.com/hz/wishlist/ls/1O6B5ZGQTKJ58" />
        <LinkBox label="Facebook @reddirtcollective" icon={icon_fb} link="https://www.facebook.com/groups/3356412661075562/" />
        <LinkBox label="Community Garden Facebook" icon={icon_fb} link="https://www.facebook.com/groups/254421259372249/" />
        <LinkBox label="Venmo @RedDirtCollective" icon={icon_dollar} link="https://account.venmo.com/u/reddirtcollective" />
        <LinkBox label="Pantry Venmo @RDC_PantryFund" icon={icon_dollar} link="https://account.venmo.com/u/rdc_pantryfund" />
        <LinkBox label="PayPal" icon={icon_paypal} link="https://www.paypal.com/paypalme/RedDirtCollective" />
      </LinksContainer>
      <i className="more"></i>
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
