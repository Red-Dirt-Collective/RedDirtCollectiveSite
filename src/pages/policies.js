import React from 'react'
import { useRouteData } from 'react-static'
import styled from 'styled-components';
import universalBroadband from '../../public/policies/thumbnails/universal-broadband.png';
import livingWage from '../../public/policies/thumbnails/living-wage-for-a-working-council.png';
import rightToCounsel from '../../public/policies/thumbnails/right-to-counsel.png';
//
import { Link } from 'components/Router'

const Gallery = styled.div`
  display: flex;
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
`;

const Image = styled.img`
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
    {caption: 'Coming Soon', img: universalBroadband},
    {caption: 'Coming Soon', img: livingWage},
    {caption: 'Coming Soon', img: rightToCounsel},
  ].map((data) => (
    <Card>
      <Image src={data.img}></Image>
      <Caption>
        <CaptionText>{data.caption}</CaptionText>
      </Caption>
    </Card>
  ));

  return (
    <div style={{padding:"1rem"}}>
      <h1>Policies</h1>
      <Gallery>
        {cardData}
      </Gallery>
    </div>
  )
}
