export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-orange-200 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-4" />
                  <div className="h-16 w-full bg-gray-200 rounded mb-4" />
                  <div className="h-8 w-32 bg-orange-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}