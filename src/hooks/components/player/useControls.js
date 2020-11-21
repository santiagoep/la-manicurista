import { useEffect } from "react";

const useControls = ({ src, player }) => {
  const play = () => {
    if (src) {
      player?.current?.play();
    }
  };
  const pause = () => player?.current?.pause();

  useEffect(() => {
    if (!src) pause();
  }, [src]);

  return { play, pause };
};
export default useControls;
