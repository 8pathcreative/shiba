import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase/client';
import { Dog, ChevronDown, Heart, Users, BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import type { Database } from '@/lib/supabase/database.types';

type Breeder = Database['public']['Tables']['breeders']['Row'];
type Rescue = Database['public']['Tables']['rescues']['Row'];

function Footer() {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dog className="h-6 w-6 text-orange-300" />
              <span className="text-xl font-bold text-orange-100">Shiba Inu</span>
            </div>
            <p className="text-orange-200 mb-4">
              Connecting Shiba Inu lovers with trusted breeders and rescue organizations across the country.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@shibainu.com" className="flex items-center text-orange-200 hover:text-orange-100">
                <Mail className="h-4 w-4 mr-2" />
                contact@shibainu.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-orange-200 hover:text-orange-100">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </a>
              <div className="flex items-center text-orange-200">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-orange-200 hover:text-orange-100">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-orange-200 hover:text-orange-100">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-200 hover:text-orange-100">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-orange-200 hover:text-orange-100">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Breeders */}
          <div>
            <h3 className="text-lg font-semibold text-orange-100 mb-4">Breeders</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/breeders" className="text-orange-200 hover:text-orange-100">Find a Breeder</Link>
              </li>
              <li>
                <Link to="/breeder-resources" className="text-orange-200 hover:text-orange-100">Breeder Resources</Link>
              </li>
              <li>
                <Link to="/breeder-registration" className="text-orange-200 hover:text-orange-100">Become a Breeder</Link>
              </li>
              <li>
                <Link to="/breeder-guidelines" className="text-orange-200 hover:text-orange-100">Breeding Guidelines</Link>
              </li>
            </ul>
          </div>

          {/* Rescues */}
          <div>
            <h3 className="text-lg font-semibold text-orange-100 mb-4">Rescues</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rescues" className="text-orange-200 hover:text-orange-100">Find a Rescue</Link>
              </li>
              <li>
                <Link to="/rescue-resources" className="text-orange-200 hover:text-orange-100">Rescue Resources</Link>
              </li>
              <li>
                <Link to="/rescue-registration" className="text-orange-200 hover:text-orange-100">Register a Rescue</Link>
              </li>
              <li>
                <Link to="/adoption-process" className="text-orange-200 hover:text-orange-100">Adoption Process</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-200 text-sm">
              © {new Date().getFullYear()} Shiba Inu. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-orange-200 hover:text-orange-100 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-orange-200 hover:text-orange-100 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Dog className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold text-orange-900">Shiba Inu</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/breeders"
              className="text-sm font-medium transition-colors hover:text-orange-900 text-gray-600"
            >
              Breeders
            </Link>
            <Link
              to="/rescues"
              className="text-sm font-medium transition-colors hover:text-orange-900 text-gray-600"
            >
              Rescues
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium px-4 py-2 text-orange-600 hover:text-orange-700 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function StateFilter({ selectedState, onStateChange }: { selectedState: string; onStateChange: (state: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const states = [
    'All States', 'AZ', 'CA', 'CO', 'GA', 'IL', 'MA', 'MI', 'MN', 'NJ', 'OR', 'TX', 'WA'
  ];

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
      >
        <span>{selectedState === '' ? 'All States' : selectedState}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => {
                onStateChange(state === 'All States' ? '' : state);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-orange-50 hover:text-orange-900"
            >
              {state}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6 animate-fade-in">
          Find Your Perfect Shiba Inu
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          Connect with trusted Shiba Inu breeders and rescues across the country
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/breeders"
            className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Find a Breeder
          </Link>
          <Link
            to="/rescues"
            className="px-8 py-4 bg-white text-orange-500 border-2 border-orange-500 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Adopt a Shiba Inu
          </Link>
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

function BreedersList() {
  const [breeders, setBreeders] = useState<Breeder[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    async function fetchBreeders() {
      try {
        let query = supabase
          .from('breeders')
          .select('*')
          .order('business_name');

        if (selectedState) {
          query = query.eq('state', selectedState);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Error fetching breeders:', error);
          return;
        }

        setBreeders(data || []);
      } catch (error) {
        console.error('Error in fetchBreeders:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBreeders();
  }, [selectedState]);

  if (loading) {
    return <div>Loading breeders...</div>;
  }

  return (
    <div>
      <StateFilter selectedState={selectedState} onStateChange={setSelectedState} />
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
              <Link
                to={`/breeders/${breeder.id}`}
                className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Breeders() {
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

function RescuesList() {
  const [rescues, setRescues] = useState<Rescue[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    async function fetchRescues() {
      try {
        let query = supabase
          .from('rescues')
          .select('*')
          .order('organization_name');

        if (selectedState) {
          query = query.eq('state', selectedState);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Error fetching rescues:', error);
          return;
        }

        setRescues(data || []);
      } catch (error) {
        console.error('Error in fetchRescues:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRescues();
  }, [selectedState]);

  if (loading) {
    return <div>Loading rescues...</div>;
  }

  return (
    <div>
      <StateFilter selectedState={selectedState} onStateChange={setSelectedState} />
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
              <Link
                to={`/rescues/${rescue.id}`}
                className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Rescues() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-orange-900 mb-8">
          Shiba Inu Rescues
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Search not-for-profit 501(c)3 rescues vetted by the National Shiba
          Club of America.
        </p>
        <RescuesList />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeders" element={<Breeders />} />
            <Route path="/rescues" element={<Rescues />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;