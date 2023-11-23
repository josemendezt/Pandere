import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui'

import IconReact from '../utils/IconReact'

export default function DropdownHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <div className="my-0 flex w-10 max-w-full cursor-pointer">
            <IconReact iconName="Avatar" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          John Doe
          <div className="text-sm font-extralight">Cool Company</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <a href="/login">
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
