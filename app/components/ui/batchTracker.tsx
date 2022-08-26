import React from 'react'

type BatchTrackerProps = {
    currBatchNo: number,
    setCurrBatchNo: React.Dispatch<React.SetStateAction<number>>,
    noOfBatches: number,
    setUserIntervention: React.Dispatch<React.SetStateAction<boolean>>
}

const getNumsArr = (len: number) => {
    let res = [];
    for(let i = 1; i <= len; i++){
        res.push(i);
    } 
    return res;
}

const BatchTracker : React.FC<BatchTrackerProps> = ({noOfBatches,setCurrBatchNo,currBatchNo,setUserIntervention}) => {

  const items = getNumsArr(noOfBatches);

  const handleClick = (item: number) => {
    setCurrBatchNo(item)
    setUserIntervention(true)
  }

  return (
    <div className='flex flex-row mx-auto gap-2 justify-center items-center'>
        {
           items.map((item) => <span className={`h-3 w-3 rounded-[50%] ${item === currBatchNo ? "bg-primary" : "bg-gray-400"}`} key={item} onClick={handleClick.bind(null,item)}></span>)
        }
    </div>
  )
}

export default BatchTracker