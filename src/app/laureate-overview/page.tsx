import { LaureatesUi } from './components'

export default function LaureateOverviewPage() {
  return (
    <div className="container">
      <h2 className="text-4xl">Laureate Overview</h2>
      <div className="flex flex-col p-12">
        <LaureatesUi />
      </div>
    </div>
  )
}
