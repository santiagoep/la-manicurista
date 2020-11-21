import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useMobile } from "@hooks/useBreakpoint";

const useTrackDetail = ({ imgPreviews, preview }) => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  const [error, setError] = useState(undefined);
  const currentImgPreview = isMobile ? imgPreviews?.medium : imgPreviews?.large;
  useEffect(() => {
    if (imgPreviews && !preview) {
      setError(t("noTrackPreview"));
    } else {
      setError(undefined);
    }
  }, [preview, imgPreviews]);

  return {
    currentImgPreview,
    error,
    validations: {
      showBorder: !preview && !imgPreviews,
      showPlayer: preview || imgPreviews,
    },
  };
};

export default useTrackDetail;
