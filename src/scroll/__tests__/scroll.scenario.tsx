import * as React from 'react';
import {Scroll, ScrollFlow} from '..';
import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {newskitLightTheme} from '../../themes';
import {Tag} from '../../tag/tag';
import {Stack} from '../../stack/stack';

export const name = 'scroll';

const MainContainer = styled.div`
  width: 800px;
  margin: auto;
`;

const Container = styled.div`
  background-color: ${getColorFromTheme('neutral020')};
  width: 300px;
  height: 200px;
`;

const Block = styled.div<{flow?: 'horizontal' | 'vertical'}>`
  width: ${({flow = 'horizontal'}) =>
    flow === 'horizontal' ? '800px' : '200px'};
  height: 200px;
`;

const tags = [
  'This',
  'Is',
  'A',
  'Stack',
  'Example',
  'showing',
  'multiple',
  'tags',
].map(item => <Tag>{item}</Tag>);

export const component = () => (
  <MainContainer>
    <StorybookHeading>Scroll with default only</StorybookHeading>
    <Container theme={newskitLightTheme}>
      <Scroll>
        <Block>
          <Stack flow="horizontal-top">{tags}</Stack>
        </Block>
      </Scroll>
    </Container>

    {Object.values(ScrollFlow).map((flowKey: ScrollFlow) => (
      <>
        <StorybookHeading>Scroll flow set to {flowKey}</StorybookHeading>
        <Container theme={newskitLightTheme}>
          <Scroll flow={flowKey}>
            <Block>
              <Stack
                flow={
                  flowKey === 'vertical' ? 'vertical-left' : 'horizontal-center'
                }
                space="sizing040"
              >
                {tags}
              </Stack>
            </Block>
          </Scroll>
        </Container>
      </>
    ))}
  </MainContainer>
);