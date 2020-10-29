import * as React from "react";
import Lottie from 'react-lottie';

const LottieAnimation = ({animation, width}) => (
  <Lottie
    width={width}
    isClickToPauseDisabled={true}
    isStopped={false}
    isPaused={false}
    options={{
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }}
  />
)
export default LottieAnimation;
