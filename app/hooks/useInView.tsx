import React from 'react'
import { IntersectionOptions } from 'react-intersection-observer'


const useInView = (options: IntersectionOptions,once: boolean = true) => {

     const ref = React.useRef(null);

     const [inView,setInView] = React.useState(false);

     const callback = async (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        setInView((prev) => {
            if(prev && once){
                return true
            }else{
                return entry.isIntersecting
            }
        })
     }

     React.useEffect(() => {
        const observer = new IntersectionObserver(callback,options)
        if (ref.current) observer.observe(ref.current)
        return () => {
         if (ref.current) observer.unobserve(ref.current)
        }
     },[ref])

     return {inView,ref}
}

export default useInView