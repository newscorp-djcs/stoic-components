import * as React from 'react';
import {Button} from '..';
import {styled} from '../../utils/style';
import {ButtonOverrides, ButtonSize} from '../types';
import {IconFilledEmail} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {IconSizeKeys} from '../../theme';
import {StorybookSubHeading} from '../../test/storybook-comps';

const Container = styled.div`
  margin: 24px;
`;

const Border = styled.div`
  border: solid 1px red;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: attr(data-state);
    margin-right: 48px;
  }

  ${getMediaQueryFromTheme('xs')} {
    &::before {
      content: none;
    }
  }
`;

const Label = styled.div`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

interface IntentKindStylePreset {
  kind: string;
  intentStylePreset: string;
}

const buttonSizes: Array<{
  buttonSize: ButtonSize;
  iconSize: string;
}> = [
  {buttonSize: ButtonSize.Small, iconSize: 'iconSize040'},
  {buttonSize: ButtonSize.Medium, iconSize: 'iconSize050'},
  {buttonSize: ButtonSize.Large, iconSize: 'iconSize050'},
];

const states = ['Default', 'Focused', 'Disabled', 'Loading'];

const ButtonIntentKindsScenario: React.FC<{
  name: string;
  buttonIntents: IntentKindStylePreset[];
  overrides: ButtonOverrides;
}> = ({name, buttonIntents: buttonKinds, overrides}) => (
  <>
    <StorybookSubHeading>{name}</StorybookSubHeading>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <h3>State</h3>
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {buttonKinds.map(({kind, intentStylePreset: stylePreset}) => {
        const kindOverrides = {...overrides, stylePreset};
        return (
          <Cell xs={4} sm={3}>
            <Stack
              spaceInline="space020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{kind}</h3>
              <Block data-state="Default">
                <Button overrides={kindOverrides}>Button</Button>
              </Block>
              <Block data-state="Focused">
                <Button autoFocus overrides={kindOverrides}>
                  Button
                </Button>
              </Block>
              <Block data-state="Disabled">
                <Button disabled overrides={kindOverrides}>
                  Button
                </Button>
              </Block>
              <Block data-state="Loading">
                <Button aria-label="Loading" overrides={kindOverrides} loading>
                  Button
                </Button>
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </>
);

export default {
  name: 'button',
  children: [
    {
      name: 'button-size',
      type: 'story',
      component: () => (
        <>
          <StorybookSubHeading>Button Size</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="space070"
              spaceStack="space070"
              wrap="wrap"
            >
              <Button size={ButtonSize.Small}>Small button</Button>
              <Button size={ButtonSize.Medium}>Medium button</Button>
              <Button size={ButtonSize.Large}>Large button</Button>
            </Stack>
          </Container>
        </>
      ),
    },
    {
      name: 'full-and-fixed-width-button',
      type: 'story',
      component: () => (
        <>
          <StorybookSubHeading>Full-Width Button</StorybookSubHeading>
          <Container>
            <Border>
              <Spacer>
                <Button size={ButtonSize.Small} overrides={{width: '100%'}}>
                  Small full-width button
                </Button>
              </Spacer>
              <Spacer>
                <Button size={ButtonSize.Medium} overrides={{width: '100%'}}>
                  Medium full-width button
                </Button>
              </Spacer>
              <Button size={ButtonSize.Large} overrides={{width: '100%'}}>
                Large full-width button
              </Button>
            </Border>
          </Container>
          <StorybookSubHeading>Fixed-Width Button</StorybookSubHeading>
          <Container>
            <Border>
              <Spacer>
                <Button
                  size={ButtonSize.Small}
                  overrides={{width: 'sizing120'}}
                >
                  Small fixed-width button
                </Button>
              </Spacer>
              <Spacer>
                <Button
                  size={ButtonSize.Medium}
                  overrides={{width: 'sizing120'}}
                >
                  Medium fixed-width button
                </Button>
              </Spacer>
              <Button size={ButtonSize.Large} overrides={{width: 'sizing120'}}>
                Large fixed-width button
              </Button>
            </Border>
          </Container>
        </>
      ),
    },
    {
      name: 'button-intent-primary',
      type: 'story',
      component: () => (
        <ButtonIntentKindsScenario
          name="Button Intent Primary"
          buttonIntents={[
            {kind: 'Solid', intentStylePreset: 'buttonSolidPrimary'},
            {kind: 'Outlined', intentStylePreset: 'buttonOutlinedPrimary'},
            {kind: 'Minimal', intentStylePreset: 'buttonMinimalPrimary'},
          ]}
          overrides={{
            loadingIndicator: {
              stylePreset: 'indeterminateProgressIndicatorPrimary',
            },
          }}
        />
      ),
    },
    {
      name: 'button-intent-secondary',
      type: 'story',
      component: () => (
        <ButtonIntentKindsScenario
          name="Button Intent Secondary"
          buttonIntents={[
            {kind: 'Solid', intentStylePreset: 'buttonSolidSecondary'},
            {kind: 'Outlined', intentStylePreset: 'buttonOutlinedSecondary'},
            {kind: 'Minimal', intentStylePreset: 'buttonMinimalSecondary'},
          ]}
          overrides={{
            loadingIndicator: {
              stylePreset: 'indeterminateProgressIndicatorSecondary',
            },
          }}
        />
      ),
    },
    {
      name: 'button-intent-negative',
      type: 'story',
      component: () => (
        <ButtonIntentKindsScenario
          name="Button Intent Negative"
          buttonIntents={[
            {kind: 'Solid', intentStylePreset: 'buttonSolidNegative'},
            {kind: 'Outlined', intentStylePreset: 'buttonOutlinedNegative'},
            {kind: 'Minimal', intentStylePreset: 'buttonMinimalNegative'},
          ]}
          overrides={{
            loadingIndicator: {
              stylePreset: 'indeterminateProgressIndicatorNegative',
            },
          }}
        />
      ),
    },
    {
      name: 'button-intent-positive',
      type: 'story',
      component: () => (
        <ButtonIntentKindsScenario
          name="Button Intent Positive"
          buttonIntents={[
            {kind: 'Solid', intentStylePreset: 'buttonSolidPositive'},
            {kind: 'Outlined', intentStylePreset: 'buttonOutlinedPositive'},
            {kind: 'Minimal', intentStylePreset: 'buttonMinimalPositive'},
          ]}
          overrides={{
            loadingIndicator: {
              stylePreset: 'indeterminateProgressIndicatorPositive',
            },
          }}
        />
      ),
    },
    {
      name: 'button-with-icons',
      type: 'story',
      component: () => (
        <>
          <StorybookSubHeading>Button with leading icon</StorybookSubHeading>
          <Container>
            {[Pause, Email, IconFilledLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" spaceInline="space060">
                  {buttonSizes.map(button => (
                    <Button size={button.buttonSize}>
                      <IconType />
                      Button
                    </Button>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
          <StorybookSubHeading>Button with trailing icon</StorybookSubHeading>
          <Container>
            {[Pause, Email, IconFilledLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" spaceInline="space060">
                  {buttonSizes.map(button => (
                    <Button size={button.buttonSize}>
                      Button
                      <IconType />
                    </Button>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
          <StorybookSubHeading>
            Button with leading and trailing icon
          </StorybookSubHeading>
          <Container>
            {[Pause, Email, IconFilledLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" spaceInline="space060">
                  <Button size={buttonSizes[0].buttonSize}>
                    <IconType />
                    Button
                    {/* size to be removed as part of PPDSC-1341 */}
                    <IconType
                      size={buttonSizes[0].iconSize}
                      overrides={{size: buttonSizes[0].iconSize}}
                    />
                  </Button>
                </Stack>
              </Spacer>
            ))}
          </Container>
        </>
      ),
    },
    {
      name: 'button-with-icon-size-overrides',
      type: 'story',
      component: () => (
        <>
          <StorybookSubHeading>
            Button with icon and inline overridden size
          </StorybookSubHeading>
          <Container>
            {[Pause, Email, IconFilledLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" spaceInline="space060">
                  <Button
                    size={buttonSizes[0].buttonSize}
                    overrides={{iconSize: 'iconSize030'}}
                  >
                    <IconType />
                    Button
                    {/* size to be removed as part of PPDSC-1341 */}
                    <IconType
                      size={buttonSizes[0].iconSize}
                      overrides={{size: buttonSizes[0].iconSize}}
                    />
                  </Button>
                </Stack>
              </Spacer>
            ))}
          </Container>
        </>
      ),
    },
    {
      name: 'button-style-at-breakpoints',
      type: 'story',
      component: () => (
        <>
          <StorybookSubHeading>Button style at breakpoints</StorybookSubHeading>
          <Container>
            <Button
              overrides={{
                stylePreset: {
                  xs: 'buttonOutlinedNegative',
                  md: 'buttonSolidPositive',
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any,
              }}
            >
              Negative XS - Positive MD
            </Button>
          </Container>
        </>
      ),
    },
  ],
};
