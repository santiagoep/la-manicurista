import styled from "styled-components";

export const StyledPlayer = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledAudio = styled.audio``;

export const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  display: block;
  object-fit: cover;
  ${({ theme }) => theme.breakpoints.md} {
    height: 100%;
  }
`;

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.bg.playerHeader};
  overflow: hidden;
`;

export const StyledPlay = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border: 0;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/1383113001_playback_play.png")
    center center no-repeat;

  &:focus {
    outline: none;
  }
`;

export const StyledPause = styled.button`
  cursor: pointer;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/1383113014_playback_pause.png")
    center center no-repeat;
  height: 30px;
  width: 30px;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const StyledLeft = styled.div`
  padding: ${({ theme }) => theme.utils.spacing(3, 2)};
  ${({ theme }) => theme.breakpoints.md} {
    float: left;
    width: 190px;
    padding: ${({ theme }) => theme.utils.spacing(7.5)};
  }
`;

export const StyledRight = styled.div`
  padding: ${({ theme }) => theme.utils.spacing(2, 2)};
  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.utils.spacing(7.5, 0)};
    float: left;
    width: 150px;
    text-align: center;
  }
`;

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h6};
  color: ${({ theme }) => theme.colors.font.quinary};
`;

export const StyledH2 = styled.h2`
  margin: ${({ theme }) => theme.utils.spacing(1, 0)};
  color: ${({ theme }) => theme.colors.font.tertiary};
`;
