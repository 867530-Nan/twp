import React, { Component } from 'react';
import styled from 'styled-components';

import { BLDiv, BLButton, BLSectionHeader, media } from '../../styles/GenericStyledComponents';
import { Form } from 'semantic-ui-react'
import BLStyleGuide from '../../styles/TWPStyleGuide';
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const ContactForm = styled(Form)`
  font-family: ${BLStyleGuide.font.family.monoFur};
`;

const FormInput = styled(Form.Input)`
  font-size: ${BLStyleGuide.font.size.mediumSmall};
`;

const FormTextArea = styled(Form.TextArea)`
  font-size: ${BLStyleGuide.font.size.mediumSmall};
`;

const SubmitButton = BLButton.extend`
  width: 20%;
  background-color: ${TWPStyleGuide.color.darkGreen};
  color: ${TWPStyleGuide.color.white};
  border: none;
  font-size: ${TWPStyleGuide.font.size.medium};

  &:hover {
    background-color: ${TWPStyleGuide.color.white};
    color: ${TWPStyleGuide.color.darkGreen}
  }
  ${media.tablet`
    width: 75%
  `}  
`;

const CancelButton = BLButton.extend`
  width: 20%;
  background-color: red;
  color: ${TWPStyleGuide.color.white};
  border: none;
  font-size: ${TWPStyleGuide.font.size.medium};

  &:hover{
    background-color: ${TWPStyleGuide.color.white};
    color: red;
  }
  ${media.tablet`
    width: 75%
  `}  
`;

const ButtonSection = BLDiv.extend`
  flex-direction: row;
  height: 100px;
  justify-content: space-evenly;
  ${media.tablet`
    flex-direction: column;
    height: 200px;
  `}  
`;

class CommentForm extends Component {
  
  render() {
      return (
        <BLDiv 
          display={'block'}
          position={'relative'}
          padding={'4% 5%'}
          backgroundColor={TWPStyleGuide.color.lightGray}
        >
          <BLSectionHeader 
            margin={'0 0 30px 0'}
            fontSize={TWPStyleGuide.font.size.medium}
            tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
          >
            Backyards, Front Lawn, or Alley Way<br/>- Submit a Site -<br/>Support your community and it's ecosystem. . . 
          </BLSectionHeader>
          <ContactForm>
            <Form.Group 
              widths='equal'
            >
              <FormInput 
                fluid 
                onChange={this.props.handleChange}
                id="firstName"
                label='First name' 
                placeholder='First name' 
              />
              <FormInput 
                fluid 
                onChange={this.props.handleChange}
                id="lastName"
                label='Last name' 
                placeholder='Last name' 
              />
            </Form.Group>
            <FormInput 
                onChange={this.props.handleChange}
                id="email"
              label='Email' 
              placeholder='me@email.com' 
            />
            <FormTextArea 
                onChange={this.props.handleChange}
                id="message"
              label="Type Message Below" 
              placeholder="I have this plot of grass..." 
            />
          </ContactForm>
          <ButtonSection>
            <SubmitButton 
              onClick={this.props.commentSubmitFunction}
              >
              Submit
            </SubmitButton>
            <CancelButton 
              onClick={this.props.commentDisplay}
              >
              Cancel
            </CancelButton>
          </ButtonSection>
        </BLDiv>
    );
  }
}

export default CommentForm;
