import React from 'react'

type BatchTrackerProps = {
    currBatchNo: number,
    noOfBatches: number,
    handleBatchChange: (id: number) => void
}

const getNumsArr = (len: number) => {
    let res = [];
    for(let i = 1; i <= len; i++){
        res.push(i);
    } 
    return res;
}

const BatchTracker : React.FC<BatchTrackerProps> = ({noOfBatches,currBatchNo,handleBatchChange}) => {

  const items = getNumsArr(noOfBatches);

  return (
    <div className='flex flex-row mx-auto gap-2 justify-center items-center'>
        {
           items.map((item) => <span className={`h-3 w-3 rounded-[50%] ${item === currBatchNo ? "bg-primary" : "bg-gray-400"}`} key={item} onClick={() => handleBatchChange(item)}></span>)
        }
    </div>
  )
}

export default BatchTracker