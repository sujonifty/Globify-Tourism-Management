import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const LottieAnimation = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
    
      const { View } = useLottie(options);
    return (
        <div>
            { View }
        </div>
    );
};

export default LottieAnimation;