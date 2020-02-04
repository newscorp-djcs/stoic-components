import React from 'react';
import {Image} from '../../image';
import {
  MetaArea,
  InfoArea,
  LiveTag,
  ProgrammeTime,
  ProgrammeTitle,
  ProgrammeDescription,
  ProgrammeTags,
  ImageContainer,
} from '../styled';

export interface PlayerMetaProps {
  imgSrc: string;
  imgAlt: string;
  title?: string;
  time?: string;
  description?: string;
  live?: boolean;
  tags?: string[];
}

export const PlayerMeta: React.FC<PlayerMetaProps> = React.memo(
  ({imgSrc, imgAlt, time, live, title, description, tags}) => (
    <MetaArea>
      <ImageContainer>
        <Image
          src={imgSrc}
          alt={imgAlt}
          aspectHeight="1"
          aspectWidth="1"
          $stylePreset="maskRound010"
        />
      </ImageContainer>
      <InfoArea>
        <div>
          {live && <LiveTag>Live</LiveTag>}
          {time && <ProgrammeTime>{time}</ProgrammeTime>}
        </div>
        {title && <ProgrammeTitle>{title}</ProgrammeTitle>}
        {description && (
          <ProgrammeDescription>{description}</ProgrammeDescription>
        )}
        {tags && tags.length > 0 && (
          <ProgrammeTags>
            {tags.map((tag, i) => `${tag}${i <= tags.length - 2 ? ' | ' : ''}`)}
          </ProgrammeTags>
        )}
      </InfoArea>
    </MetaArea>
  ),
);
