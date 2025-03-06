import { Skeleton } from "@/components/ui/skeleton"

export default function TalentDetailLoading() {
  return (
    <main className="container py-8">
      <Skeleton className="h-10 w-48 mb-6" />

      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-10 w-32" />
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skeleton className="h-[500px] md:row-span-2 md:col-span-1" />
        <Skeleton className="h-[200px]" />
        <Skeleton className="h-[200px]" />
        <Skeleton className="h-[200px]" />
      </div>
    </main>
  )
}

