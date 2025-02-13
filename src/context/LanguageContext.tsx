
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    tagline: "We manage your digital operations so you can create freely.",
    subtitle: "Elevating brands through strategic digital operations and creative excellence",
    getStarted: "Get Started",
    services: "Services",
    aboutUs: "About Us",
    contact: "Contact",
    ourServices: "Our Services",
    influencerMarketing: "Influencer Marketing",
    influencerMarketingDesc: "Content Strategy, Social Media Copywriting, Content Management & Monetization",
    musicDistribution: "Music Distribution Support",
    musicDistributionDesc: "Communication with Digital Music Distribution Teams, Brand Negotiations & Campaigns",
    clientRelations: "Client Relations",
    clientRelationsDesc: "Customer, Promoter, and Booking Relations Management",
    growthServices: "Growth Services",
    growthServicesDesc: "Social Media Growth Strategies",
    creativeServices: "Creative Services",
    creativeServicesDesc: "Graphic Design, Reports Analysis",
    aboutUsTitle: "We're Digital Ops",
    aboutUsDesc: "With years of experience in digital operations, we help businesses, companies, and artists achieve their goals through strategic digital solutions and creative excellence.",
    getInTouch: "Get in Touch",
    createTogether: "Let's Create Something Amazing Together",
    contactDesc: "Ready to take your digital presence to the next level? Contact us to discuss your project.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
  },
  es: {
    tagline: "Gestionamos tus operaciones digitales para que puedas crear libremente.",
    subtitle: "Elevando marcas a través de operaciones digitales estratégicas y excelencia creativa",
    getStarted: "Comenzar",
    services: "Servicios",
    aboutUs: "Nosotros",
    contact: "Contacto",
    ourServices: "Nuestros Servicios",
    influencerMarketing: "Marketing de Influencers",
    influencerMarketingDesc: "Estrategia de Contenido, Redacción para Redes Sociales, Gestión de Contenido y Monetización",
    musicDistribution: "Soporte de Distribución Musical",
    musicDistributionDesc: "Comunicación con Equipos de Distribución Musical Digital, Negociaciones de Marca y Campañas",
    clientRelations: "Relaciones con Clientes",
    clientRelationsDesc: "Gestión de Relaciones con Clientes, Promotores y Reservas",
    growthServices: "Servicios de Crecimiento",
    growthServicesDesc: "Estrategias de Crecimiento en Redes Sociales",
    creativeServices: "Servicios Creativos",
    creativeServicesDesc: "Diseño Gráfico, Análisis de Informes",
    aboutUsTitle: "Somos Digital Ops",
    aboutUsDesc: "Con años de experiencia en operaciones digitales, ayudamos a negocios, empresas y artistas a alcanzar sus objetivos a través de soluciones digitales estratégicas y excelencia creativa.",
    getInTouch: "Contáctanos",
    createTogether: "Creemos Algo Increíble Juntos",
    contactDesc: "¿Listo para llevar tu presencia digital al siguiente nivel? Contáctanos para discutir tu proyecto.",
    name: "Nombre",
    email: "Correo",
    subject: "Asunto",
    message: "Mensaje",
    sendMessage: "Enviar Mensaje",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
