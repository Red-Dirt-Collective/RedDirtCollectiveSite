import React from 'react';
import styled from 'styled-components';


const FormWrapper = styled.div`
display:flex;
flex-direction:column;
`;

const Explainer = styled.div`
display:flex;
color:black;
font-size:28px;
padding:32px;
`;

const FormSection = styled.div`
display:flex;
flex-wrap: wrap;
padding:32px 0px;
width:90%;
flex-direction:row;
margin-top 32px;
justify-content:center;

border: 1px black solid;
`;

const TextInput = styled.input`
width:auto;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: 2px solid black;
border-radius: 4px;
background:transparent;
&:focus {
    outline: none;
    border: 2px solid #d50004;
    background:transparent;
}

font-size:24px;
`;

const InputLabel = styled.div`
font-size:18px;
position:relative;
left:10px;
`;

const InputWrapper = styled.div`
margin: 0px 8px;
`;

const CheckBoxGrid = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
padding:32px;
width:100%;
flex-wrap:wrap;
`;

const Container = styled.label`
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
user-select: none;
width:200px;
`;
const Checkbox = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;

`;
const Checkmark = styled.span`
position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 2px solid black;
`;

const SkillCheck = styled.div`
width:300px;
`;

const skills = ['Writing', 'Woodworking', 'Graphic Designer', 'Cooking/Baking', 'Electric Work', 'Welding', 'Computer Repair', 'Software', 'Accounting', 'BookKeeping', "Research", "Networking", "Fundraising", "Gardening", "Own Land", "Own Storage Space"];
let skillCheckboxes = skills.map(skill => 
<SkillCheck>
<Container>{skill}
    <Checkbox type="checkbox" />
    <Checkmark ></Checkmark>
</Container>
</SkillCheck>
)

export default function Onboard() {
  return (
    <FormWrapper style={{padding:"1rem"}}>
        <Explainer>
            Welcome! Let us know a little bit about you, and what you see yourself doing in RDC.
        </Explainer>
        <FormSection>
            <InputWrapper>
                <InputLabel>First Name</InputLabel>
                <TextInput type="text" name="firstname" placeholder="First Name"></TextInput>
            </InputWrapper>
            <InputWrapper>
                <InputLabel>Last Name</InputLabel>
                <TextInput type="text" name="last" placeholder="Last Name"></TextInput>
            </InputWrapper>
            <InputWrapper>
                <InputLabel>Phone Number</InputLabel>
                <TextInput type="text" name="phone" placeholder="Phone #"></TextInput>
            </InputWrapper>
            <InputWrapper>
                <InputLabel>Email Address</InputLabel>
                <TextInput type="text" name="email" placeholder="Email"></TextInput>
            </InputWrapper>
        </FormSection>
        <FormSection style={{flexDirection:"column"}}>
        <Explainer>
            Skills we need.
        </Explainer>     
                <CheckBoxGrid>
                    {skillCheckboxes}            
                </CheckBoxGrid>
        </FormSection>
        
    </FormWrapper>
  )
}






