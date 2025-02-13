
import { ArrowRight, Users, Music, User, TrendingUp, Palette, Phone, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Influencer Marketing",
      description: "Content Strategy, Social Media Copywriting, Content Management & Monetization",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Distribution Support",
      description: "Communication with Digital Music Distribution Teams, Brand Negotiations & Campaigns",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Client Relations",
      description: "Customer, Promoter, and Booking Relations Management",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Services",
      description: "Social Media Growth Strategies",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Services",
      description: "Graphic Design, Reports Analysis",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 md:top-8 right-4 md:right-8 z-50 flex gap-2 md:gap-4">
        <button
          onClick={() => scrollToSection('services')}
          className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base bg-white text-gray-900 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base bg-white text-gray-900 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
        >
          About Us
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base bg-white text-gray-900 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
        >
          Contact
        </button>
      </div>

      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-90" />
        </div>
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <img
              src="/lovable-uploads/9349a508-4552-4f93-b649-74c61daa5592.png"
              alt="Digital Ops Logo"
              className="h-24 mx-auto"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900 leading-tight"
          >
            We manage your digital operations so
            <br /> you can create freely.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Elevating brands through strategic digital operations and creative excellence
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold mb-12 text-gray-900"
            >
              Our Services
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white rounded-full text-gray-900"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold mb-6 text-gray-900"
            >
              We're Digital Ops
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              With years of experience in digital operations, we help businesses, companies, and artists
              achieve their goals through strategic digital solutions and creative excellence.
            </motion.p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 rounded-full text-gray-900"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold mb-6 text-gray-900"
            >
              Let's Create Something Amazing Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-12"
            >
              Ready to take your digital presence to the next level? Contact us to discuss your project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm mb-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center space-y-4 mb-8"
            >
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <a
                  href="tel:+526142501446"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +52 614 250 1446
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <a
                  href="mailto:hi@digitalopsagency.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  hi@digitalopsagency.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center"
            >
              <a
                href="https://www.instagram.com/digitalops.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
