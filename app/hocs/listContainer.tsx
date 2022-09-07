import React from "react";
import { useInView } from "react-intersection-observer";
import { AppContext } from "~/components/context/appContext";
import BatchTracker from "~/components/ui/batchTracker";
import SectionWrapper, { SectionWrapperProps } from "~/components/wrappers/sectionWrapper";

export type withListContainerProps<U> = {
   list: U[],
   batchSize: number,
   mobileBatchSize: number,
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
        const {isMobile} = React.useContext(AppContext);
        const [batchSize,setBatchSize] = React.useState(isMobile ? props.mobileBatchSize : props.batchSize)

        const noOfBatches = () => {
            return Math.ceil(props.listSize/batchSize)
        }

        React.useEffect(() => {
            setBatchSize(isMobile ? props.mobileBatchSize : props.batchSize)
            setCurrBatch(1)
        },[isMobile])

        React.useEffect(() => {
            if(currBatch > noOfBatches()){
                return;
            }
            const start = (currBatch-1)*batchSize;
            const end = start+batchSize
            setNewList(props.list.slice(start,end))
        },[currBatch,batchSize])

        React.useEffect(() => {
            let interval : NodeJS.Timer;
            if(inView && !userIntervention){
              interval = setInterval(() => {
                setCurrBatch(prev => {
                    if(prev === noOfBatches()){
                        return 1
                    }
                    return prev+1
                })
              },5000)
              setIntervalId(interval)
            }
            if(intervalId && !inView){
                clearInterval(intervalId)
                setIntervalId(0)
            }
            if(!inView && userIntervention){
                setUserIntervention(false)
            }
            return () => {
                clearInterval(intervalId)
                setIntervalId(0)
            }
        },[inView])

        const handleBatchChange = (id: number) => {
            setCurrBatch(id)
            setUserIntervention(true)
            clearInterval(intervalId)
            setIntervalId(0)
        }

        return (
            <SectionWrapper id={props.containerId} heading={props.sectionHeading} actionButton={props.actionButton}>
            <section ref={ref} className="relative flex flex-col items-center gap-5 col-start-1 col-span-full">
                <WrappedComponent {...props} list={newList} />
                <BatchTracker currBatchNo={currBatch} noOfBatches={noOfBatches()} handleBatchChange={handleBatchChange} /> 
            </section>
            </SectionWrapper>
        )
    }
}