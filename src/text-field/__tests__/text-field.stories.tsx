import * as React from 'react';
import {AssistiveText, TextField, TextFieldSize} from '..';
import {Block} from '../../block';
import {Button} from '../../button';
import {Cell, Grid} from '../../grid';
import {IconButton} from '../../icon-button';
import {
  IconFilledAccountBalance,
  IconFilledAccountTree,
  IconFilledClose,
  IconFilledSearch,
} from '../../icons';
import {Stack} from '../../stack';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {styled, getSizingCssFromTheme} from '../../utils/style';
import {Label} from '../label';

const CustomBlock = styled.div`
  margin-right: 12px;
`;
const Container = styled.div`
  ${getSizingCssFromTheme('margin', 'sizing080')};
`;

const myCustomTheme = createTheme({
  name: 'my-custom-text-input-theme',
  overrides: {
    stylePresets: {
      inputContainerCustom: {
        base: {
          borderStyle: 'solid',
          borderColor: '#D20600',
        },
      },
      labelOverrides: {
        base: {
          color: '#0ed200',
        },
      },
      assistiveTextOverrides: {
        base: {
          color: '#0ed200',
        },
      },
    },
  },
});

export default {
  title: 'NewsKit Light/text-field',
  component: () => 'None',
  disabledRules: ['color-contrast'],
};
export const TextFieldSizeExamples = () => (
  <React.Fragment>
    <StorybookHeading>Text Field Sizes</StorybookHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space070"
        spaceStack="space050"
        wrap="wrap"
      >
        <Block>
          {[
            {id: 'id-29', size: TextFieldSize.Small},
            {id: 'id-30', size: TextFieldSize.Medium},
            {id: 'id-31', size: TextFieldSize.Large},
          ].map(({id, size}) => (
            <Block>
              <Grid>
                <Cell xs={12}>
                  <StorybookSubHeading>{size}</StorybookSubHeading>
                  <Label htmlFor={id} size={size}>
                    A Label
                  </Label>
                  <TextField
                    aria-describedby={`${id}-at`}
                    id={id}
                    size={size}
                  />
                  <AssistiveText id={`${id}-at`} size={size}>
                    Assistive Text Goes Here
                  </AssistiveText>
                </Cell>
              </Grid>
            </Block>
          ))}
        </Block>
      </Stack>
    </Container>
  </React.Fragment>
);
export const TextFieldBasics = () => (
  <React.Fragment>
    <StorybookHeading>Text field states</StorybookHeading>

    <Grid>
      <Cell xs={4}>
        <CustomBlock data-state="Default">
          <StorybookSubHeading>Default</StorybookSubHeading>
          <Label htmlFor="id-2">Label </Label>
          <TextField aria-describedby="id-2-at" id="id-2" />

          <AssistiveText id="id-2-at">Assistive Text</AssistiveText>
        </CustomBlock>
      </Cell>
      <Cell xs={4}>
        <CustomBlock>
          <StorybookSubHeading>Valid</StorybookSubHeading>
          <Label htmlFor="id-3">Label </Label>
          <TextField state="valid" aria-describedby="id-3-at" id="id-3" />

          <AssistiveText state="valid" id="id-3-at">
            Assistive Text
          </AssistiveText>
        </CustomBlock>
      </Cell>

      <Cell xs={4}>
        <CustomBlock>
          <StorybookSubHeading>Invalid</StorybookSubHeading>
          <Label htmlFor="id-33">Label </Label>
          <TextField state="invalid" aria-describedby="id-33-at" id="id-33" />

          <AssistiveText state="invalid" id="id-33-at">
            Assistive Text
          </AssistiveText>
        </CustomBlock>
      </Cell>

      <Cell xs={4}>
        <CustomBlock>
          <StorybookSubHeading>Disabled</StorybookSubHeading>
          <Label state="disabled" htmlFor="id-4">
            Label
          </Label>
          <TextField state="disabled" aria-describedby="id-4-at" id="id-4" />
          <AssistiveText state="disabled" id="id-4-at">
            Assistive Text
          </AssistiveText>
        </CustomBlock>
      </Cell>
      <Cell xs={4}>
        <CustomBlock data-state="Focus">
          <StorybookSubHeading>Auto Focus</StorybookSubHeading>
          <Label htmlFor="id-5">Label</Label>
          <TextField autoFocus aria-describedby="id-5-at" id="id-5" />
          <AssistiveText id="id-5-at">Assistive Text</AssistiveText>
        </CustomBlock>
      </Cell>
      <Cell xs={4}>
        <CustomBlock data-state="Read-Only">
          <StorybookSubHeading>Read Only</StorybookSubHeading>
          <Label htmlFor="id-6">Label </Label>
          <TextField readOnly aria-describedby="id-6-at" id="id-6" />
          <AssistiveText id="id-6-at">Assistive Text</AssistiveText>
        </CustomBlock>
      </Cell>
    </Grid>
  </React.Fragment>
);
export const TextFieldWithOverrides = () => (
  <React.Fragment>
    <StorybookHeading>Text With Overrides</StorybookHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Label
          htmlFor="id-7"
          overrides={{
            stylePreset: 'labelOverrides',
          }}
        >
          Label
        </Label>
        <TextField
          aria-describedby="id-7-at"
          id="id-7"
          overrides={{
            stylePreset: 'inputContainerCustom',
            typographyPreset: 'utilityBody030',
            spaceInset: 'spaceInset040',
            minHeight: 'sizing090',
            spaceStack: 'space000',
          }}
        />
        <Block spaceStack="space020" />
        <AssistiveText
          id="id-7-at"
          overrides={{
            stylePreset: 'assistiveTextOverrides',
          }}
        >
          Assistive Text
        </AssistiveText>
      </ThemeProvider>
    </Container>
  </React.Fragment>
);
export const TextFieldIcons = () => (
  <React.Fragment>
    <Container>
      <StorybookSubHeading>
        With Icons and Icon placement overrides
      </StorybookSubHeading>
      <Label htmlFor="id-8"> Icons</Label>
      <TextField
        aria-describedby="id-8-at"
        id="id-8"
        startEnhancer={
          <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
        }
        endEnhancer={
          <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
        }
        overrides={{
          startEnhancer: {
            spaceInline: 'space050',
          },
          endEnhancer: {
            spaceInline: 'space050',
          },
        }}
      />

      <AssistiveText id="id-8-at">Assistive Text</AssistiveText>
    </Container>
    <Container>
      <StorybookSubHeading>
        With Two Icons and IconSize overrides
      </StorybookSubHeading>
      <Label htmlFor="id-9">Icons</Label>
      <TextField
        aria-describedby="id-9-at"
        id="id-9"
        startEnhancer={
          <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
        }
        endEnhancer={
          <>
            <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            <Block spaceInline="space020" />
            <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
          </>
        }
      />
      <AssistiveText id="id-9-at">Assistive Text</AssistiveText>
    </Container>
  </React.Fragment>
);
export const TextFieldAddOn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const Select = styled.select`
    border: none;
    height: 100%;
    background: none;
    appearance: none;
    width: 40px;
  `;

  const DropDown = () => (
    <Select>
      <option value="bg">BG</option>
      <option value="uk">UK</option>
      <option value="usa">USA</option>
      <option value="de">DE</option>
      <option value="de">NL</option>
    </Select>
  );

  const MyButton = styled.button`
    background: none;
    border: none;
    padding: 0;
  `;

  const blockSpaceStack = '42px';

  return (
    <React.Fragment>
      <StorybookHeading>Text Field With Addons</StorybookHeading>
      <Container>
        <StorybookSubHeading>Text Field with Drop Down</StorybookSubHeading>
        <Block spaceStack={blockSpaceStack}>
          <Label htmlFor="id-10">
            Label
            <TextField
              aria-describedby="id-10-at"
              id="id-10"
              name="dropdown"
              startEnhancer={<DropDown />}
              overrides={{
                startEnhancer: {
                  spaceInline: 'space040',
                },
                endEnhancer: {
                  spaceInline: 'space040',
                },
              }}
            />
          </Label>
          <AssistiveText
            id="id-10-at"
            overrides={{
              typographyPreset: 'utilityLabel030',
            }}
          >
            Assistive Text Goes Here
          </AssistiveText>
        </Block>
        <StorybookSubHeading>Text Field with Icon Button</StorybookSubHeading>
        <Block spaceStack={blockSpaceStack}>
          <Label htmlFor="id-11">Label</Label>
          <TextField
            aria-describedby="id-11-at"
            id="id-11"
            type={!showPassword ? 'password' : 'text'}
            rules={{
              required: 'Required field',
            }}
            endEnhancer={
              <IconButton
                aria-label="toggle password"
                onClick={() => setShowPassword(!showPassword)}
                size="small"
                overrides={{stylePreset: 'iconButtonSolidInverse'}}
              >
                {showPassword ? (
                  <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
                ) : (
                  <IconFilledAccountTree overrides={{size: 'iconSize020'}} />
                )}
              </IconButton>
            }
          />
        </Block>
        <Block spaceStack={blockSpaceStack}>
          <StorybookSubHeading>Text Field with two icons</StorybookSubHeading>
          <p>Please type inside the text field to see second icons</p>
          <Label htmlFor="id-12">Label</Label>
          <TextField
            aria-describedby="id-12-at"
            id="id-12"
            name="icon"
            startEnhancer={
              <IconFilledSearch overrides={{size: 'iconSize020'}} />
            }
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            endEnhancer={
              searchText && (
                <MyButton onClick={() => setSearchText('')}>
                  <IconFilledClose overrides={{size: 'iconSize010'}} />
                </MyButton>
              )
            }
          />
          <AssistiveText id="id-12-at">Assistive Text Goes Here</AssistiveText>
        </Block>
        <Block spaceStack={blockSpaceStack}>
          <Label htmlFor="id-13">Label</Label>
          Label
          <TextField
            aria-describedby="id-13-at"
            id="id-13"
            startEnhancer={
              <IconFilledSearch overrides={{size: 'iconSize020'}} />
            }
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            endEnhancer={
              searchText && (
                <Button size="small" onClick={() => setSearchText('')}>
                  Clear
                </Button>
              )
            }
          />
          <AssistiveText id="id-13-at">Assistive Text Goes Here</AssistiveText>
        </Block>
      </Container>
    </React.Fragment>
  );
};