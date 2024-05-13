import { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface IProps {
  animationData: any;
  loop?: boolean;
}

export default function LottiePlayer({ animationData, loop = true }: IProps) {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  if (animationContainer.current) {
    animationContainer.current!.style!.width = "450px";
  }

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop,
      autoplay: true,
      animationData,
    });

    return () => {
      anim.destroy();
    };
  }, [animationData, loop]);

  return <div ref={animationContainer}></div>;
}
