import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  BarChart3,
  Globe,
  Warehouse,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { MEDIA } from '../constants/media';

const heroSlides = [
  {
    image: MEDIA.hero1,
    title: 'TO HELP YOUR BUSINESS GET SHIPMENTS DONE',
  },
  {
    image: MEDIA.hero2,
    title: 'RELIABLE LOGISTICS SOLUTIONS FOR YOUR BUSINESS',
  },
  {
    image: MEDIA.hero3,
    title: 'NATIONWIDE TRUCKING AND FREIGHT SERVICES',
  },
];

const services = [
  {
    icon: Truck,
    title: 'LONG/SHORT - HAUL TRUCKING',
    description:
      'Efficient and reliable transportation of goods over long distances with our well-maintained fleet and experienced drivers.',
    link: '/services',
  },
  {
    icon: BarChart3,
    title: 'LOGISTICS CONSULTING',
    description:
      'Expert guidance and customized strategies to optimize your supply chain operations and stay ahead in the competitive logistics landscape.',
    link: '/services',
  },
  {
    icon: Globe,
    title: 'FREIGHT FORWARDING',
    description:
      'Simplified international and domestic shipping, handling documentation, customs clearance, and ensuring timely and secure delivery.',
    link: '/services',
  },
  {
    icon: Warehouse,
    title: 'WAREHOUSING AND DISTRIBUTION',
    description:
      'Secure warehousing and efficient inventory management for storing, managing, and delivering your goods to customers on time.',
    link: '/services',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* Hero Carousel — images: hero1.png, hero2.png, hero3.png in public/ */}
      <section className="relative h-[calc(100dvh-5rem)] min-h-[320px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-4 pb-24 md:pb-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider leading-tight max-w-4xl">
            {heroSlides[currentSlide].title}
          </h1>
          <button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-12 text-white/80 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={40} />
          </button>
        </div>

        {/* Slide controls — inset so they don’t sit under the Book Now tab */}
        <button
          onClick={prevSlide}
          className="absolute left-14 sm:left-16 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots — z-50 so they stay above the fixed Book Now tab when paths overlap */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 pb-1">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-px h-12 bg-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-navy uppercase">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-6 py-8 ${
                  index < services.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
                } ${index < 2 ? 'sm:border-b lg:border-b-0 sm:border-gray-200' : ''}`}
              >
                <service.icon
                  size={56}
                  strokeWidth={1}
                  className="text-primary mb-6"
                />
                <Link
                  to={service.link}
                  className="text-sm font-bold tracking-wider text-navy hover:text-primary transition-colors uppercase mb-4"
                >
                  {service.title}
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-10 py-3 rounded-full transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Request a Free Quote — background: quotebackground.png */}
      <section
        className="relative py-32 px-4 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${MEDIA.quoteBackground})` }}
      >
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-white uppercase mb-6">
            Request A Free Quote
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Contact us today to request a free quote for our logistics, trucking,
            warehousing, or consulting services. Our team will work with you to
            develop a customized solution that meets your unique needs and budget.
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
