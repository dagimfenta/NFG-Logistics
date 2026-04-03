import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const openings = [
  {
    title: 'CDL Class A Driver',
    location: 'Nashville, TN',
    type: 'Full-time',
    description:
      'Join our team of professional drivers. Requires a valid CDL Class A license and at least 2 years of driving experience.',
  },
  {
    title: 'Logistics Coordinator',
    location: 'Nashville, TN',
    type: 'Full-time',
    description:
      'Coordinate freight operations, manage shipment schedules, and ensure timely deliveries. Excellent organizational skills required.',
  },
  {
    title: 'Warehouse Associate',
    location: 'Nashville, TN',
    type: 'Full-time',
    description:
      'Assist with loading/unloading, inventory management, and order fulfillment in our distribution center.',
  },
];

export default function Careers() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-8 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-px h-12 bg-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-navy uppercase">
            Careers
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Join the NFG Logistics team and be part of a growing company dedicated to
            delivering excellence in logistics.
          </p>
        </div>
      </section>

      {/* Openings */}
      <section className="pb-20 px-4 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {openings.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                <h3 className="text-lg font-bold text-navy">{job.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {job.type}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {job.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <Briefcase size={16} />
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-wider text-navy uppercase mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-gray-500 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll
            keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-3 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
