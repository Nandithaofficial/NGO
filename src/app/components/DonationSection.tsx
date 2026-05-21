import { CreditCard, Building2, Smartphone, DollarSign } from 'lucide-react';
import { useState } from 'react';

export function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const amounts = [25, 50, 100, 250, 500];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Support Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous donation helps us continue our work in communities around the world.
            Every contribution makes a real difference.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
          {/* Donation Amount Selection */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4">
              Select Donation Amount
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                    selectedAmount === amount
                      ? 'bg-orange-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <DollarSign className="w-5 h-5" />
              </span>
              <input
                type="number"
                placeholder="Custom amount"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition"
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4">
              Payment Method
            </label>
            <div className="grid grid-cols-3 gap-4">
              <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition flex flex-col items-center gap-2">
                <CreditCard className="w-8 h-8 text-orange-500" />
                <span className="text-sm font-medium">Card</span>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition flex flex-col items-center gap-2">
                <Building2 className="w-8 h-8 text-orange-500" />
                <span className="text-sm font-medium">Bank</span>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition flex flex-col items-center gap-2">
                <Smartphone className="w-8 h-8 text-orange-500" />
                <span className="text-sm font-medium">Mobile</span>
              </button>
            </div>
          </div>

          {/* Donate Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl">
            Donate Now
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Your donation is secure and tax-deductible. 100% of your contribution goes directly to our programs.
          </p>
        </div>
      </div>
    </section>
  );
}
