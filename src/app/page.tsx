"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, Calendar, ChefHat, CheckCircle, Clock, Heart, HelpCircle, Leaf, MapPin, Newspaper, Sparkles, Star, Trophy, Users, UtensilsCrossed, Wine } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="plain"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Exceptional Dining Awaits"
          description="Experience culinary excellence in an atmosphere of refined elegance and warm hospitality"
          tag="Fine Dining"
          tagIcon={ChefHat}
          buttons={[
            { text: "View Menu", href: "product" },
            { text: "Make Reservation", onClick: () => console.log('Reservation clicked') }
          ]}
          imageSrc="https://pixabay.com/get/g919bca38a5027b81563bd01d08cd135f9634b87cb80ff7ebf91e534eaab3125e5e8f0f6730f528db75f35737a6cd2d2213a0c03bdb50d9d1c0293c12eb4f79d1_1280.jpg"
          imageAlt="Elegant restaurant interior with warm lighting"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At Bella Vista, we believe every meal should be a memorable journey of flavors, crafted with passion and served with genuine warmth in an atmosphere that feels like home."
          features={[
            {
              icon: ChefHat,
              title: "Master Chefs",
              description: "Our experienced culinary team brings decades of expertise, creating dishes that honor tradition while embracing innovation."
            },
            {
              icon: Leaf,
              title: "Fresh Ingredients",
              description: "We source the finest local and seasonal ingredients daily, ensuring every dish bursts with natural flavors and quality."
            },
            {
              icon: Heart,
              title: "Warm Hospitality",
              description: "Our dedicated staff provides attentive, personalized service that makes every guest feel welcomed and valued."
            },
            {
              icon: Award,
              title: "Award Winning",
              description: "Recognized for culinary excellence with multiple awards and consistently rated among the city's top dining destinations."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Why Choose Bella Vista"
          description="Discover what sets our restaurant apart from the rest"
          tag="Excellence"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Ambiance",
              description: "Elegant dining atmosphere with warm lighting, comfortable seating, and tasteful decor that creates the perfect setting for any occasion.",
              icon: Sparkles
            },
            {
              title: "Wine Selection",
              description: "Carefully curated wine list featuring exceptional selections from renowned vineyards to perfectly complement every dish.",
              icon: Wine
            },
            {
              title: "Private Events",
              description: "Intimate private dining spaces available for special celebrations, business meetings, and memorable gatherings.",
              icon: Calendar
            },
            {
              title: "Fresh Daily",
              description: "Menu items prepared fresh daily using seasonal ingredients sourced from local farmers and trusted suppliers.",
              icon: Clock
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Signature Dishes"
          description="Taste our chef's most celebrated creations"
          tag="Featured Menu"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Chef's Special",
              name: "Truffle Pasta Primavera",
              price: "$32.00",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://pixabay.com/get/g86dbceaf8ca6eec86ebeeee482dfe0ca13454f1855564c036d7b0d4d7907a2c56c439a1332e1e99a9d14e71928e4bcbae153efe85ace7b99fb87d045755a7c8c_1280.jpg",
              imageAlt: "Truffle pasta with seasonal vegetables",
              onProductClick: () => console.log('Pasta clicked')
            },
            {
              id: "2",
              brand: "House Favorite",
              name: "Dry-Aged Ribeye Steak",
              price: "$48.00",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://pixabay.com/get/g76d19fbccfb90f199f2e33b326075295dec26360f52a0c6a0b198a29728d8e52301ee7b9e934e169c4887e38caa57cf3cb67422dcbfc7a0fcaaf6a433ee38bc3_1280.jpg",
              imageAlt: "Perfectly grilled ribeye steak",
              onProductClick: () => console.log('Steak clicked')
            },
            {
              id: "3",
              brand: "Ocean Fresh",
              name: "Mediterranean Seafood Platter",
              price: "$42.00",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://pixabay.com/get/gb2a06916e59174d448c4fb08bea868aad646e2d9a8eb7076444e320ae11981a4906e7958ef6d8432aaa3d4be4d481f3f4113e8098bd36359be8666a21bc63c64_1280.jpg",
              imageAlt: "Fresh seafood platter with Mediterranean flavors",
              onProductClick: () => console.log('Seafood clicked')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Dining Experiences"
          description="Choose the perfect dining experience for any occasion"
          tag="Reservations"
          tagIcon={Calendar}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Popular Choice",
              badgeIcon: Heart,
              price: "$65",
              subtitle: "Perfect for couples and small groups",
              buttons: [
                { text: "Book Table", onClick: () => console.log('Book table clicked') },
                { text: "View Menu", href: "product" }
              ],
              features: [
                "3-course tasting menu",
                "Wine pairing recommendations",
                "Premium seating",
                "Complimentary dessert"
              ]
            },
            {
              id: "2",
              badge: "Chef's Table",
              badgeIcon: ChefHat,
              price: "$95",
              subtitle: "Exclusive culinary experience",
              buttons: [
                { text: "Reserve Now", onClick: () => console.log('Chef table clicked') },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "7-course chef's tasting",
                "Kitchen tour with chef",
                "Premium wine selections",
                "Personalized service"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Achievements"
          description="Numbers that speak to our commitment to excellence"
          tag="Recognition"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "15",
              title: "Years",
              description: "Serving exceptional cuisine",
              icon: Clock
            },
            {
              id: "2",
              value: "50K+",
              title: "Guests",
              description: "Memorable dining experiences",
              icon: Users
            },
            {
              id: "3",
              value: "25",
              title: "Awards",
              description: "Culinary recognition",
              icon: Trophy
            },
            {
              id: "4",
              value: "98%",
              title: "Satisfaction",
              description: "Customer happiness rate",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The passionate culinary artists behind every exceptional dish"
          tag="Our Chefs"
          tagIcon={ChefHat}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marco Benedetti",
              role: "Executive Chef",
              description: "With 20 years of culinary expertise, Chef Marco brings authentic Italian techniques and innovative flavors to every dish.",
              imageSrc: "https://pixabay.com/get/g48a524cad9f061ce3599826a723959598efd780272ba715e9cc2f85fecf4ad76586cac756654ac7d245045991dd4007a6c33314e14dc00182cfd333080ae83b6_1280.jpg",
              imageAlt: "Executive Chef Marco Benedetti"
            },
            {
              id: "2",
              name: "Anna Rossi",
              role: "Sous Chef",
              description: "Specializing in traditional pasta-making and seasonal ingredients, Chef Anna ensures each dish meets our highest standards.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Sous Chef Anna Rossi"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Hear from our satisfied customers about their dining experiences"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Enthusiast",
              company: "Local Reviewer",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g455fcce82271b2356764e573ed4fafed57515914126375d1425f78bce6478a68400899bb2bef8b52a11cd1d5292d6a7e3c3b5236481a325bfc65ffbfe549047f_1280.jpg",
              imageAlt: "Sarah Johnson dining experience"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              company: "Corporate Client",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga85f36b0fc3f3b572b89e1c5a102778171438ed066a1cd1da5785b3e9eb04ee397e7de1e3a805806f401ce232533839a7d255de690b2445fe7ca09fa25a7930e_1280.jpg",
              imageAlt: "Michael Chen restaurant review"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Anniversary Celebration",
              company: "Special Occasion",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g149e70d81ec9a83ae7b12bf61049b603b5d0e6ccbe948c01201ac294d4b79edaa375ea1e0e5753c58da887703ba19510e251ca2033317516b36be190986897ea_1280.jpg",
              imageAlt: "Emily Rodriguez anniversary dinner"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Wedding Reception",
              company: "Private Events",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb310c7b7e69b5aae7c9212eeccb20cb5a91aa7f026df9eb093e62305a923d4b8171f6371092a97376352e84f082168c3bc07fc8b790eaa2911592902d65c063f_1280.jpg",
              imageAlt: "David Thompson wedding celebration"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured In"
          description="Recognized by leading food and lifestyle publications"
          tag="Press"
          tagIcon={Newspaper}
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need a reservation?",
              content: "We highly recommend making a reservation, especially for dinner service and weekends. You can book online through our website or call us directly."
            },
            {
              id: "2",
              title: "What is your dress code?",
              content: "We maintain a smart casual dress code. While we don't require formal attire, we ask that guests dress appropriately for fine dining."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We can accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please inform us when making your reservation."
            },
            {
              id: "4",
              title: "What are your operating hours?",
              content: "We're open Tuesday through Sunday. Lunch service: 12:00 PM - 3:00 PM, Dinner service: 5:30 PM - 10:00 PM. Closed Mondays."
            },
            {
              id: "5",
              title: "Do you offer private dining?",
              content: "Yes! We have private dining rooms available for special occasions, business meetings, and celebrations. Contact us for availability and pricing."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest News"
          description="Stay updated with our seasonal menus and special events"
          tag="Updates"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Menu",
              title: "Spring Seasonal Menu Launch",
              excerpt: "Discover our new spring dishes featuring fresh, local ingredients and innovative culinary techniques",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Spring seasonal dishes",
              authorName: "Chef Marco",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "15 Mar 2024",
              onBlogClick: () => console.log('Spring menu blog clicked')
            },
            {
              id: "2",
              category: "Events",
              title: "Wine Tasting Evening",
              excerpt: "Join us for an exclusive wine tasting event featuring selections from premium vineyards",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Wine tasting event",
              authorName: "Sommelier Anna",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "22 Mar 2024",
              onBlogClick: () => console.log('Wine tasting blog clicked')
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          tagIcon={MapPin}
          title="Visit Bella Vista Today"
          description="Experience exceptional dining in the heart of the city. We look forward to welcoming you to our restaurant."
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Bella Vista restaurant exterior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="Subscribe to our newsletter for exclusive offers and updates about special events."
          onSubmit={() => console.log('Newsletter subscription')}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Vista"
          columns={[
            {
              items: [
                { label: "Menu", href: "product" },
                { label: "Reservations", onClick: () => console.log('Reservations clicked') },
                { label: "Private Events", onClick: () => console.log('Private events clicked') }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Chefs", href: "team" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Hours & Location", onClick: () => console.log('Hours clicked') },
                { label: "Gift Cards", onClick: () => console.log('Gift cards clicked') }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}