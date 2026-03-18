// src/config/brandConfig.ts
import aboutHero from "../assets/images/about-hero-man.png";
import visionImage from "../assets/images/vision-hand.png";
import commitmentImage from "../assets/images/commitment-team.png";
import journeyImage from "../assets/images/journey-team.png";

// hero image
import heroImages from "../assets/images/shipcave_box.png";

// horizhontal scrool brand logos
import blueDart from "../assets/images/blueDartIcon.svg";
import dtdc from "../assets/images/dtdcIcon.svg";
import expressBees from "../assets/images/expressBeesIcon.svg";
import eKart from "../assets/images/eKartIcon.svg";
import delhivery from "../assets/images/delhiveryIcon.svg";
import shadowfx from "../assets/images/Shadowfx.svg";
import shreemaruti from "../assets/images/shree-maruti.svg";
// import ecomExpress from "../assets/images/ecomExpressIcon.svg";

// featureSection
import Feature1Icon from "../assets/images/feature1.svg?react";
import Feature2Icon from "../assets/images/feature2.svg?react";
import Feature3Icon from "../assets/images/feature3.svg?react";
import Feature4Icon from "../assets/images/feature4.svg?react";
import f1Hero from "../assets/images/f1Hero.png";
import f2Hero from "../assets/images/f2Hero.png";
import f3Hero from "../assets/images/f3Hero.png";
import f4Hero from "../assets/images/f4Hero.png";

import whyChooseUsImage from "../assets/images/why_choos_us_shipcave.png";
import dollarEuroIcon from "../assets/images/dollarEuro.svg";
import locationMarkerIcon from "../assets/images/locationMarker.svg";
import clockIcon from "../assets/images/clock.svg";

//happyCustomers
import ujwalaLogo from "../assets/images/ujwalaLogo.png";
import sanskritLogo from "../assets/images/sanskruitLogo.png";
import amaansaLogo from "../assets/images/amaansaLogo.png";
import pvcLogo from "../assets/images/pvcLogo.png";
import abhinavLogo from "../assets/images/abhinavLogo.png";
import kartikNairHs from "../assets/images/kartikNair.png";
import arjunPatelHs from "../assets/images/arjunPatel.png";

// integrations
import integrationCloudImage from "../assets/images/multiChannel.png";

//contacForm
import contactImage from "../assets/images/high-angle-fork-left.png";

//patners
import benefitsImage from "../assets/images/partners-benifits.png";
import becomePartnerImage from "../assets/images/become-partner.png";

//tack-Order
import iconReceived from "../assets/images/icon-recieved.png";
import iconPicked from "../assets/images/icon-picked.png";
import iconTransit from "../assets/images/icon-transit.png";
import iconOutDelivery from "../assets/images/icon-out-delivery.png";
import iconDelivered from "../assets/images/icon-delivered.png";
import iconVisibility from "../assets/images/icon-visibility.png";
import iconPeace from "../assets/images/icon-peace.png";
import iconSecurity from "../assets/images/icon-security.png";
import iconEfficiency from "../assets/images/icon-efficiency.png";
import heroImage from "../assets/images/track-hero.png";
import troubleshootingImage from "../assets/images/troubleshooting.png";

//contactUS
import mapImage from "../assets/images/map-location.png";

//Features
//code
import codHero from "../assets/images/cod-hero.png";
import codBenefits from "../assets/images/cod-benifits.png";
import usingCodImage from "../assets/images/cod-using.png";
//servisable
import step1 from "../assets/images/pincodestep1.png";
import step2 from "../assets/images/pincodestep2.png";
import step3 from "../assets/images/pincodestep3.png";
import step4 from "../assets/images/pincodestep4.png";
import step5 from "../assets/images/pincodestep5.png";
import heroImageServisable from "../assets/images/serviceHero.png";
import whyUseImage from "../assets/images/whyUseServices.png";
import expansionImage from "../assets/images/expansionServices.png";
//printLable
import iconLogin from "../assets/images/icon-login.png";
import iconCreate from "../assets/images/icon-create.png";
import iconSelect from "../assets/images/icon-select.png";
import iconGenerate from "../assets/images/icon-generate.png";
import iconPrint from "../assets/images/icon-print.png";
import iconAttach from "../assets/images/icon-attach.png";

// Hero and Section Images
import labelHero from "../assets/images/label-hero.png";
import puzzleImage from "../assets/images/benifits-puzzle.png";
import readyToShipImage from "../assets/images/ready-to-ship.png";

//trust section
import trustImage from "../assets/images/shipcave_truss.png";
import { Clock, Headphones, MapPin, ShieldCheck } from "lucide-react";

// --- Global Variables ---
const compnayName = "Shipcave Logistics";
const supportEmail = "support@shipcave.com";
const websiteLink = "www.shipcave.com";
const address =
  "Shipcave, First Floor, Govind Complex B, 127, Pote Patil Rd, Amravati, Maharashtra 444604 ";
const careerEmail = "support@shipcave.com";
const totalPincodes = "29,000+";
const companyFullLegalName = "Deleosys Technologies Private limited";
const mainPhone = "+91 9270137130";
const GST_number = " 27AAMCD3549A1ZR";
import mainLogo from "../assets/images/shipcave_mainlogo.png";

export const brandConfig = {
  meta: {
    name: compnayName,
    tagline: `Ship Smarter, Go Farther - Your Trusted Courier Partner`,

    Home: {
      hero: {
        image: heroImages,
        taglin1: `${compnayName}`,
        taglin2: ` Your Trusted Courier Partner`,
        subTagline: `Smart Shipping Starts With Us.`,
      },

      logoScroll: {
        infinitScrollImage: [
          blueDart,
          dtdc,
          expressBees,
          eKart,
          delhivery,
          shadowfx,
          shreemaruti,
        ],
      },

      trustSection: {
        trustImage: trustImage,
        description: `We make shipping simple, reliable, and stress-free connecting
        businesses and customers across the globe.`,
        feturesCards: [
          { icon: ShieldCheck, title: "Transparent Pricing" },
          { icon: Clock, title: "On-Time Delivery" },
          { icon: MapPin, title: "Widest Reach" },
          { icon: Headphones, title: "Support with Heart" },
        ],
      },

      stats: {
        stash1: { number: "500+", label: "Happy Clients" },
        stash2: { number: "5000+", label: "Daily Shipments" },
        stash3: {
          number: `${totalPincodes} Covered`,
          label: "Pincodes Covered",
        },
      },
      featureTabs: {
        title: "Our Core",
        titleHighlight: "Highlights",
        features: [
          {
            id: 0,
            tabTitle: "The Control Tower Dashboard",
            icon: Feature1Icon,
            headline: "The Control Tower Dashboard:",
            subHeadline: "Your 360-Degree View",
            description:
              "Gain complete visibility and control over your shipments and orders with our Control Tower Dashboard. It provides a comprehensive, single-view platform to monitor key metrics and track shipments in real time.",
            image: f1Hero,
          },
          {
            id: 1,
            tabTitle: "D+2 COD Remittance",
            icon: Feature2Icon,
            headline: "D+2 COD Remittance:",
            subHeadline: "Fastest Cash Access in the Industry",
            description:
              "We understand the challenges of running a business, which is why we offer the fastest COD remittance in the industry—D+2 COD Remittance.",
            image: f2Hero,
          },
          {
            id: 2,
            tabTitle: 'Free "After ship tracking page"',
            icon: Feature3Icon,
            headline: 'Free "After Ship Tracking Page":',
            subHeadline: "Enhance Customer Experience",
            description:
              "We offer a Free After Ship Tracking Page to help you provide seamless tracking updates directly on your website.",
            image: f3Hero,
          },
          {
            id: 3,
            tabTitle: "Amazon self-ship",
            icon: Feature4Icon,
            headline: "Amazon Self-ship:",
            subHeadline: "Streamline Operations",
            description:
              "Seamlessly integrate your Amazon orders and manage logistics efficiently with our self-ship capabilities.",
            image: f4Hero,
          },
        ],
      },
      whyChooseUs: {
        heading: { main: "Why", highlight: "Choose Us?" },
        subHeading: {
          main: "Smart Shipping,",
          highlight: "Simplified for You",
        },
        description:
          "From local deliveries to global logistics, we ensure every shipment arrives safely, on time, every time. Experience seamless logistics designed for growth.",
        image: whyChooseUsImage,
        features: [
          {
            title: "Affordable Rates",
            desc: "Prices start as low as ₹18 for 500 grams.",
            icon: dollarEuroIcon,
          },
          {
            title: "Fastest COD Remittance",
            desc: "Enjoy guaranteed cash-on-delivery remittance within just 1 day.",
            icon: clockIcon,
          },
          {
            title: "Extensive Coverage",
            desc: `Partnered with major carriers, servicing over ${totalPincodes} pincodes.`,
            icon: locationMarkerIcon,
          },
        ],
      },
      happyCustomers: {
        heading: { main: "Our Happy", highlight: "Customers" },
        brands: [ujwalaLogo, sanskritLogo, amaansaLogo, pvcLogo, abhinavLogo],
        testimonials: [
          {
            name: "Kartik Nair",
            role: "E-commerce Operations Head",
            image: kartikNairHs,
            quote:
              "I’ve used several shipping platforms in the past, but none match the efficiency and professionalism of this team. Every package is handled with care, the prices are reasonable, and deliveries are always on schedule. Truly dependable.",
          },
          {
            name: "Anuj Patel",
            role: "Logistics Manager",
            image: arjunPatelHs,
            quote:
              "Our business depends heavily on fast and reliable deliveries. Their service has helped us improve customer satisfaction significantly. Real-time tracking and prompt updates make everything smooth.",
          },
        ],
      },
      integrations: {
        tagline: "Ship Smart",
        heading: {
          highlight: "Multi-channel",
          rest: "& Multi-courier solutions in one place",
        },
        description:
          "Explore 50+ integrations that streamline your daily workflow and keep things familiar.",
        image: integrationCloudImage,
      },
      contactForm: {
        heading: "Need Help With a Shipment?",
        subheading:
          "Fill out the form and our team will guide you every step of the way.",
        image: contactImage,
        options: ["500", "500 - 2000", "1000 - 3000+"],
      },
    },

    about: {
      discription: `Shipcave Logistics is one of the leading courier aggregator platforms, providing smart and reliable shipping solutions for businesses and individuals. Shipcave connects users with multiple trusted courier partners to offer domestic and international shipping services at competitive rates.

The platform is known for courier services, domestic courier delivery, international shipping, cargo solutions, bulk order logistics, e-commerce shipping, and door-to-door parcel services. With an easy-to-use dashboard, real-time tracking, and multiple courier integrations, Shipcave helps businesses streamline their shipping operations.

Whether you are an e-commerce seller, small business, or enterprise, Shipcave provides efficient logistics management, cost-effective shipping options, and reliable delivery services across India and globally.

Shipcave continues to build a strong logistics ecosystem by partnering with leading courier networks and providing seamless shipping technology.`,
      vision: `
1. Simplifying Logistics
To make shipping simple, transparent, and accessible for every business through a powerful courier aggregator platform.

2. Empowering Businesses
To empower e-commerce sellers, MSMEs, and enterprises with affordable and reliable logistics solutions that help them scale faster.

3. Building a Unified Shipping Network
To connect multiple courier partners on one platform, creating a smart logistics ecosystem that provides the best delivery options.

4. Technology-Driven Logistics
To leverage advanced technology for real-time tracking, automated shipping, and seamless logistics management.

5. Global Reach for Local Businesses
To help local businesses expand beyond boundaries by enabling efficient domestic and international shipping solutions.

6. Trusted Logistics Partner
To become one of the most trusted courier aggregator platforms, known for reliability, efficiency, and innovation in logistics.`,
      innovationSolutions: `Our platform is built to empower businesses by offering innovative features that optimize shipping operations and reduce costs. From automated label generation to real-time tracking and AI-based carrier recommendation, our tools help businesses streamline their logistics and make data-driven decisions. By integrating with leading courier partners, we ensure that your products are delivered safely and on time, every time.`,
      commitmentTo: `We don't just provide logistics services; we're dedicated to the success of our customers. Our team goes above and beyond to offer personalized support and valuable insights, helping you scale your business efficiently. We believe that our growth is directly tied to the success of our merchants, and we are proud to support sellers who trust ${compnayName} to handle their shipping needs.`,
      joinUsNow: `We don't just provide logistics services; we're dedicated to the success of our customers. Our team goes above and beyond to offer personalized support and valuable insights, helping you scale your business efficiently. We believe that our growth is directly tied to the success of our merchants, and we are proud to support sellers who trust ${compnayName} to handle their shipping needs.`,
      contactUslink: supportEmail,
      careerAt: careerEmail,
      image: {
        aboutHero,
        visionImage,
        commitmentImage,
        journeyImage,
      },
    },
    Features: {
      codPage: {
        hero: {
          title: {
            rest: "Our Convenient",
            highlight: "Cash On Delivery Service",
          },
          description: `At ${compnayName}, we understand the importance of flexibility and convenience when it comes to making payments for your shipments. That's why we offer Cash On Delivery (COD) services, allowing recipients to pay for their orders in cash at the time of delivery.`,
          image: codHero,
        },
        howItWorks: [
          {
            id: 1,
            title: "Sender's Choice",
            desc: "As the sender, you have the option to select 'Cash On Delivery' as the payment method for your shipment.",
          },
          {
            id: 2,
            title: "Shipment Delivery",
            desc: "We will pick up your shipment and deliver it to the recipient's address.",
          },
          {
            id: 3,
            title: "Payment Upon Delivery",
            desc: "When the shipment arrives, the recipient pays the courier the exact payment amount specified by you in cash.",
          },
          {
            id: 4,
            title: "Secure Transactions",
            desc: "Our couriers are trained to handle COD transactions securely and accurately, ensuring your payment is safely collected.",
          },
        ],
        benefits: {
          image: codBenefits,
          data: [
            {
              id: "pay",
              title: "Payment Convenience",
              description:
                "Recipients can pay for their shipments at the time of delivery, eliminating the need for advance payment.",
            },
            {
              id: "sec",
              title: "Security and Trust",
              description:
                "COD provides an extra layer of security, as payments are made only upon verifying the condition of the parcel.",
            },
            {
              id: "flex",
              title: "Flexibility",
              description:
                "For e-commerce businesses, offering COD as a payment option can cater to varied client preferences.",
            },
            {
              id: "risk",
              title: "Reduced Risk",
              description:
                "With COD, senders can reduce the risk of non-payment or disputes, facilitating smooth operations.",
            },
          ],
        },
        usingCod: {
          image: usingCodImage,
          text: `To use our COD service, simply select it as your preferred payment method when booking your shipment. Specify the expected amount to be collected upon delivery, and leave the rest to us. Our team at ${compnayName} will handle your transaction with the utmost care and professionalism.`,
        },
        additionalInfo: `Our Cash On Delivery service may include specific terms and conditions, such as maximum limits on the value of the shipment or the cash collection amount. It is essential to review and agree to these terms when selecting COD as your payment method. Our COD remittance delivery will be done within 2 to 4 days.\n\nWe are committed to providing convenient and reliable shipping solutions, and our COD service is just one of the ways we fulfill that commitment. If you have any questions or require further assistance regarding our COD service, please do not hesitate to contact our customer support team.\n\nThank you for choosing ${compnayName} for your shipping needs.`,
      },
      pincodePage: {
        hero: {
          title: {
            rest: "Check if Your",
            highlight: "pin code is Serviceable",
          },
          description: `At ${compnayName}, we are dedicated to providing reliable shipping services to as many locations as possible. To ensure that we can serve you effectively, we maintain a list of serviceable pin codes.`,
          image: heroImageServisable,
        },
        process: {
          title: {
            rest: "Using our Serviceable",
            highlight: "Pin Codes Checker",
          },
          description:
            "Our Serviceable Pin Codes Checker is a simple tool that allows you to verify whether your specific pin code is included in our serviceable areas.",
          description2:
            "If your pin code is serviceable, you can proceed with shipping. If not, please note our services may not be available for delivery to your area at this time.",
          steps: [
            { id: 1, icon: step1, title: "Visit the Company Website" },
            {
              id: 2,
              icon: step2,
              title: "Locate the 'Serviceable Pin Codes' section",
            },
            { id: 3, icon: step3, title: "Enter your Pin Code in the field" },
            {
              id: 4,
              icon: step4,
              title: "Click the 'Check' or 'Verify' Button",
            },
            { id: 5, icon: step5, title: "Receive Instant Results" },
          ],
        },
        whyUse: {
          image: whyUseImage,
          features: [
            {
              id: "conv",
              title: "Convenience",
              description:
                "Quickly determine whether our shipping services cover your location.",
            },
            {
              id: "eff",
              title: "Efficiency",
              description:
                "Plan your shipments and deliveries more effectively by checking in advance.",
            },
            {
              id: "acc",
              title: "Accuracy",
              description:
                "Our tool is regularly updated to provide accurate information regarding serviceable areas.",
            },
          ],
        },
        expansion: {
          title: { rest: "Serviceable", highlight: "Area Expansion" },
          description: `At ${compnayName}, we are continuously working to expand our serviceable areas. If your pin code is currently not serviceable, please check back regularly.`,
          image: expansionImage,
        },
      },
      labelPrintingPage: {
        hero: {
          title: { rest: "Effortless Shipping", highlight: "Label Printing" },
          description: `${compnayName} makes the shipping process easy and efficient. With our user-friendly online platform, you can generate and print shipping labels in just a few simple steps from your home or office.`,
          image: labelHero,
        },
        process: {
          title: {
            rest: "How to Print Shipping Labels with",
            highlight: compnayName,
          },
          description:
            "Printing shipping labels is a straightforward process that ensures your shipments are properly labeled and ready for delivery.",
          description2:
            "That's it! Your package is now properly labeled with tracking numbers, recipient details, and barcodes for efficient delivery.",
          steps: [
            { id: 1, icon: iconLogin, title: "Log into your account" },
            { id: 2, icon: iconCreate, title: "Create a Shipment" },
            { id: 3, icon: iconSelect, title: "Select Shipping Service" },
            { id: 4, icon: iconGenerate, title: "Generate Shipping Label" },
            { id: 5, icon: iconPrint, title: "Print the Label" },
            { id: 6, icon: iconAttach, title: "Attach the Label" },
          ],
        },
        benefits: {
          image: puzzleImage,
          features: [
            {
              id: "conv",
              title: "Convenience",
              description:
                "Print labels from your home or office without visiting a shipping center.",
            },
            {
              id: "acc",
              title: "Accuracy",
              description:
                "Platform ensures all essential shipping info is included, reducing manual errors.",
            },
            {
              id: "eff",
              title: "Efficiency",
              description:
                "Save time by generating and printing labels in a matter of minutes.",
            },
            {
              id: "track",
              title: "Tracking",
              description:
                "Each label includes a unique tracking number to monitor progress.",
            },
          ],
        },
        tips: [
          {
            id: 1,
            title: "Use a High-Quality Printer",
            desc: "A laser or thermal printer is ideal for clarity and barcode scannability.",
          },
          {
            id: 2,
            title: "Choose Label Paper",
            desc: "Use adhesive label paper to ensure they adhere securely to your packages.",
          },
          {
            id: 3,
            title: "Check Print Settings",
            desc: "Optimize orientation and size (usually 4x6 inches) before printing.",
          },
        ],
        readyToShip: {
          image: readyToShipImage,
          text: "Printing labels is just one of the many features we offer to make your shipping experience hassle-free. Our platform is designed to simplify the process for both local and international shipping.\n\nIf you need assistance, our support team is ready to help you ensure your shipments reach their destination on time.",
        },
      },
    },
    partnersPage: {
      hero: {
        title: { highlight: "Partnerships", rest: "Our Valued" },
        description: `At ${compnayName}, we take pride in our strategic partnerships with industry leaders and organizations that share our commitment to excellence and customer satisfaction. These partnerships are instrumental in expanding our capabilities and enhancing the services we offer to our valued customers.`,
      },
      network: {
        title: { highlight: "Network", rest: "Our Partner" },
        description:
          "We have established partnerships across various sectors, including logistics, e-commerce, technology, and more.",
        items: [
          {
            id: 1,
            title: "E-commerce Platforms",
            desc: "We collaborate with e-commerce giants and platforms to provide seamless shipping solutions for online businesses of all sizes.",
          },
          {
            id: 2,
            title: "Technology Providers",
            desc: "Our technology partners help us stay at the forefront of innovation, enabling us to offer advanced shipping and tracking solutions.",
          },
          {
            id: 3,
            title: "Logistics Companies",
            desc: "Partnerships with logistics companies ensure the efficient movement of shipments across the globe, enhancing our reach and capabilities.",
          },
          {
            id: 4,
            title: "Small and Medium Enterprises",
            desc: "We work closely with SMEs to support their shipping needs, offering tailored solutions and competitive rates.",
          },
        ],
      },
      benefits: {
        title: { highlight: "Benefits", rest: "of our Partnerships" },
        subHeading:
          "Our partnerships bring several benefits to our customers and partners alike:",
        image: benefitsImage,
        data: [
          {
            id: "enhanced",
            title: "Enhanced Services",
            description:
              "Partnerships allow us to offer a wider range of services, from express shipping to customized solutions.",
          },
          {
            id: "global",
            title: "Global Reach",
            description:
              "Collaborations with logistics experts enable us to reach more destinations and provide international shipping options.",
          },
          {
            id: "innovation",
            title: "Innovation",
            description:
              "Technology partnerships drive innovation, resulting in improved tracking, convenience, and efficiency for our customers.",
          },
          {
            id: "pricing",
            title: "Competitive Pricing",
            description:
              "Our extensive partner network allows us to negotiate competitive rates, saving you money on shipping costs.",
          },
        ],
      },
      becomePartner: {
        title: { highlight: "Partner", rest: "Become Our" },
        description: `If you are interested in becoming a partner with ${compnayName} or exploring potential collaborations, we welcome your inquiries. We believe in fostering mutually beneficial relationships that drive success and growth for all parties involved.\n\nTo discuss partnership opportunities or learn more about our current partners and collaborations, please contact our partnership team. We look forward to exploring new possibilities and working together to provide exceptional shipping solutions to our customers.`,
        image: becomePartnerImage,
      },
      commitment: {
        title: { highlight: "Commitment", rest: "Our" },
        text: `At ${compnayName}, we are committed to delivering the highest level of service and reliability to our customers and partners. We understand the importance of strong partnerships in achieving our mission to provide efficient and affordable shipping solutions to businesses and individuals worldwide.\n\nThank you for considering ${compnayName} as your shipping partner. We are dedicated to building lasting and fruitful relationships that contribute to the success of our customers and the growth of our partner network.`,
      },
    },
    trackOrderPage: {
      hero: {
        image: heroImage,
        title: "Track Your Shipment with ease",
        desc: `Tracking your order with ${compnayName} is a simple and efficient way to stay updated on the status and location of your shipment.`,
      },
      statusSteps: [
        {
          id: 1,
          icon: iconReceived,
          title: "Order Received",
          description: "Your order has been successfully placed.",
        },
        {
          id: 2,
          icon: iconPicked,
          title: "Order Picked",
          description: "Your shipment has been picked up from the sender.",
        },
        {
          id: 3,
          icon: iconTransit,
          title: "Order In Transit",
          description: "Your shipment is on its way to the destination hub.",
        },
        {
          id: 4,
          icon: iconOutDelivery,
          title: "Out for Delivery",
          description:
            "The shipment is out for final delivery to your doorstep.",
        },
        {
          id: 5,
          icon: iconDelivered,
          title: "Delivered",
          description:
            "Package has been successfully delivered to the recipient.",
        },
      ],
      whyUse: [
        {
          id: 1,
          icon: iconVisibility,
          title: "Visibility",
          description:
            "Stay informed about your package's whereabouts throughout its journey.",
        },
        {
          id: 2,
          icon: iconPeace,
          title: "Peace of Mind",
          description:
            "Know when your shipment will arrive and track its delivery in real-time.",
        },
        {
          id: 3,
          icon: iconSecurity,
          title: "Security",
          description:
            "Verify that your package is on the right path and identify any potential issues.",
        },
        {
          id: 4,
          icon: iconEfficiency,
          title: "Efficiency",
          description:
            "Easily locate your package's status without the need for extensive customer service inquiries.",
        },
      ],
      troubleshooting: {
        image: troubleshootingImage,
        data: [
          {
            id: 1,
            title: "Double-check your Tracking Number",
            description:
              "Ensure that you've entered the correct tracking number. Typos are a common reason for tracking errors.",
          },
          {
            id: 2,
            title: "Allow for Processing Time",
            description:
              "If you've just received a tracking number, it may take a few hours for the information to update in the system.",
          },
          {
            id: 3,
            title: "Contact Customer Support",
            description:
              "If you are still unable to track your package or have concerns, please contact our support team for assistance.",
          },
        ],
      },
      faq: {
        items: [
          {
            question: "How do I check the live status of my order?",
            answer:
              "Enter your AWB or Order ID in the search bar above and click 'Track Now' to see real-time updates.",
          },
          {
            question: "I didn't get a tracking number - What now?",
            answer:
              "Please check your email/SMS confirmation. If missing, contact the merchant/sender immediately.",
          },
          {
            question: "Why is my delivery taking longer than expected?",
            answer:
              "Delays can happen due to weather, customs, or high volume. Check the status for specific alerts.",
          },
          {
            question: "Can I cancel my shipping order?",
            answer:
              "Cancellations depend on the shipment status. If not yet picked up, please contact support.",
          },
          {
            question:
              "My order says 'Delivered' but I don't have it. What should I do?",
            answer:
              "Check with neighbors or your building reception. If still missing, contact us within 24 hours.",
          },
        ],
        description:
          "If you have any questions or require assistance with tracking your order, please don't hesitate to contact our customer support team. We are here to help you and provide you with the information you need to ensure a smooth shipping experience.",
      },
    },
    contactPage: {
      mapImage: mapImage,
      companyName: companyFullLegalName,
      address: address,
      phone: mainPhone,
      email: supportEmail,
      hero: {
        title: { rest: "Contact us for any", highlight: "shipment query" },
        description: `At ${compnayName}, we value your feedback and inquiries. We're here to assist you with any questions or concerns you may have. Please don't hesitate to get in touch with us.`,
      },
    },

    nav: {
      banner: {
        text: `${compnayName} is India's trusted partner for speed and reliable delivery, offering express parcels, same-day and next-day shipping, seamless returns, and complete fulfillment support for growing businesses.`,
        highlight: `Ship Smarter with ${compnayName}`,
        suffix: ".",
      },
      menuItems: [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        {
          label: "Features",
          path: "#", // Parent path
          isDropdown: true,
          children: [
            { label: "Cash on Delivery", path: "/cash-on-delivery" },
            { label: "Serviceable Pincodes", path: "/serviceable-pincodes" },
            { label: "Print Shipping Labels", path: "/print-shipping-labels" },
            // { label: "Amazon Selfship", path: "/amazon-selfship" },
          ],
        },
        { label: "Partners", path: "/partners" },
        { label: "Track Order", path: "/track-order" },
        // { label: "Blog", path: "/blog" },

        { label: "Pricing", path: "/pricing" },
        { label: "Contact", path: "/contact-us" },
      ],
      buttons: {
        login: "Log In",
        signup: "Sign UP",
      },
    },
    footer: {
      companyDesc:
        "We help businesses ship smarter with our courier aggregation platform, offering reliable deliveries, best shipping rates, and seamless logistics solutions across India.",
      contact: {
        address: address,
        phone: mainPhone,
        email: supportEmail,
        GST_number: GST_number,
        website: websiteLink,
      },
      socials: [
        { Icon: "Twitter", href: "https://twitter.com" },
        { Icon: "Facebook", href: "https://facebook.com" },
        { Icon: "Instagram", href: "https://instagram.com" },
        { Icon: "Linkedin", href: "https://linkedin.com" },
      ],
      copyright: `@ Copyright ${compnayName}. All Right Reserved`,
    },
  },

  assets: {
    logo: mainLogo,
    logoFooter: "/assets/images/footerLogo.png",
    // Images from your design
    heroImage: "/assets/images/hero-courier-man.png",
    trustImage: "/assets/images/trust-courier-man.png",
    contactBg: "/assets/images/contact-bg.png",
  },
  contact: {
    phone: mainPhone,
    email: supportEmail,
    address: address,
    whatsapp: `https://wa.me/${mainPhone.replace(/\s+/g, "").replace("+", "")}`,
  },
  links: {
    login: `https://app.shipcave.com/signin`,
    signup: `https://app.shipcave.com/signup`,
  },
};
