import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const getIntervals = (childs: NodeListOf<ChildNode>) : number[] => {
  const xGap = childs.length > 1 ? (childs[1].getBoundingClientRect().left - (childs[0].getBoundingClientRect().left + childs[0].getBoundingClientRect().width)) : 0;
  const elmWidth = childs[0].getBoundingClientRect().width;
  const intervalGap = elmWidth + xGap

  const intervals = [0];

  for(let i = 1; i < childs.length; i++){
     intervals[i] = intervals[i-1]+intervalGap;
  }

  return intervals;
}

const scrollRight = (parent : HTMLElement,intervals: number[])  => {

  const xScrolled = parent.scrollLeft;
  
  let intervalIndex = -1;
  
  for(let i = 1;  i < intervals.length; i++){
    if(xScrolled >= intervals[i-1]-1 && xScrolled <= intervals[i]-1){
      intervalIndex = i;
      break;
    }
  }

  parent.scrollTo({behavior: "smooth",left: xScrolled + (intervals[intervalIndex] - xScrolled)})
}

const scrollLeft = (parent : HTMLElement,intervals: number[]) => {
  const xScrolled = parent.scrollLeft;

  
  let intervalIndex = -1;
  
  for(let i = 1;  i < intervals.length; i++){
    if(xScrolled >= intervals[i-1]+1 && xScrolled <= intervals[i]+1){
      intervalIndex = i-1;
      break;
    }
  }

  parent.scrollTo({behavior: "smooth",left: xScrolled - (xScrolled - intervals[intervalIndex])})
}

const autoScroll = (parent : HTMLElement,intervals: number[]) => {
  scrollRight(parent,intervals)
}

const XScrollableComponent : React.FC = ({children}) => {

  const containerRef = React.useRef<HTMLElement | null>(null);
  const [intervals,setIntervals] = React.useState<number[] | null>(null);

  const handleLeftScroll = () => {
      if(containerRef.current && intervals){
        scrollLeft(containerRef.current,intervals);
      }
  }

  const handleRightScroll = () => {
    if(containerRef.current && intervals){
      scrollRight(containerRef.current,intervals);
    }
  }

  const handleResize = () => {
    console.log("resizeing")
    if(containerRef.current){
      setIntervals(getIntervals(containerRef.current.childNodes))
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize",handleResize);
    return () => window.removeEventListener("resize",handleResize);
  },[]);

  React.useEffect(() => {
     if(containerRef.current){
      setIntervals(getIntervals(containerRef.current.childNodes))
     }
  },[containerRef])

  React.useEffect(() => {
        const interval = setInterval(() => {
          if(containerRef.current && intervals){
            autoScroll(containerRef.current!,intervals);
          }
       },3000)
       return () => clearInterval(interval);
  },[containerRef,intervals])

  return (
    <div className='h-auto col-start-1 col-span-full overflow-x-auto flex flex-row gap-2 lg:gap-10 items-center no-scrollbar'>
        <section className='h-auto w-24 lg:w-28 flex justify-center items-center'>
        <MdArrowBackIosNew className='h-10 w-10 lg:h-[100px] lg:w-[100px] fill-gray-400' onClick={handleLeftScroll.bind(null)} />
        </section>
        <section ref={containerRef} className='h-auto overflow-x-auto overflow-y-hidden flex flex-row gap-5 lg:gap-10 no-scrollbar'>
        {children}
        </section>
        <section className='h-auto w-24 lg:w-28 flex justify-center items-center'>
            <MdArrowForwardIos className='h-10 w-10 lg:h-[100px] lg:w-[100px] fill-gray-400' onClick={handleRightScroll.bind(null)} />
        </section>
    </div>
  )
}

export default XScrollableComponent;