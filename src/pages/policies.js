import React from 'react'
import { useRouteData } from 'react-static'
import styled from 'styled-components';
import universalBroadband from '../../public/policies/thumbnails/universal-broadband.png';
import livingWage from '../../public/policies/thumbnails/living-wage-for-a-working-council.png';
import rightToCounsel from '../../public/policies/thumbnails/right-to-counsel.png';
import normanCrew from '../../public/policies/thumbnails/crew.png';
//
import { Link } from 'components/Router'

const H1 = styled.div`
  font-size: 72px;
  font-weight: bold;
`;

const Description = styled.div`
  margin: 20px;
  font-size: 20px;
  max-width: 950px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

const P = styled.p``;

const Gallery = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 18px;
  background: #f85646;
  padding: 0px;
  color: white;
  line-height: 36px;
  cursor:pointer;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
width:300px;
height:400px;
`;

const Caption = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const CaptionText = styled.div`
  font-style: italic;
`;

export default function Blog() {
  // const { posts } = useRouteData()
  const cardData = [
    {caption: '', img: normanCrew, href:'https://static1.squarespace.com/static/5f7bd00f0ee4cd0865f57850/t/60bad737d2ec0402128476ea/1622857534030/CREW.pdf'},
    {caption: 'Coming Soon', img: universalBroadband},
    {caption: 'Coming Soon', img: livingWage},
    {caption: 'Coming Soon', img: rightToCounsel},
  ].map((data) => (
    <Card>
      <a href={data.href} >
      <Image  src={data.img}></Image>
      </a>
      {data.caption ? (<Caption>
        <CaptionText>{data.caption}</CaptionText>
      </Caption>) : ''}
    </Card>
  ));

  return (
    <div style={{padding:"1rem"}}>
      <H1>Policies</H1>
      <Description>
        <P>
          It's one thing to know what our problems are. It's more difficult to invent a solution, and it's harder still to translate that solution into real governance.
        </P>
        <P>
          That's why our Policy branch prioritizes a deep understanding of Norman, Oklahoma. We write and analyze policies to direct our city towards actions that will help the poor and the working class, translating their will into city ordinances, funds, capital projects, budgets and other tangible policy.
        </P>
      </Description>
      <Gallery>
        {cardData}
      </Gallery>
    </div>
  )
}
