//import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'

export function Loader() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    document.addEventListener('astro:before-preparation', (ev: any) => {
      const originalLoader = ev.loader
      ev.loader = async function () {
        setIsLoading(true)
        await originalLoader()
      }
    })
    document.addEventListener('astro:before-preparation', () => {
      setIsLoading(false)
    })
  }, [])

  return (
    isLoading && (
      <div className="h z-50 h-screen w-screen">
        <div className=" flex h-[80vh] w-[95vw] items-center justify-center">
          <div className="spinner h-20 w-20 animate-spin rounded-full border-t-4 border-primary border-opacity-90"></div>
        </div>
        {/* <div className="items-top flex space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
            <div className=" space-y-2">
              <Skeleton className="mb-4 h-4 w-[80vw]" />
            </div>
          </div>
        </div> */}
      </div>
    )
  )
}
