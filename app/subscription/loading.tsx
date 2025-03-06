import { Skeleton } from "@/components/ui/skeleton"

export default function SubscriptionLoading() {
  return (
    <main className="container py-12 px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-md mx-auto" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center mb-10 space-x-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-10 rounded-full" />
          <Skeleton className="h-6 w-32" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="h-[500px] rounded-lg" />
          <Skeleton className="h-[500px] rounded-lg" />
        </div>

        <div className="mt-16 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-14 rounded-lg" />
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

