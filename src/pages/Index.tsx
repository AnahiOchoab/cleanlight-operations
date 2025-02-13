import { ArrowRight, Users, Music, User, TrendingUp, Palette } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-90" />
        </div>
        <div className="container mx-auto text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 rounded-full text-gray-900"
          >
            Welcome to Our Agency
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight text-gray-900"
          >
            We Create Digital
            <br /> Experiences
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

      {/* Services Section */}
      <section className="py-20 px-4">
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

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
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
              We're a team of digital experts
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

      {/* Contact Section */}
      <section className="py-20 px-4">
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
              className="text-lg text-gray-600 mb-8"
            >
              Ready to take your digital presence to the next level? Contact us to discuss your project.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
