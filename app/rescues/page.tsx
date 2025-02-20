import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/lib/supabase/database.types';

type Rescue = Database['public']['Tables']['rescues']['Row'];

async function RescuesList() {
  const supabase = await createClient();
  const { data: rescues } = await supabase
    .from('rescues')
    .select('*')
    .order('organization_name');

  return rescues ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rescues.map((rescue) => (
        <div
          key={rescue.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              {rescue.organization_name}
            </h3>
            <p className="text-gray-600 mb-4">
              {rescue.city}, {rescue.state}
            </p>
            {rescue.description && (
              <p className="text-gray-600 mb-4 line-clamp-3">
                {rescue.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {rescue.is_verified && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Verified
                </span>
              )}
              {rescue.is_nonprofit && (
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Non-Profit
                </span>
              )}
            </div>
            <a
              href={`/rescues/${rescue.id}`}
              className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-600">No rescues found</div>
  );
}

export default async function RescuesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-orange-900 mb-8">
          Shiba Inu Rescues
        </h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Search not-for-profit 501(c)3 rescues vetted by the National Shiba Club of America.</p>
        <RescuesList />
      </div>
    </div>
  );
}