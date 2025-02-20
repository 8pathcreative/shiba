import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/lib/supabase/database.types';

type Breeder = Database['public']['Tables']['breeders']['Row'];

async function BreedersList() {
  const supabase = await createClient();
  const { data: breeders } = await supabase
    .from('breeders')
    .select('*')
    .order('business_name');

  return breeders ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {breeders.map((breeder) => (
        <div
          key={breeder.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              {breeder.business_name}
            </h3>
            <p className="text-gray-600 mb-4">
              {breeder.city}, {breeder.state}
            </p>
            {breeder.description && (
              <p className="text-gray-600 mb-4 line-clamp-3">
                {breeder.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {breeder.is_verified && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Verified
                </span>
              )}
              {breeder.akc_registered && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  AKC Registered
                </span>
              )}
            </div>
            <a
              href={`/breeders/${breeder.id}`}
              className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-600">No breeders found</div>
  );
}

export default async function BreedersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-orange-900 mb-8">
          Shiba Inu Breeders
        </h1>
        <BreedersList />
      </div>
    </div>
  );
}