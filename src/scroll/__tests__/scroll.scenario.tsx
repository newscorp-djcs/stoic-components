import * as React from 'react';
import {Scroll, ScrollFlow} from '..';
import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {Stack} from '../../stack/stack';

const MainContainer = styled.div`
  max-height: 768px;
  max-width: 1024px;
  margin: 0 auto;
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

export default {
  name: 'scroll',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Scroll with default only</StorybookHeading>
          <Container>
            <Scroll>
              <Block>
                <Stack flow="horizontal-top">{tags}</Stack>
              </Block>
            </Scroll>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'horizontal-scroll',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Scroll flow set to {ScrollFlow.horizontal}
          </StorybookHeading>
          <Container>
            <Scroll flow={ScrollFlow.horizontal}>
              <Block>
                <Stack flow="horizontal-center" spaceInline="sizing040">
                  {tags}
                </Stack>
              </Block>
            </Scroll>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'vertical-scroll',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Scroll flow set to {ScrollFlow.vertical}
          </StorybookHeading>
          <Container>
            <Scroll flow={ScrollFlow.vertical}>
              <Block>
                <Stack flow="vertical-left" spaceInline="sizing040">
                  {tags}
                </Stack>
              </Block>
            </Scroll>
          </Container>
        </MainContainer>
      ),
    },
  ],
};
