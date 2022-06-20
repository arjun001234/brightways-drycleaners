import {  Variants } from "framer-motion";

export const verticalAnim : Variants = {
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

export const scaleVerticalAnim : Variants = {
    visible: (y: string) => ({}),
    hidden: (y: string) => ({})
}

export const scaleHorizontalAnim : Variants = {
    visible: (x: string) => ({}),
    hidden: (x: string) => ({})
}

export const bottomUpAnim : Variants = {
  initial: {
    translateY: "100%",
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear"
    }
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

export const scaleAnim : Variants = {
    visible: () => ({
      scale: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "linear"
      }
    }),
    hidden: () => ({
      scale: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "linear"
      }
    })
}

export const horizontalAnim : Variants = {
    visible: (x :string) => ({
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

 export const fade : Variants = {
  visible: () => ({
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "linear",
      staggerChildren: 0.5,
      delayChildren: 0.5
    }
 }),
  hidden: () => ({
    opacity: 0
  })
}