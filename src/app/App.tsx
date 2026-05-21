import { Heart, Users, TreePine, GraduationCap, HandHeart, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { DonationSection } from './components/DonationSection';
import { VolunteerForm } from './components/VolunteerForm';
import { ImpactShowcase } from './components/ImpactShowcase';
import { CampaignsSection } from './components/CampaignsSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-12 h-12" fill="currentColor" />
            <h1 className="text-5xl font-bold">Hope Foundation</h1>
          </div>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Empowering communities, transforming lives, and building a better tomorrow together
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 mx-auto">
            Join Our Mission <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Impact Showcase */}
      <ImpactShowcase />

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to creating lasting change through education, healthcare,
              environmental conservation, and community development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns & Events */}
      <CampaignsSection />

      {/* Donation Section */}
      <DonationSection />

      {/* Volunteer Form */}
      <VolunteerForm />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8" fill="currentColor" />
              <h3 className="text-2xl font-bold">Hope Foundation</h3>
            </div>
            <p className="text-gray-400">
              Making a difference in communities worldwide through sustainable development and compassionate action.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@hopefoundation.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>123 Hope Street, City, Country</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Programs</a></li>
              <li><a href="#" className="hover:text-white transition">Get Involved</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2026 Hope Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}