import React from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  link: string;
  center?: boolean;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center, link }) => (
  <Styled.Link href={link} rel="noreferrer noopener" target="_blank">
    <Styled.InfoBlock center={center}>
      <Styled.Icon>
        <Icon  icon={icon} />
      </Styled.Icon>
      <Styled.Wrapper center={center}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Content>{content}</Styled.Content>
      </Styled.Wrapper>
    </Styled.InfoBlock>
  </Styled.Link>
);

export default InfoBlock;
