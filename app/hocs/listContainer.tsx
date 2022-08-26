import React from "react";
import { useInView } from "react-intersection-observer";
import BatchTracker from "~/components/ui/batchTracker";
import SectionWrapper, { SectionWrapperProps } from "~/components/wrappers/sectionWrapper";

export type withListContainerProps<U> = {
   list: U[],
   batchSize: number,
   listSize: number,
   containerId: string,
   sectionHeading: string
   actionButton?: SectionWrapperProps["actionButton"]
}

export function withListContainer<U,T extends withListContainerProps<U>>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {

        const [newList,setNewList] = React.useState<U[]>([]);
        const [currBatch,setCurrBatch] = React.useState<number>(1);
        const {inView,ref} = useInView({threshold: 0});
        const [intervalId, setIntervalId] = React.useState<any>(0);
        const [userIntervention,setUserIntervention] = React.useState<boolean>(false);

        const noOfBatches = React.useMemo(() => {
            return Math.ceil(props.listSize/props.batchSize)
        },[])
        

        const filterList = React.useCallback(() => {
            if(currBatch > noOfBatches){
                return;
            }
            const start = (currBatch-1)*props.batchSize;
            const end = start+props.batchSize
            setNewList(props.list.slice(start,end))
        },[currBatch,newList])

        React.useEffect(() => {
            filterList();
        },[currBatch])

        console.log(currBatch,noOfBatches)

        React.useEffect(() => {
            let interval : NodeJS.Timer;
            if(inView ){
              interval = setInterval(() => {
                setCurrBatch(prev => {
                    if(prev === noOfBatches){
                        return 1
                    }
                    return prev+1
                })
              },3000)
              setIntervalId(interval)
            }
            return () => {
                clearInterval(intervalId)
                setIntervalId(0)
            }
        },[inView])

        React.useEffect(() => {
            if(intervalId && !inView){
                clearInterval(intervalId)
                setIntervalId(0)
            }
        },[inView])

        React.useEffect(() => {
            if(userIntervention){
                clearInterval(intervalId)
                setIntervalId(0)
            }
        },[userIntervention])

        return (
            <SectionWrapper id={props.containerId} heading={props.sectionHeading} actionButton={props.actionButton}>
            <section ref={ref} className="relative flex flex-col items-center gap-5 col-start-1 col-span-full">
                <WrappedComponent {...props} list={newList} />
                <BatchTracker currBatchNo={currBatch} setCurrBatchNo={setCurrBatch} noOfBatches={noOfBatches} setUserIntervention={setUserIntervention} /> 
            </section>
            </SectionWrapper>
        )
    }
}