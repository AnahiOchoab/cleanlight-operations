
import { ArrowRight, Users, Music, User, TrendingUp, Palette, Phone, Mail, Instagram, Menu, Globe } from "lucide-react";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { language, setLanguage, t } = useLanguage();

  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('influencerMarketing'),
      description: t('influencerMarketingDesc'),
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: t('musicDistribution'),
      description: t('musicDistributionDesc'),
    },
    {
      icon: <User className="w-6 h-6" />,
      title: t('clientRelations'),
      description: t('clientRelationsDesc'),
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('growthServices'),
      description: t('growthServicesDesc'),
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t('creativeServices'),
      description: t('creativeServicesDesc'),
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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={toggleLanguage}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
        >
          <Globe className="w-5 h-5" />
        </button>
        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
              <Menu className="w-5 h-5" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-4 space-y-3">
              <DrawerClose asChild>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full px-4 py-2 text-sm text-left bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {t('services')}
                </button>
              </DrawerClose>
              <DrawerClose asChild>
                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full px-4 py-2 text-sm text-left bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {t('aboutUs')}
                </button>
              </DrawerClose>
              <DrawerClose asChild>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-4 py-2 text-sm text-left bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {t('contact')}
                </button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Hero Section */}
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
            {t('tagline')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            {t('getStarted')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold mb-12 text-gray-900"
            >
              {t('ourServices')}
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
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white rounded-full text-gray-900"
            >
              {t('aboutUs')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold mb-6 text-gray-900"
            >
              {t('aboutUsTitle')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              {t('aboutUsDesc')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 rounded-full text-gray-900"
            >
              {t('getInTouch')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold mb-6 text-gray-900"
            >
              {t('createTogether')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-12"
            >
              {t('contactDesc')}
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
                      {t('name')}
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
                      {t('email')}
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
                    {t('subject')}
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
                    {t('message')}
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
                    {t('sendMessage')}
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
