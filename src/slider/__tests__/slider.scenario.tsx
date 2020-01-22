import React from 'react';

import {StatefulSlider} from '..';
import {styled} from '../../utils/style';
import {ThumbLabelProps} from '../types';
import {StorybookHeading} from '../../test/storybook-comps';

export const name = 'slider';

const Svg = styled.svg`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;

const CustomMinLabel: React.FC = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
  </Svg>
);

// eslint-disable-next-line react/prefer-stateless-function
class CustomMaxLabel extends React.Component {
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
      </Svg>
    );
  }
}

const Container = styled.div`
  border: solid 1px red;
  margin: 24px 0;
  display: flex;
`;

const VerticalContainer = styled.div`
  border: solid 1px red;
  display: inline-flex;
  height: 300px;
  margin: 0 24px;
`;

const StyledCustomThumbLabel = styled.h1`
  margin: 0;
  font-family: fantasy;
  color: seagreen;
  bottom: -35px;
  position: relative;
`;
const CustomThumbLabel: React.FC<ThumbLabelProps> = ({children, ...props}) => (
  <StyledCustomThumbLabel {...props}>{`${children}%`}</StyledCustomThumbLabel>
);

export const component = () => (
  <React.Fragment>
    <StorybookHeading>1 thumb slider</StorybookHeading>
    <Container>
      <StatefulSlider values={[50]} max={100} min={0} />
    </Container>
    <StorybookHeading>2 thumb slider</StorybookHeading>
    <Container>
      <StatefulSlider values={[30, 60]} max={100} min={0} />
    </Container>
    <Container>
      <StatefulSlider values={[0, 100]} max={100} min={0} />
    </Container>
    <StorybookHeading>3 thumb slider</StorybookHeading>
    <Container>
      <StatefulSlider values={[25, 50, 75]} max={100} min={0} />
    </Container>
    <StorybookHeading>with labels</StorybookHeading>
    <Container>
      <StatefulSlider values={[2.5]} max={10} min={0} step={0.5} thumbLabel />
    </Container>
    <Container>
      <StatefulSlider values={[10]} max={20} min={0} minLabel="0" />
    </Container>
    <Container>
      <StatefulSlider values={[20]} max={30} min={0} maxLabel="30" />
    </Container>
    <Container>
      <StatefulSlider
        values={[30]}
        max={40}
        min={0}
        minLabel="0"
        maxLabel="40"
        thumbLabel
      />
    </Container>
    <Container>
      <StatefulSlider
        values={[40]}
        max={50}
        min={0}
        minLabel={CustomMinLabel}
      />
    </Container>
    <Container>
      <StatefulSlider
        values={[60]}
        max={70}
        min={0}
        maxLabel={CustomMaxLabel}
      />
    </Container>
    <Container>
      <StatefulSlider
        values={[33]}
        max={80}
        min={0}
        minLabel={CustomMinLabel}
        maxLabel={CustomMaxLabel}
        thumbLabel={CustomThumbLabel}
      />
    </Container>
    <Container>
      <StatefulSlider
        values={[80, 90]}
        max={100}
        min={0}
        minLabel={CustomMinLabel}
        maxLabel={CustomMaxLabel}
        thumbLabel={CustomThumbLabel}
      />
    </Container>
    <VerticalContainer>
      <StatefulSlider values={[20]} max={50} min={0} vertical />
    </VerticalContainer>
    <VerticalContainer>
      <StatefulSlider values={[0, 50]} max={50} min={0} vertical />
    </VerticalContainer>
    <VerticalContainer>
      <StatefulSlider
        values={[50]}
        max={100}
        min={0}
        minLabel="0"
        maxLabel="%"
        vertical
        thumbLabel
      />
    </VerticalContainer>
    <VerticalContainer>
      <StatefulSlider
        values={[50]}
        max={100}
        min={0}
        minLabel="0%"
        maxLabel="100%"
        vertical
        thumbLabel
      />
    </VerticalContainer>
    <VerticalContainer>
      <StatefulSlider
        values={[50]}
        max={100}
        min={0}
        minLabel={CustomMinLabel}
        maxLabel={CustomMaxLabel}
        vertical
      />
    </VerticalContainer>
    <VerticalContainer>
      <StatefulSlider
        values={[50]}
        max={100}
        min={0}
        minLabel={CustomMinLabel}
        maxLabel={CustomMaxLabel}
        thumbLabel={CustomThumbLabel}
        vertical
      />
    </VerticalContainer>
  </React.Fragment>
);