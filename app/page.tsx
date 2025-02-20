import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6">
          Find Your Perfect Shiba Inu
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect with trusted Shiba Inu breeders and rescues across the country
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-orange-200 focus:border-orange-400 focus:outline-none shadow-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/breeders"
            className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Find a Breeder
          </a>
          <a
            href="/rescues"
            className="px-8 py-4 bg-white text-orange-500 border-2 border-orange-500 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Adopt a Shiba Inu
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Verified Breeders',
            description:
              'Connect with trusted and verified Shiba Inu breeders in your area.',
          },
          {
            title: 'Rescue Organizations',
            description:
              'Find Shiba Inu rescue organizations and give a loving home to a dog in need.',
          },
          {
            title: 'Expert Resources',
            description:
              'Access comprehensive guides and tips about Shiba Inu care and ownership.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-orange-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}