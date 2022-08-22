import { delay } from "cypress/types/bluebird";
import { Variants } from "framer-motion";

export const verticalAnim: Variants = {
  visible: (y: string) => ({
    translateY: y,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "linear"
    }
  }),
  hidden: (y: string) => ({
    translateY: y,
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear"
    }
  })
}

export const scaleVerticalAnim: Variants = {
  visible: (y: string) => ({}),
  hidden: (y: string) => ({})
}

export const scaleHorizontalAnim: Variants = {
  visible: (x: string) => ({}),
  hidden: (x: string) => ({})
}

export const bottomUpAnim: Variants = {
  initial: {
    translateY: "100%"
  },
  animate: {
    translateY: "0%",
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear"
    }
  },
  exit: {
    translateY: "-100%",
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear"
    }
  }
}

export const FadeOutScaleUpAnim: Variants = {
  visible: (d: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      delay: d || 0.2
    }
  }),
  hidden: {
    scale: 0,
    opacity: 0
  }
}

export const scaleAnim: Variants = {
  visible: (d: number) => ({
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "linear",
      delay: d || 200
    }
  }),
  hidden: () => ({
    scale: 0
  })
}

export const horizontalAnim: Variants = {
  visible: (x: string) => ({
    translateX: x,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "linear"
    }
  }),
  hidden: (x: string) => ({
    translateX: x,
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear"
    }
  })
}

export const fade: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "linear"
    }
  },
  hidden: {
    opacity: 0
  }
}