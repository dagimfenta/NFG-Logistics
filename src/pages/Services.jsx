import { Link } from 'react-router-dom';
import { Truck, BarChart3, Globe, Warehouse } from 'lucide-react';
import { MEDIA } from '../constants/media';

const services = [
  {
    icon: Truck,
    image: MEDIA.service1,
    title: 'Long/Short - Haul Trucking',
    description:
      'Efficient and reliable transportation of goods over long distances with our well-maintained fleet and experienced drivers. Whether you need cross-country shipments or regional deliveries, our trucking services are designed to meet your needs with precision and care.',
    features: [
      'Full truckload (FTL) and less-than-truckload (LTL) options',
      'Real-time GPS tracking on all shipments',
      'Dedicated and experienced drivers',
    ],
  },
  {
    icon: BarChart3,
    image: MEDIA.service2,
    title: 'Logistics Consulting',
    description:
      'Expert guidance and customized strategies to optimize your supply chain operations and stay ahead in the competitive logistics landscape. Our consultants bring years of industry experience to help you reduce costs and improve efficiency.',
    features: [
      'Supply chain optimization',
      'Route planning and analysis',
      'Cost reduction strategies',
      'Technology integration guidance',
    ],
  },
  {
    icon: Globe,
    image: MEDIA.service3,
    title: 'Freight Forwarding',
    description:
      'Simplified international and domestic shipping, handling documentation, customs clearance, and ensuring timely and secure delivery. We manage the complexities of freight forwarding so you can focus on growing your business.',
    features: [
      'International and domestic shipping',
      'Customs clearance and documentation',
      'Air, ocean, and ground freight options',
      'Door-to-door delivery service',
    ],
  },
  {
    icon: Warehouse,
    image: MEDIA.service4,
    title: 'Warehousing and Distribution',
    description:
      'Secure warehousing and efficient inventory management for storing, managing, and delivering your goods to customers on time. Our state-of-the-art facilities ensure your products are handled with care.',
    features: [
      'Secure, organized warehouse space',
      'Inventory management systems',
      'Pick, pack, and ship services',
      'Flexible short and long-term storage',
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-16 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-px h-12 bg-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-navy uppercase">
            Our Services
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Service Details — photos: service1.png … service4.png */}
      <section className="pb-20 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <service.icon
                  size={48}
                  strokeWidth={1}
                  className="text-primary mb-4"
                />
                <h2 className="text-xl font-bold tracking-wider text-navy uppercase mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-light-blue rounded-lg overflow-hidden border border-primary/20">
                  <img
                    src={service.image}
                    alt=""
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — background: servicescta.png */}
      <section
        className="relative py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${MEDIA.servicesCta})` }}
      >
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-white uppercase mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let us design a logistics plan specifically for your business requirements.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-3.5 rounded-full transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
