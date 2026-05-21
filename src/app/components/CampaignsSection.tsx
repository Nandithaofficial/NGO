import { GraduationCap, Utensils, Heart, ArrowRight } from 'lucide-react';

export function CampaignsSection() {
  const campaigns = [
    {
      icon: GraduationCap,
      title: 'Education Drive',
      description: 'Providing school supplies and scholarships to underprivileged children.',
      progress: 75,
      color: 'blue'
    },
    {
      icon: Utensils,
      title: 'Food Distribution',
      description: 'Delivering nutritious meals to families in need every week.',
      progress: 60,
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Health Camp',
      description: 'Free medical checkups and healthcare services for rural communities.',
      progress: 85,
      color: 'orange'
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; progress: string; iconBg: string }> = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      progress: 'bg-blue-500',
      iconBg: 'bg-blue-100'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      progress: 'bg-green-500',
      iconBg: 'bg-green-100'
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      progress: 'bg-orange-500',
      iconBg: 'bg-orange-100'
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Active Campaigns</h2>
          <p className="text-lg text-gray-600">
            Join our ongoing initiatives to create lasting change
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
            const Icon = campaign.icon;
            const colors = colorMap[campaign.color];

            return (
              <div
                key={campaign.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${colors.bg} p-6`}>
                  <div className={`${colors.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600">
                    {campaign.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`${colors.progress} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>

                  <button className={`w-full ${colors.text} border-2 ${colors.text.replace('text-', 'border-')} py-2 rounded-xl font-semibold hover:${colors.bg} transition-all flex items-center justify-center gap-2`}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
