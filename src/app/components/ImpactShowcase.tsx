import { Users, TreePine, GraduationCap, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function ImpactShowcase() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Families Supported',
      color: 'blue'
    },
    {
      icon: TreePine,
      number: '10,000+',
      label: 'Trees Planted',
      color: 'green'
    },
    {
      icon: GraduationCap,
      number: '1,200+',
      label: 'Children Educated',
      color: 'orange'
    },
    {
      icon: Heart,
      number: '120',
      label: 'Active Volunteers',
      color: 'pink'
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', iconBg: 'bg-green-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', iconBg: 'bg-orange-100' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', iconBg: 'bg-pink-100' }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">
            Together, we're making a real difference in communities worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorMap[stat.color];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colors.bg} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
              >
                <div className={`${colors.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className={`text-3xl font-bold ${colors.text} mb-2`}>
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
