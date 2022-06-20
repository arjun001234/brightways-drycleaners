import { useNavigate } from "@remix-run/react"
import { ReactEventHandler } from "react"

const Search = () => {

    let navigate = useNavigate()

    const handleSelected : ReactEventHandler<HTMLSelectElement> = (e) => {
         navigate(`/pricing/${e.currentTarget.value}`)
    }

  return (
    <div className='flex shadow-lg items-center justify-center w-[80%] h-28 bg-white rounded-md'>
        <select id="cities" name='cities' className=" h-12 w-[80%] px-4 p-2 text-[16px] font-normal font-text outline-none border-4 border-blue  bg-slate-100" onChange={handleSelected.bind(null)}>
            <option value="none" selected disabled hidden>Select your city</option>
            <option value="faridabad">Faridabad</option>
            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
        </select>
    </div>
  )
}

export default Search