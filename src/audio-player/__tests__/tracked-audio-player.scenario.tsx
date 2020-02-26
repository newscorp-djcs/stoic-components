import * as React from 'react';
import {TrackedAudioPlayer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

export const name = 'tracked-audio-player';

const imgSrc = require('./radio-player-image.png');

const podcast1 = {
  src:
    'https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3',
  imgAlt: 'test image 1',
  title: 'title 1',
  live: false,
  imgSrc,
  captionSrc: 'captions.vtt',
  time: '1PM to 3PM',
  description: 'Test description',
  tags: ['Tag 1', 'Tag 2'],
};

const podcast2 = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  imgAlt: 'test image 2',
  title: 'title 2',
  live: false,
  imgSrc,
  captionSrc: 'captions.vtt',
};

const podcast3 = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  imgAlt: 'test image 3',
  title: 'title 3',
  live: false,
  imgSrc,
  captionSrc: 'captions.vtt',
};

const audioTrackList = [podcast1, podcast2, podcast3];

const Container = styled.div`
  width: 800px;
  margin: auto;
`;

export const component = () => (
  <Container>
    <div>
      <StorybookHeading>Skippable Player with static audio</StorybookHeading>
      <TrackedAudioPlayer trackList={audioTrackList} />
    </div>
  </Container>
);
