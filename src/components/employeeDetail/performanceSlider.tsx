import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'
import { Button } from '../ui'

type SliderProps = React.ComponentProps<typeof Slider>

export default function PerformanceSlider({
  className,
  ...props
}: SliderProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="mx-auto my-4 w-[90%]">
      <span className="text-muted-foreground">
        Performance
        {isEditing ? (
          <Button
            onClick={() => {
              setIsEditing(!isEditing)
            }}
            className="ml-1"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsEditing(!isEditing)
            }}
            className="ml-1"
            variant="outline"
          >
            Edit
          </Button>
        )}
      </span>
      <Slider
        defaultValue={[50]}
        max={100}
        disabled={!isEditing}
        step={1}
        className={cn(
          'mt-4',
          !isEditing ? 'cursor-not-allowed' : 'cursor-pointer',
          className,
        )}
        {...props}
      />
      <div className="flex justify-between ">
        <div>Can Improve</div>
        <div>Average</div>
        <div>Great</div>
        <div>Outstanding</div>
      </div>
    </div>
  )
}
