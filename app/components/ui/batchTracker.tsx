import React from 'react'

type BatchTrackerProps = {
    currBatchNo: number,
    setCurrBatchNo: React.Dispatch<React.SetStateAction<number>>,
    noOfBatches: number
}

const getNumsArr = (len: number) => {
    let res = [];
    for(let i = 1; i <= len; i++){
        res.push(i);
    } 
    return res;
}

const BatchTracker : React.FC<BatchTrackerProps> = ({noOfBatches,setCurrBatchNo,currBatchNo}) => {

    const [items,setItems] = React.useState<number[]>(getNumsArr(noOfBatches));

  return (
    <div className='flex flex-row mx-auto gap-2 justify-center items-center'>
        {
           items.map((item) => <span className={`h-1 w-1 rounded-[50%] border-[1px] ${item === currBatchNo ? "bg-primary border=primary" : "bg-inherit border-black"}`} key={item} onClick={() => setCurrBatchNo(item)}></span>)
        }
    </div>
  )
}

export default BatchTracker