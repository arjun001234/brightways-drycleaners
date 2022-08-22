import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Step from '~/components/process/step'
import InfoWrapper from '~/components/wrappers/infoWrapper'
import { getProcess } from '~/sanity/query/process.server'
import { ProcessPageData } from '~/types/types'

export const loader : LoaderFunction = async () => {
    const process = await getProcess()
    if (!process) {
      throw new Error("Couldn't fetch process");
    }
    return {
        process: process
    }
}

const ProcessPage = () => {

  const {process} = useLoaderData<ProcessPageData>();

  return (
    <InfoWrapper id="process">
        <div className='col-start-1 col-span-full flex flex-col gap-10'>
           {process.steps.map((step) => {
            return <Step key={step._key} step={step} delay={0.2} />
           })}
        </div>
    </InfoWrapper>
  )
}

export default ProcessPage