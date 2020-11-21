import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import {
  StyledSpan,
  StyledContainer,
  StyledErrorMessage,
  StyledSelectATrack,
} from "./TrackDetail.styled";
import Artists from "../Artists/Artists";
import Player from "@components/Player/Player";
import MusicIcon from "@components/Icons/Music";
import useTrackDetail from "@hooks/components/track-detail/useTrackDetail";

const TrackDetail = ({
  imgPreviews,
  name,
  artists,
  preview,
  onClick,
  ...rest
}) => {
  const { t } = useTranslation();
  const { error, currentImgPreview, validations } = useTrackDetail({
    imgPreviews,
    preview,
  });
  const { showBorder, showPlayer } = validations;
  return (
    <StyledContainer showBorder={showBorder} {...rest}>
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      {showPlayer ? (
        <Player
          img={currentImgPreview}
          name={name}
          src={preview}
          artists={artists}
          autoPlay
        />
      ) : (
        <StyledSelectATrack>
          <MusicIcon />
          <StyledSpan>{t("selectATrack")}</StyledSpan>
        </StyledSelectATrack>
      )}
    </StyledContainer>
  );
};

TrackDetail.propTypes = {
  imgPreviews: PropTypes.shape({
    small: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    medium: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    large: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
  preview: PropTypes.string,
  name: PropTypes.string,
  artists: Artists.propTypes.artists,
  onClick: PropTypes.func,
};

TrackDetail.defaultProps = {
  preview: undefined,
  imgPreviews: undefined,
  name: undefined,
  artists: undefined,
  onClick: () => {},
};

export default TrackDetail;
