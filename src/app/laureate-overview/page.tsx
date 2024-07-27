import { Box } from '@/components/Box'
import { Input } from '@headlessui/react'

export default function LaureateOverviewPage() {
  return (
    <div className="container">
      <h2 className="text-4xl">Laureate Overview</h2>
      <div className="flex flex-col p-12">
        <div className="w-full">
          <Box title="Allows the user to search for a Laureate by name or by residence">
            <Input />
          </Box>
        </div>
        <div className="w-full">
          <Box title="Display results in a table, showing all results"></Box>
        </div>
      </div>
    </div>
  )
}
