import React from 'react';
import styled from 'styled-components';
import {hierarchy,tree} from 'd3-hierarchy';
import {linkHorizontal} from 'd3-shape';
import phone from '../policy.svg';
import bank from '../bank.svg';
import money from '../money.svg';
import chainsaw from '../chainsaw.svg';
import circularSaw from '../circularSaw.svg';
import concrete from '../concrete.svg';
import framing from '../framing.svg';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {dagStratify, sugiyama} from 'd3-dag';

console.log(dagStratify);

const FormWrapper = styled.div`
display:flex;
flex-direction:row;
`;

const CourseInfo = styled.div`
display:flex;
flex-direction:column;
`

const MemberInfo = styled.div`
display:flex;
`

const LearnTree = styled.div`
height: 100vh;
width:75vw;
overflow:scroll;
`


const InfoColumn = styled.div`
display:flex;
flex-direction:column;
width:25vw;
height:100vh;
border: 2px black solid;
padding:4px;
`

const InfoColumnHeader = styled.div`
display:flex;
flex-direction:row;
width;100%;
`

const InfoColumnBody = styled.div`
justify-content:center;
align-items: flex-start;
`

const InfoColumnIcon = styled.div`

`


const CourseTitle = styled.div`
font-size:20px;
`
const CourseDescription = styled.div`
font-size:16px;
`

const IWantToTakeThis = styled.button`
background-color: #4CAF50; 
width:95%;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
font-size: 16px;
`






export default function Members() {

  let [selectedNode, selectNode] = React.useState(null);

let mediumAquamarine = "#56e39f";
let redSalsa = "#F03A47";
let khakiWeb = "#C7AC92";
let blackCoffee = "#352D39";
let mediumSlateBlue = "#7F7EFF";
const learnTreeRef = React.useRef(null);

function getContrastYIQ(hexcolor){
  console.log({hexcolor})

  var r = parseInt(hexcolor.substr(1,2),16);
  var g = parseInt(hexcolor.substr(3,2),16);
  var b = parseInt(hexcolor.substr(5,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;

  return (yiq >= 128) ? 'black' : 'white';   }

  let data = [
    {
      "id": "0",
      "parentIds": [],
      "icon": phone,
      "data": "Initiation",
      "color": mediumAquamarine
    },
    {
      "id": "1",
      "parentIds": ["0"],
      "icon": framing,
      "data": "Basic Woodworking Safety",
      "color": mediumAquamarine
    },
    {
      "id": "2",
      "parentIds": ["1"],
      "data": "Chainsaw",
      "icon": chainsaw,
      "color": redSalsa
    },
    {
      "id": "3",
      "parentIds": ["1"],
      "icon": circularSaw,
      "data": "Saws",
      "color": redSalsa
    }, 
    {
      "id": "5",
      "parentIds": ["3",],
      "icon": framing,
      "data": "Framing",
      "color": redSalsa,
    },
    {
      "id": "6",
      "parentIds": ["0"],
      "icon": phone,
      "data": "Project Management",
      "color": mediumAquamarine
    },
    {
      "id": "7",
      "parentIds": ["0"],
      "icon": phone,
      "data": "Gardening",
      "color": mediumAquamarine
    },
       {
      "id": "9",
      "parentIds": ["0"],
      "icon": concrete,
      "data": "Pouring Concrete",
      "color": mediumSlateBlue
    },
    {
      "id": "10",
      "parentIds": ["9", "5"],
      "icon": bank,
      "data": "Home Construction",
      "color": mediumSlateBlue
    },
    {
      "id": "11",
      "parentIds": ["10", "6"],
      "icon": bank,
      "data": "Foreman",
      "color": mediumSlateBlue
    },
    {
      "id": "12",
      "parentIds": ["0"],
      "icon": money,
      "data": "Fundraising",
      "color": "white"
    },
  ];
console.log({data});

let x = dagStratify()(data);
console.log({x});

let eve = sugiyama().size([1000,1000])(x)
console.log({eve});

// let data = {
//     "name": "Initiation",
//     "color": redSalsa,
//     "children": [
//       {
//         "name": "Gardening",
//         "color": mediumAquamarine,
//         "children": [ {
//             "name": "Food Safety",
//             "color": "white",
//             "children": [
//               {
//                 "name": "Cooking",
//                 "color": blackCoffee
//               },
//               {
//                 "name": "Cooking",
//                 "color": blackCoffee
//               },
//               {
//                 "name": "Cooking",
//                 "color": blackCoffee
//               },
//               {
//                 "name": "Cooking",
//                 "color": blackCoffee
//               },
//               {
//                 "name": "Cooking",
//                 "color": blackCoffee
//               },
//               {
//                 "name": "Cooking",
//                 "color": blackCoffee
//               }
//             ]
//           },]
//       },
//       {
//         "name": "Woodworking Safety",
//         "color":"orange",
//         "children": [
//           {
//             "name": "Wall Framing",
//             "color": khakiWeb
//           },
//           {
//             "name": "Cabinetry",
//             "color":khakiWeb
//           }
//         ]
//       },
//       {
//         "name": "Scientific Mamagement",
//         "color": mediumSlateBlue,
//       },
//       {
//         "name": "Food Safety",
//         "color": "white",
//         "children": [
//           {
//             "name": "Cooking",
//             "color": blackCoffee
//           },
//           {
//             "name": "Initiation",
//             "color": redSalsa,
//             "children": [
//               {
//                 "name": "Gardening",
//                 "color": mediumAquamarine
//               },
//               {
//                 "name": "Woodworking Safety",
//                 "color":"orange",
//                 "children": [
//                   {
//                     "name": "Wall Framing",
//                     "color": khakiWeb
//                   },
//                   {
//                     "name": "Cabinetry",
//                     "color":khakiWeb
//                   }
//                 ]
//               },
//               {
//                 "name": "Scientific Management",
//                 "color": mediumSlateBlue,
//               },
//               {
//                 "name": "Food Safety",
//                 "color": "white",
//                 "children": [
//                   {
//                     "name": "Cooking",
//                     "color": blackCoffee
//                   },
//                   {
//                     "name": "Cooking",
//                     "color": blackCoffee
//                   },
//                   {
//                     "name": "Cooking",
//                     "color": blackCoffee
//                   },
//                   {
//                     "name": "Cooking",
//                     "color": blackCoffee
//                   },
//                   {
//                     "name": "Cooking",
//                     "color": blackCoffee
//                   },
//                   {
//                     "name": "Cooking",
//                     "color": blackCoffee
//                   }
//                 ]
//               },
//               {
//                 "name": "Organizing",
//                 "color": redSalsa
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "name": "Organizing",
//         "color": redSalsa
//       }
//     ]
//   }

  

  
  let width = 1300;
  let height = 1000;

    // let root = hierarchy(data);
    // let treeify = tree(root).size([height* 2, width * 2 ]);

    // let eve = treeify(root);

  //   let x0 = Infinity;
  // let x1 = -x0;
  // let y0 = Infinity;
  // let y1 = -y0;
  // eve.each(d => {
  //   if (d.x > x1) x1 = d.x;
  //   if (d.x < x0) x0 = d.x;
  //   if (d.y > y1) y1 = d.y;
  //   if (d.y < y0) y0 = d.y;
  // });


  // console.log({x0,x1,y0,y1, height, width})


    function toLink(node){
        let linkify = linkHorizontal().x(d => d.y).y(d => d.x);
        return <g fill="none" stroke="#555" strokeOpacity=".6" strokeWidth="3">
        <path d={linkify(node)}>
        </path>
        </g>
    }

    function toNode(node){
console.log({node})
        return <g onClick={() => selectNode(node.data)} style={{cursor:"pointer"}}  stroke="black" strokeOpacity="1" strokeWidth="0" fill="none" transform={`translate(${node.y},${node.x})`}>
        <circle fill={node.data.color} r="40">
        </circle> 
        <g>
      <text fill={"black"} fontFamily="sans-serif" strokeWidth="0" strokeOpacity=".4" fontSize={20} 
       x={0}  y={60}
      

      textAnchor={"middle"}
      >{node.data.data}</text>
<g  fill={getContrastYIQ(node.data.color)}>
      <image x={-60} y ={-70} style={{transform:"scale(.5)"}} href={node.data.icon}></image>
          </g>
        </g> 
      </g>
    }

    // function toText(node){
    //     console.log(node)
    //     return 
    // }

    let links = eve.dag.links().map(toLink);
    let nodes = eve.dag.descendants().map(toNode);


    let learnTree = ( <LearnTree ref={learnTreeRef}  style={{height:'100vh'}} >

      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox={`0 0 ${width} ${height}`}>
        <g>
          {links}
          {nodes}
          {/* {texts} */}
        </g>
      </svg>
    </LearnTree>);


    //let texts = eve.descendants().map(toText);
  return (
    <FormWrapper style={{padding:"1rem"}}>
    {learnTree}
    <InfoColumn>
<MemberInfo></MemberInfo>
      <CourseInfo>
        <CourseTitle>{selectedNode && selectedNode.data}</CourseTitle>
        <CourseDescription>{selectedNode && selectedNode.description}</CourseDescription>
        <IWantToTakeThis> I'm interested</IWantToTakeThis>
      </CourseInfo>
    </InfoColumn>
    </FormWrapper>
  )
}






