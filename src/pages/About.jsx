import { Link } from 'react-router-dom';
import { MEDIA } from '../constants/media';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-16 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="w-px h-12 bg-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-navy uppercase text-center">
            About NFGLogistics
          </h1>
        </div>
      </section>

      {/* Welcome Section — main image: about1.png */}
      <section className="pb-20 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="border-2 border-primary/30 rounded-sm p-3 overflow-hidden bg-light-blue/20">
              <img
                src={MEDIA.about1}
                alt=""
                className="w-full h-80 object-cover rounded-sm"
              />
            </div>
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed text-base">
              Welcome to NFGLogistics, your trusted logistics and trucking company.
              We specialize in helping businesses get their shipments done with ease
              and efficiency. Our experienced team of professionals is dedicated to
              providing top-notch services to meet all your logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Image row — about2.png, about3.png */}
      <section className="pb-20 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-primary/30 rounded-sm p-3 overflow-hidden bg-light-blue/20">
            <img
              src={MEDIA.about2}
              alt=""
              className="w-full h-64 object-cover rounded-sm"
            />
          </div>
          <div className="border-2 border-primary/30 rounded-sm p-3 overflow-hidden bg-light-blue/20">
            <img
              src={MEDIA.about3}
              alt=""
              className="w-full h-64 object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-px h-10 bg-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-navy uppercase">
              Our Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="font-bold text-navy text-lg mb-3 uppercase tracking-wider">
                Reliability
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We deliver on our promises. Every shipment is treated with the highest
                level of care and attention, ensuring your goods arrive safely and on
                time.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy text-lg mb-3 uppercase tracking-wider">
                Efficiency
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our streamlined processes and experienced team ensure that your
                logistics operations run smoothly, saving you time and money.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy text-lg mb-3 uppercase tracking-wider">
                Partnership
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We work closely with our clients to understand their unique needs and
                develop customized solutions that help their business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — background: aboutcta.png */}
      <section
        className="relative py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${MEDIA.aboutCta})` }}
      >
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-white uppercase mb-8">
            Ready to Get Started?
          </h2>
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
