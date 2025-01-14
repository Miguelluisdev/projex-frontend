import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronsUpDown, Plus } from "lucide-react"
import React from "react"
import { data } from "../../data/navlink-sidebar"

const SideDropdown = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const [activeTeam, setActiveTeam] = React.useState(data.teams[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center gap-3 p-2 ${
          isCollapsed ? "justify-center w-12" : "w-full"
        } rounded-lg hover:bg-gray-200`}
      >
        <div
          className={`flex items-center justify-center rounded-lg ${
            isCollapsed ? "w-10 h-10" : "w-8 h-8"
          }`}
        >
          <activeTeam.logo className="w-4 h-4" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col text-left text-sm leading-tight">
            <span className="truncate font-semibold">{activeTeam.name}</span>
            <span className="truncate text-xs text-gray-500">
              {activeTeam.plan}
            </span>
          </div>
        )}
        {!isCollapsed && (
          <ChevronsUpDown className="ml-auto w-4 h-4 text-gray-500" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 rounded-lg bg-white shadow-lg"
        align="start"
        side="bottom"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-gray-500">
          Teams
        </DropdownMenuLabel>
        {data.teams.map((team, index) => (
          <DropdownMenuItem
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-sm border">
              <team.logo className="w-4 h-4" />
            </div>
            {team.name}
            <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
          <div className="flex items-center justify-center w-6 h-6 rounded-md border bg-gray-200">
            <Plus className="w-4 h-4" />
          </div>
          <div className="font-medium text-gray-500">Add team</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SideDropdown
