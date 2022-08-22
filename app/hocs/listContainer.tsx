import React from "react";

type withListContainerProps<U> = {
   list: U[],
   batchSize: number,
   listSize: number,
}

export function withListContainer<U,T extends withListContainerProps<U>>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {

        const [newList,setNewList] = React.useState<U[]>([]);
        const [currBatch,setCurrBatch] = React.useState<number>(1);

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

        return (
            <section className="px-[10vw] relative flex flex-col items-center gap-5">
                <WrappedComponent {...props} list={newList} />
                
            </section>
        )
    }
}