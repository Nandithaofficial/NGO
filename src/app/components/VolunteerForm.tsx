import { UserPlus, Mail, User, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for joining our mission! We will contact you soon.');
    setFormData({ name: '', email: '', skills: '' });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Become a Volunteer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and make a direct impact in your community.
            Your time and skills can change lives.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Skills/Interest Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Skills / Areas of Interest
              </label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400">
                  <Briefcase className="w-5 h-5" />
                </span>
                <textarea
                  required
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="Tell us about your skills or areas where you'd like to help (e.g., teaching, healthcare, fundraising, event planning)"
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Join Us
            </button>

            <p className="text-sm text-gray-500 text-center">
              We'll review your application and contact you within 48 hours with next steps.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
