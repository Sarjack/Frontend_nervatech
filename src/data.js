import nervaLogoImage from './images/logo.svg'

import homeHero from './images/home/home-hero.svg'
import solutionExport from './images/home/solution-export.svg'
import solutionSupplyChain from './images/home/solution-supply-chain.svg'
import solutionQuality from './images/home/solution-quality.svg'
import solutionGrowDigitally from './images/home/solution-grow-digitally.svg'
import solutionGrowNetwork from './images/home/solution-grow-network.svg'
import ctaSectionHome from './images/cta-section/cta-section.svg'

import manufacturerHero from './images/manufacturers/hero.svg'
import efficiencyDigitalization from './images/manufacturers/efficiency-digitalization.svg'
import orderManagement from './images/manufacturers/order-management.svg'
import automatedProduction from './images/manufacturers/automated-production.svg'
import supplyChain from './images/manufacturers/supply-chain.svg'
import globalDistribution from './images/manufacturers/global-distribution.svg'
import ctaSectionManufacturer from './images/cta-section/cta-section-manufacturer.svg'

import buyerHeroImage from './images/buyers/hero.svg'
import buyerCtaSectionImage from './images/buyers/cta-section.svg'
import productAvailabilityImage from './images/buyers/product-availability.svg'
import diverseNetworkImage from './images/buyers/diverse-network.svg'
import costEfficiencyImage from './images/buyers/cost-efficiency.svg'
import seamlessOrderingImage from './images/buyers/seamless-ordering.svg'
import streamlinedProcurementImage from './images/buyers/streamlined-procurement.svg'

import forManufacturerImage from './images/explore/for-manufacturers.svg'
import forBuyerImage from './images/explore/for-buyer.svg'

import aboutUsHeroImage from './images/about/hero.svg'
import mission from './images/about/mission.svg'
import vision from './images/about/vision.svg'
import values from './images/about/values.svg'

import contactUsImage from './images/contactus/contactus.svg'

import enquiryFormImage from './images/about/enquiry.svg'
const nervaBranding = {
  logo: nervaLogoImage,
}

const home = {
  hero: {
    imgSrc: homeHero,
    imgAlt: 'pharmacy-home-img',
    title: (props) => {
      return (
        <span style={props.style}>
          Pharma Manufacturing Solutions for Global Growth
        </span>
      )
    },
    description: [
      'Empowering Pharmaceutical Manufacturers to Maximize Manufacturing, \
      Minimize Effort and Scale Globally.',
    ],
    cta: {
      text: 'Explore how Nerva can revolutionize your business!',
      buttonText: 'Get In Touch',
    },
  },
  ourSolutions: {
    heading: 'Featured Solutions',
    benefits: [
      {
        title: 'Global Expansion',
        description: [
          'Expand your business globally with ease.',
          'Seamlessly reach international markets.',
          'Maximize your global presence effortlessly.',
        ],
        imgSrc: solutionExport,
      },
      {
        title: 'Supply Chain Excellence',
        description: [
          'Optimize your supply chain for efficiency.',
          'Minimize disruptions in your operations.',
          'Maximize reliability in your supply chain.',
        ],
        imgSrc: solutionSupplyChain,
      },
      {
        title: 'Quality Assurance',
        description: [
          'Ensure the highest standards for your products.',
          'Guarantee the quality of your pharmaceuticals.',
          'Rigorous quality assurance processes in place.',
        ],
        imgSrc: solutionQuality,
      },
      {
        title: 'Digital Business Growth',
        description: [
          'Embrace the digital era for business growth.',
          'Thrive in the modern landscape with digital solutions.',
          'Stay ahead of the competition with digital transformation.',
        ],
        imgSrc: solutionGrowDigitally,
      },
      {
        title: 'Network Expansion',
        description: [
          'Connect and grow through an extensive network.',
          'Expand your reach and forge valuable industry connections.',
          'Leverage a vast network for business expansion.',
        ],
        imgSrc: solutionGrowNetwork,
      },
    ],
  },
  ctaSection: {
    imgSrc: ctaSectionHome,
    CTAText: () => {
      return (
        <>
          <span>Experience the Power of Nerva's </span>
          <span className="text-dark-blue text-bold">
            Innovative Solutions!
          </span>
          <br />
          <br />
          <p>
            Discover a world of opportunities with Nerva. Our cutting-edge
            solutions are designed to empower your business. Whether you're a
            manufacturer or a buyer, we have the right solutions to drive your
            success. Join us on this journey of innovation and growth!
          </p>
        </>
      )
    },
    CTAButtonText: 'Get Started',
  },
}

const manufacturer = {
  hero: {
    imgSrc: manufacturerHero,
    imgAlt: 'manufacturer-img',
    title: (props) => {
      return (
        <span style={props.style}>
          Empowering Manufacturers <br /> for a Digital Future <br /> and Global
          Success
        </span>
      )
    },
    description: [
      'Unlock the digital future of pharmaceutical manufacturing with Nerva. Streamline operations, maximize production, and grow your business seamlessly.',
    ],
    cta: {
      text: 'Let Nerva help you focus solely on manufacturing excellence.',
      buttonText: 'Get Demo',
    },
  },

  ourSolutions: {
    heading: 'Our Solutions',

    benefits: [
      {
        title: 'Efficiency Through Digitalization',
        description: [
          'Streamline your operations with digitalization.',
          'Maximize efficiency in your manufacturing processes.',
          'Optimize your production for peak performance.',
        ],
        imgSrc: efficiencyDigitalization,
      },
      {
        title: 'Order Management and Tracking',
        description: [
          'Simplify order management for seamless operations.',
          'Efficiently track orders in real-time.',
          'Optimize your order processing for efficiency.',
        ],
        imgSrc: orderManagement,
      },
      {
        title: 'Automated Production Reports',
        description: [
          'Access real-time insights with automated production reports.',
          'Gain actionable data for informed decision-making.',
          'Enhance your production through automated reporting.',
        ],
        imgSrc: automatedProduction,
      },
      {
        title: 'Supply Chain and Logistics Efficiency',
        description: [
          'Optimize your supply chain and logistics for reliability.',
          'Minimize disruptions in your supply chain.',
          'Maximize the efficiency of your logistics processes.',
        ],
        imgSrc: supplyChain,
      },
      {
        title: 'Global Distributor Network',
        description: [
          'Expand your product portfolio effortlessly.',
          'Connect with a global network of reliable manufacturers.',
          'Ensure a steady supply of pharmaceutical products worldwide.',
        ],
        imgSrc: globalDistribution,
      },
    ],
  },
  ctaSection: {
    imgSrc: ctaSectionManufacturer,
    CTAText: () => {
      return (
        <>
          <span>Unlock Manufacturing Excellence with Nerva's </span>
          <span className="text-dark-blue text-bold">
            Free On-Ground Support!
          </span>
          <br />
          <br />
          <p>
            Our experts are ready to visit your facility, analyze your unique
            needs, and tailor our solutions for your success. Book your free,
            no-hidden-charges on-ground support now - completely free, just
            results!
          </p>
        </>
      )
    },
    CTAButtonText: 'Get Free Support',
  },
}

const buyer = {
  hero: {
    imgSrc: buyerHeroImage,
    imgAlt: 'buyer-img',
    title: (props) => {
      return (
        <span style={props.style}>
          Effortless Pharmaceutical Buying with Nerva
        </span>
      )
    },
    description: [
      'Sourcing made easy, transparent, and cost-effective. Your path to streamlined pharmaceutical ultra-reliable sourcing starts here.',
    ],
    cta: {
      text: 'Experience the ease of doing business with Nerva.',
      buttonText: 'Get In Touch',
    },
  },
  ourSolutions: {
    heading: 'Our Solutions',
    benefits: [
      {
        title: 'Enhanced Product Availability',
        description: [
          'Ensure a steady flow of pharmaceutical products.',
          'Empower your distribution with a reliable supply.',
          'Never miss a sales opportunity with Nerva.',
        ],
        imgSrc: productAvailabilityImage,
      },
      {
        title: 'Diverse, Reliable Manufacturer Network',
        description: [
          'Expand your product portfolio effortlessly.',
          'Connect to a diverse network of reliable manufacturers worldwide.',
          'Ensure a steady and reliable supply of pharmaceutical products.',
        ],
        imgSrc: diverseNetworkImage,
      },
      {
        title: 'Cost Efficiency at its Best',
        description: [
          'Boost your profitability with cost-effective procurement.',
          'Compare and negotiate effectively with Nerva.',
          'Reduce procurement costs for higher margins.',
        ],
        imgSrc: costEfficiencyImage,
      },
      {
        title: 'Seamless Ordering Experience',
        description: [
          'Effortless procurement with seamless order processing.',
          'Efficient communication for prompt order processing.',
          'Make distribution hassle-free with Nerva.',
        ],
        imgSrc: seamlessOrderingImage,
      },
      {
        title: 'Streamlined Procurement Process',
        description: [
          'Simplify your procurement with streamlined processes.',
          'Optimize every step from sourcing to delivery.',
          'Enhance your efficiency with Nerva.',
        ],
        imgSrc: streamlinedProcurementImage,
      },
    ],
  },

  ctaSection: {
    imgSrc: buyerCtaSectionImage,
    CTAText: () => (
      <>
        <span>Discover Your Perfect Sourcing Partner with Nerva's</span>
        <span className="text-dark-blue text-bold"> Free Buyer Services!</span>
        <br />
        <br />
        <p>
          Are you looking for reliable suppliers? Our experts are here to help
          you find the best sourcing solutions, and the best part is, it's all
          at
          <span className="text-dark-blue text-bold"> zero extra cost! </span>
          Let us streamline your procurement process and make sourcing
          hassle-free. Contact us now for personalized assistance - it's just a
          click away!
        </p>
      </>
    ),
    CTAButtonText: 'Start Sourcing',
  },
}

const explore = {
  forManufacturerImgSrc: forManufacturerImage,
  forManufacturerDescription:
    'Take advantage of our global buyer network to effortlessly service new markets with zero extra effort at no cost.',
  forBuyerImgSrc: forBuyerImage,
  forBuyerDescription:
    "Tap into Nerva's vast Manufacturer network to streamline operations and make sourcing transparent and efficient.",
}

const enquiryFormData = {
  imgSrc: enquiryFormImage,
  title: "Let's talk about everything!",
  description: [
    "Unlock possibilities and explore tailored solutions. We're here to listen and assist you every step of the way.",
  ],
}
const contactDetails = {
  imgSrc: contactUsImage,
  email: 'sarthaksaumya18@gmail.com',
  phone: '+91 9508375362',
  description: [
    "Getting in touch with Nerva is easy. Whether you have a question, need assistance, or want to explore how Nerva can benefit your business, we're here for you.",
  ],
  linkedInId: 'Nerva',
  linkedInURL: 'https://www.linkedin.com/in/sarthak-saumya-b6b581227/',
  facebookId: 'Nerva',
}
const aboutData = {
  hero: {
    cta: {
      text: "Nerva: Shaping Pharma's Tomorrow",
      buttonText: 'Learn More',
      buttonOnClick: () => {
        window.location.href = '/about#enquiry'
      },
    },
    description: [
      'We are driving a transformation in the pharmaceutical manufacturing landscape, enabling stakeholders to optimize both their financial gains and quality standards. At Nerva, we are revolutionizing the pharmaceutical industry, with a strong commitment to transparency, reliability, and efficiency at the forefront of everything we do.',
    ],
    imgSrc: aboutUsHeroImage,
  },
}
const WhyNervaData = {
  heading: 'Why Nerva?',
  description: [
    "Empowering Tomorrow's Supply Chain: Our vision is to revolutionize the Indian pharmaceutical landscape by leveraging cutting-edge digitization solutions to streamline supply chains. We are committed to making manufacturers more efficient, scalable, and transparent through innovative software solutions. By harnessing the power of data-driven insights, automation, and real-time visibility, we are shaping a future where pharmaceutical supply chains operate seamlessly, allowing manufacturers and buyers to scale new heights while also giving them a chance to compete globally",
  ],
  miniCardDetails: [
    {
      title: 'Mission',
      desc: ['Fostering Pharma Excellence through Innovation'],
      imgSrc: mission,
      imgAlt: 'mission-img',
    },
    {
      title: 'Vision',
      desc: ['Building a Future of Unmatched Pharma Success'],
      imgSrc: vision,
      imgAlt: 'vision-img',
    },
    {
      title: 'Values',
      desc: ['Transparency, Reliability, Cost Effectiveness'],
      imgSrc: values,
      imgAlt: 'values-img',
    },
  ],
}
export {
  home,
  manufacturer,
  buyer,
  contactDetails,
  WhyNervaData,
  nervaBranding,
  explore,
  enquiryFormData,
  aboutData,
}
