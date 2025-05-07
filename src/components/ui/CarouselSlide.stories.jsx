import React from 'react';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { Carousel, CarouselSlide, CarouselCaption } from './CarouselSlide';
import Button from './Button';
import { MotionCard, MotionCardContent } from './MotionCard';

import { 
  ArrowRight, 
  ChevronRight, 
  Tag,
  Star,
  Calendar,
  MapPin,
  UserIcon
} from 'lucide-react';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'glass', 'glass-premium', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    effect: {
      control: 'select',
      options: ['none', 'glow', 'purple-glow', 'multi-glow', 'float'],
    },
    autoPlay: { control: 'boolean' },
    autoPlayInterval: { control: 'number' },
    showArrows: { control: 'boolean' },
    showIndicators: { control: 'boolean' },
    loop: { control: 'boolean' },
    navButtonSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    gap: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-background-primary">
        <Story />
      </div>
    ),
  ],
};

// Basic Carousel Example
export const Default = () => (
  <Carousel className="h-64">
    <CarouselSlide className="bg-blue-500 text-white flex items-center justify-center">
      <h2 className="text-2xl font-bold">First Slide</h2>
    </CarouselSlide>
    
    <CarouselSlide className="bg-purple-500 text-white flex items-center justify-center">
      <h2 className="text-2xl font-bold">Second Slide</h2>
    </CarouselSlide>
    
    <CarouselSlide className="bg-green-500 text-white flex items-center justify-center">
      <h2 className="text-2xl font-bold">Third Slide</h2>
    </CarouselSlide>
  </Carousel>
);

// Image Carousel
export const ImageCarousel = () => (
  <Carousel className="h-96" rounded="xl" variant="elevated" autoPlay={true}>
    <CarouselSlide>
      <img 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop" 
        alt="Computer setup" 
        className="w-full h-full object-cover"
      />
      <CarouselCaption className="bg-black/50 backdrop-blur-sm text-white">
        <h3 className="text-xl font-bold">Modern Workspace</h3>
        <p>Clean and minimal setup for maximum productivity</p>
      </CarouselCaption>
    </CarouselSlide>
    
    <CarouselSlide>
      <img 
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop" 
        alt="VR Headset" 
        className="w-full h-full object-cover"
      />
      <CarouselCaption className="bg-black/50 backdrop-blur-sm text-white">
        <h3 className="text-xl font-bold">Virtual Reality</h3>
        <p>Experience immersive digital environments</p>
      </CarouselCaption>
    </CarouselSlide>
    
    <CarouselSlide>
      <img 
        src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1770&auto=format&fit=crop" 
        alt="Mobile phone" 
        className="w-full h-full object-cover"
      />
      <CarouselCaption className="bg-black/50 backdrop-blur-sm text-white">
        <h3 className="text-xl font-bold">Mobile Technology</h3>
        <p>Stay connected wherever you go</p>
      </CarouselCaption>
    </CarouselSlide>
  </Carousel>
);

// Enterprise Theme Carousel
export const EnterpriseTheme = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-10">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Enterprise Theme Carousel</h3>
      
      <Carousel 
        variant="elevated" 
        className="h-80" 
        rounded="lg"
        padding="sm"
      >
        {/* Product Feature Slides */}
        <CarouselSlide className="px-6 flex items-center bg-background-primary">
          <div className="max-w-md mx-auto">
            <div className="text-primary-base font-medium mb-2">Enterprise Solutions</div>
            <h2 className="text-3xl font-bold mb-4">Secure Infrastructure</h2>
            <p className="text-foreground-secondary mb-6">
              Our enterprise-grade security ensures your data stays protected. 
              With end-to-end encryption and robust authentication mechanisms,
              you can focus on business while we handle security.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="primary"
                rightIcon={<ArrowRight size={16} />}
              >
                Learn More
              </Button>
              <Button variant="outline">Contact Sales</Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop" 
              alt="Security" 
              className="h-80 w-auto object-cover"
            />
          </div>
        </CarouselSlide>
        
        <CarouselSlide className="px-6 flex items-center bg-background-primary">
          <div className="max-w-md mx-auto">
            <div className="text-primary-base font-medium mb-2">Enterprise Solutions</div>
            <h2 className="text-3xl font-bold mb-4">Scalable Performance</h2>
            <p className="text-foreground-secondary mb-6">
              Built to scale with your business needs. Our platform handles 
              millions of transactions daily with sub-second response times,
              ensuring seamless operation even during peak loads.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="primary"
                rightIcon={<ArrowRight size={16} />}
              >
                See Benchmarks
              </Button>
              <Button variant="outline">Documentation</Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1560732488-7b5f4d50f7ce?w=800&auto=format&fit=crop" 
              alt="Performance" 
              className="h-80 w-auto object-cover"
            />
          </div>
        </CarouselSlide>
        
        <CarouselSlide className="px-6 flex items-center bg-background-primary">
          <div className="max-w-md mx-auto">
            <div className="text-primary-base font-medium mb-2">Enterprise Solutions</div>
            <h2 className="text-3xl font-bold mb-4">Advanced Analytics</h2>
            <p className="text-foreground-secondary mb-6">
              Transform data into actionable insights with our advanced analytics suite.
              Customizable dashboards and real-time reporting help you make
              informed decisions quickly and confidently.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="primary"
                rightIcon={<ArrowRight size={16} />}
              >
                Explore Analytics
              </Button>
              <Button variant="outline">Watch Demo</Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" 
              alt="Analytics" 
              className="h-80 w-auto object-cover"
            />
          </div>
        </CarouselSlide>
      </Carousel>
      
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Testimonial Carousel</h3>
      
      <Carousel 
        variant="default" 
        className="h-64" 
        rounded="lg"
        navButtonSize="sm"
        autoPlay={true}
        autoPlayInterval={6000}
      >
        {/* Testimonial Slides */}
        <CarouselSlide className="p-8 bg-background-secondary rounded-lg flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="text-primary-base mr-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="inline-block h-4 w-4" fill="currentColor" />
              ))}
            </div>
            <span className="text-foreground-secondary text-sm">5.0 rating</span>
          </div>
          <blockquote className="text-foreground-primary text-lg italic mb-6">
            "Implementing this solution has increased our team's productivity by 35%. 
            The seamless integration with our existing systems made the transition effortless."
          </blockquote>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <UserIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-foreground-tertiary text-sm">CTO, TechCorp Inc.</p>
            </div>
          </div>
        </CarouselSlide>
        
        <CarouselSlide className="p-8 bg-background-secondary rounded-lg flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="text-primary-base mr-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="inline-block h-4 w-4" fill="currentColor" />
              ))}
            </div>
            <span className="text-foreground-secondary text-sm">5.0 rating</span>
          </div>
          <blockquote className="text-foreground-primary text-lg italic mb-6">
            "The enterprise-grade security features gave us confidence to move our entire 
            infrastructure to the cloud. Support team was exceptional throughout the process."
          </blockquote>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <UserIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Michael Chen</p>
              <p className="text-foreground-tertiary text-sm">Security Director, FinanceHub</p>
            </div>
          </div>
        </CarouselSlide>
        
        <CarouselSlide className="p-8 bg-background-secondary rounded-lg flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="text-primary-base mr-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="inline-block h-4 w-4" fill="currentColor" />
              ))}
            </div>
            <span className="text-foreground-secondary text-sm">5.0 rating</span>
          </div>
          <blockquote className="text-foreground-primary text-lg italic mb-6">
            "The analytics dashboard transformed how we make decisions. We now have 
            real-time insights into customer behavior that directly impact our strategy."
          </blockquote>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <UserIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Emily Rodriguez</p>
              <p className="text-foreground-tertiary text-sm">CMO, Retail Solutions</p>
            </div>
          </div>
        </CarouselSlide>
      </Carousel>
    </div>
  </ThemeProvider>
);

// Tech Dark Theme Carousel
export const TechDarkTheme = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-10">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Tech Dark Theme Carousel</h3>
      
      <Carousel 
        className="h-80" 
        rounded="xl"
        autoPlay={true}
        gap={20}
        padding="md"
      >
        <CarouselSlide className="rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1662731744391-3777b2c34a60?q=80&w=1771&auto=format&fit=crop" 
            alt="Gaming Setup" 
            className="w-full h-full object-cover"
          />
          <CarouselCaption className="bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
            <div className="max-w-md">
              <div className="text-sm text-blue-400 font-medium mb-1">Featured</div>
              <h2 className="text-2xl font-bold text-white mb-2">Ultimate Gaming Experience</h2>
              <p className="text-white/80 mb-4">
                Immerse yourself in stunning visuals and responsive gameplay with our cutting-edge hardware.
              </p>
              <Button 
                variant="accent-blue"
                rightIcon={<ChevronRight size={16} />}
              >
                Explore
              </Button>
            </div>
          </CarouselCaption>
        </CarouselSlide>
        
        <CarouselSlide className="rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1770&auto=format&fit=crop" 
            alt="VR Headset" 
            className="w-full h-full object-cover"
          />
          <CarouselCaption className="bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
            <div className="max-w-md">
              <div className="text-sm text-purple-400 font-medium mb-1">New Technology</div>
              <h2 className="text-2xl font-bold text-white mb-2">Virtual Reality</h2>
              <p className="text-white/80 mb-4">
                Step into new worlds with our latest VR technology. A revolution in immersive experiences.
              </p>
              <Button 
                variant="accent-purple"
                rightIcon={<ChevronRight size={16} />}
              >
                Discover
              </Button>
            </div>
          </CarouselCaption>
        </CarouselSlide>
        
        <CarouselSlide className="rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop" 
            alt="Team working" 
            className="w-full h-full object-cover"
          />
          <CarouselCaption className="bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
            <div className="max-w-md">
              <div className="text-sm text-cyan-400 font-medium mb-1">Collaboration</div>
              <h2 className="text-2xl font-bold text-white mb-2">Team Solutions</h2>
              <p className="text-white/80 mb-4">
                Powerful tools designed for modern teams to work efficiently from anywhere.
              </p>
              <Button 
                variant="accent-cyan"
                rightIcon={<ChevronRight size={16} />}
              >
                Learn More
              </Button>
            </div>
          </CarouselCaption>
        </CarouselSlide>
      </Carousel>
      
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Product Showcase</h3>
      
      <Carousel 
        variant="dark"
        className="h-96"
        rounded="xl"
        navButtonSize="lg"
        padding="md"
      >
        <CarouselSlide className="flex flex-col md:flex-row items-center p-6">
          <div className="md:w-1/2 p-6">
            <img 
              src="https://images.unsplash.com/photo-1625002174285-659879cfec37?q=80&w=1771&auto=format&fit=crop" 
              alt="Headphones" 
              className="w-full h-auto object-contain max-h-80 mx-auto"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="inline-block bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
              New Release
            </div>
            <h2 className="text-3xl font-bold mb-2">ProSound X7</h2>
            <p className="text-foreground-secondary mb-4">
              Experience audio like never before with our premium noise-cancelling headphones.
              Featuring spatial audio and 60-hour battery life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-amber-400" />
                </div>
                <span>Class-leading sound quality with deep bass</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-amber-400" />
                </div>
                <span>Active noise cancellation blocks out all distractions</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-amber-400" />
                </div>
                <span>Premium comfort with memory foam ear cushions</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button variant="accent-purple">Buy Now - $299</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </CarouselSlide>
        
        <CarouselSlide className="flex flex-col md:flex-row items-center p-6">
          <div className="md:w-1/2 p-6">
            <img 
              src="https://images.unsplash.com/photo-1655439393349-83e30d446cb9?q=80&w=1770&auto=format&fit=crop" 
              alt="Keyboard" 
              className="w-full h-auto object-contain max-h-80 mx-auto"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="inline-block bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
              Best Seller
            </div>
            <h2 className="text-3xl font-bold mb-2">TechType Mechanical</h2>
            <p className="text-foreground-secondary mb-4">
              Ultra-responsive mechanical keyboard with customizable RGB lighting
              and programmable macro keys for the ultimate typing experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-amber-400" />
                </div>
                <span>Cherry MX switches with 50 million keystroke durability</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-amber-400" />
                </div>
                <span>Fully programmable with onboard memory</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-amber-400" />
                </div>
                <span>Aircraft-grade aluminum frame for maximum durability</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button variant="accent-blue">Buy Now - $149</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </CarouselSlide>
      </Carousel>
    </div>
  </ThemeProvider>
);

// Glass Theme Carousel
export const GlassTheme = () => (
  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-lg">
    <ThemeProvider theme="glass">
      <div className="space-y-10">
        <h3 className="text-white text-lg font-medium mb-4">Glass Theme Carousel</h3>
        
        <Carousel 
          className="h-80" 
          autoPlay={true}
          autoPlayInterval={4000}
        >
          <CarouselSlide className="rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop" 
              alt="Beach Resort" 
              className="w-full h-full object-cover"
            />
            <CarouselCaption className="backdrop-blur-md bg-black/30 border border-white/10 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Tropical Paradise Resort</h2>
                  <p className="text-white/80">Maldives, Indian Ocean</p>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-white/70 mr-1" />
                      <span className="text-sm text-white/70">Available Year-round</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-400 mr-1" fill="currentColor" />
                      <span className="text-sm text-white">4.7 (872 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselCaption>
          </CarouselSlide>
        </Carousel>
        
        <h3 className="text-white text-lg font-medium mb-4">Glass Cards Carousel</h3>
        
        <Carousel 
          variant="glass-premium" 
          effect="glow"
          rounded="xl"
          padding="md"
          navButtonSize="sm"
          className="py-8"
          gap={16}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselSlide key={i} className="h-72 flex items-center justify-center px-4">
              <MotionCard
                variant="glass-premium"
                intensity="medium"
                glow="medium"
                highlight="medium"
                rounded="xl"
                className="w-full h-full"
              >
                <MotionCardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mr-3">
                      <Tag className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Premium Package {i + 1}</h3>
                      <p className="text-white/70 text-sm">Starting at $99/month</p>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Unlimited access to all features</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Priority customer support</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Advanced analytics dashboard</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Custom integrations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button variant="glass" className="mt-4 w-full">
                    Select Plan
                  </Button>
                </MotionCardContent>
              </MotionCard>
            </CarouselSlide>
          ))}
        </Carousel>
        
        <h3 className="text-white text-lg font-medium mb-4">Events Carousel</h3>
        
        <Carousel
          variant="glass"
          effect="glow"
          rounded="xl"
          className="h-64"
        >
          {[
            {
              title: "Annual Tech Conference",
              date: "June 15-17, 2025",
              location: "San Francisco, CA",
              image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1770&auto=format&fit=crop"
            },
            {
              title: "Developer Workshop",
              date: "July 8, 2025",
              location: "New York, NY",
              image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1774&auto=format&fit=crop"
            },
            {
              title: "Product Launch Event",
              date: "August 22, 2025",
              location: "London, UK",
              image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1769&auto=format&fit=crop"
            }
          ].map((event, index) => (
            <CarouselSlide key={index} className="rounded-xl overflow-hidden">
              <img 
                src={event.image}
                alt={event.title} 
                className="w-full h-full object-cover"
              />
              <CarouselCaption position="bottom" className="backdrop-blur-md bg-black/30 border border-white/10 rounded-t-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-white/70 mr-1" />
                        <span className="text-sm text-white/70">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-white/70 mr-1" />
                        <span className="text-sm text-white/70">{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="glass" size="sm">Register</Button>
                </div>
              </CarouselCaption>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </ThemeProvider>
  </div>
);

// 3D Motion Cards Carousel
export const MotionCardsCarousel = () => (
  <ThemeProvider theme="techDark">
    <h3 className="text-foreground-primary text-lg font-medium mb-4">3D Motion Cards Carousel</h3>
    
    <Carousel 
      variant="dark"
      rounded="xl"
      padding="md"
      className="py-10"
      navButtonSize="lg"
      gap={20}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <CarouselSlide key={i} className="h-80 px-4 flex items-center justify-center">
          <MotionCard
            variant="dark"
            intensity="strong"
            glow="medium"
            highlight="medium"
            rounded="xl"
            className="w-full h-full"
          >
            <MotionCardContent className="p-6 flex flex-col h-full">
              <div className="text-center mb-4">
                <div className="bg-accent-purple/20 p-3 rounded-full inline-block mb-3">
                  <Star className="h-6 w-6 text-accent-purple" />
                </div>
                <h3 className="text-2xl font-bold">Feature {i + 1}</h3>
                <p className="text-foreground-tertiary mt-2">
                  Interactive 3D card with motion effects and detailed content. Hover to see the magic.
                </p>
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <div className="bg-background-tertiary rounded-lg p-4 mb-4">
                  <p className="text-sm text-foreground-tertiary">
                    This card uses 3D motion effects that respond to mouse movement for a truly immersive experience.
                  </p>
                </div>
                
                <div className="flex justify-between items-center text-sm text-foreground-tertiary">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Active</span>
                  </div>
                  <span>Card {i + 1} of 5</span>
                </div>
              </div>
              
              <Button variant="accent-purple" className="mt-4">
                Explore Feature
              </Button>
            </MotionCardContent>
          </MotionCard>
        </CarouselSlide>
      ))}
    </Carousel>
  </ThemeProvider>
);

// Responsive Mobile Carousel
export const MobileCarousel = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Mobile Friendly Carousel</h3>
      
      <div className="max-w-xs mx-auto">
        <Carousel 
          variant="dark"
          rounded="xl"
          className="h-[500px]"
          navButtonSize="sm"
        >
          {[
            {
              title: "Headphones",
              price: "$249",
              image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop",
              color: "blue"
            },
            {
              title: "Smart Watch",
              price: "$349",
              image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1764&auto=format&fit=crop",
              color: "purple"
            },
            {
              title: "Wireless Earbuds",
              price: "$129",
              image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1632&auto=format&fit=crop",
              color: "emerald"
            }
          ].map((product, index) => (
            <CarouselSlide key={index} className="rounded-xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <div className="flex items-center my-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 mr-0.5" 
                        fill={i < 4 ? "#facc15" : "transparent"} 
                        stroke={i < 4 ? "transparent" : "currentColor"}
                      />
                    ))}
                    <span className="text-sm text-foreground-tertiary ml-2">4.0 (120)</span>
                  </div>
                  <p className="text-foreground-secondary text-sm">
                    High-quality premium product with exceptional performance and sleek design.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold">{product.price}</span>
                    <span className="text-green-500 text-sm">In Stock</span>
                  </div>
                  <Button 
                    variant={`accent-${product.color}`} 
                    fullWidth
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </div>
  </ThemeProvider>
);