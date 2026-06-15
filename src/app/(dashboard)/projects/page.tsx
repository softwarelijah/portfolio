export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <p className="text-sm text-muted-foreground">
        Selected work goes here.
      </p>
      <div className="mt-4 flex min-h-64 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
        Projects coming soon
      </div>
    </div>
  )
}
