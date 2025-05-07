import React from 'react';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { 
  ScrollMotion, 
  ScrollMotionItem, 
  ScrollMotion3D, 
  ParallaxScrollItem,
  scrollMotionStyles
} from './ScrollMotion';
import { MotionCard, MotionCardContent } from './MotionCard';
import Button from './Button';

import { 
  Users,
  Rocket,
  Shield,
  Medal,
  Zap,
  Globe,
  Layers,
  Star,
  Code,
  Database,
  LucideChrome,
  CheckCircle
} from 'lucide-react';

// Add the scroll motion styles to the document
// In a real-world scenario, you would add these to your global CSS
const StylesInjector = () => {
  React.useEffect(() => {
    // Create style element
    const styleElement = document.createElement('style');
    styleElement.innerHTML = scrollMotionStyles;
    document.head.appendChild(styleElement);
    
    // Clean up
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return null;
};

export default {
  title: 'Components/ScrollMotion',
  component: ScrollMotion,
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: 'select',
      options: [
        'none', 
        'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight',
        'scaleIn', 'scaleInUp',
        'rotateIn', 'rotateInLeft',
        'flipInX', 'flipInY', 'tiltIn',
        'bounceIn', 'blurIn', 'glowIn'
      ],
    },
    duration: {
      control: 'select',
      options: ['faster', 'fast', 'normal', 'slow', 'slower'],
    },
    delay: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'extraLarge'],
    },
    easing: {
      control: 'select',
      options: ['linear', 'ease', 'easeIn', 'easeOut', 'easeInOut', 'spring', 'bounce'],
    },
    stagger: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    once: { control: 'boolean' },
    threshold: {
      control: 'select',
      options: ['default', 'half', 'most', 'full'],
    },
    offset: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    as: { control: 'text' },
    perspective: { control: 'number' },
    depth: { control: 'number' },
    rotateX: { control: 'number' },
    rotateY: { control: 'number' },
    rotateZ: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div className="p-0">
        <StylesInjector />
        <div className="p-8 bg-background-primary min-h-[1200px]">
          <h2 className="text-2xl font-bold mb-6">Scroll down to see animations</h2>
          <p className="text-foreground-secondary mb-8">The animations will trigger as elements enter the viewport.</p>
          
          <div className="h-[300px]"></div>
          
          <Story />
          
          <div className="h-[1000px]"></div>
        </div>
      </div>
    ),
  ],
};

// Basic examples
export const Default = () => (
  <div className="space-y-24">
    <div>
      <h3 className="text-xl font-bold mb-6">Basic Scroll Animations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ScrollMotion animation="fadeInUp" duration="normal" easing="easeOut">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Fade In Up</h4>
            <p className="text-foreground-secondary">This element fades in and moves up when scrolled into view.</p>
          </div>
        </ScrollMotion>
        
        <ScrollMotion animation="fadeInLeft" duration="normal" easing="easeOut" delay="small">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Fade In Left</h4>
            <p className="text-foreground-secondary">This element fades in and moves left with a small delay.</p>
          </div>
        </ScrollMotion>
        
        <ScrollMotion animation="fadeInRight" duration="normal" easing="easeOut" delay="medium">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Fade In Right</h4>
            <p className="text-foreground-secondary">This element fades in and moves right with a medium delay.</p>
          </div>
        </ScrollMotion>
        
        <ScrollMotion animation="scaleIn" duration="normal" easing="spring">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Scale In</h4>
            <p className="text-foreground-secondary">This element scales into view with a spring effect.</p>
          </div>
        </ScrollMotion>
        
        <ScrollMotion animation="rotateIn" duration="normal" easing="easeInOut">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Rotate In</h4>
            <p className="text-foreground-secondary">This element rotates into view with ease-in-out timing.</p>
          </div>
        </ScrollMotion>
        
        <ScrollMotion animation="bounceIn" duration="normal" easing="bounce">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Bounce In</h4>
            <p className="text-foreground-secondary">This element bounces into view with a bounce easing.</p>
          </div>
        </ScrollMotion>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-6">3D Scroll Animations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ScrollMotion animation="flipInX" duration="normal" easing="spring">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Flip In X</h4>
            <p className="text-foreground-secondary">This element flips in around the X axis when scrolled into view.</p>
          </div>
        </ScrollMotion>
        
        <ScrollMotion animation="flipInY" duration="normal" easing="spring" delay="small">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Flip In Y</h4>
            <p className="text-foreground-secondary">This element flips in around the Y axis with a small delay.</p>
          </div>
        </ScrollMotion>
        
        <ScrollMotion animation="tiltIn" duration="normal" easing="spring" delay="medium">
          <div className="p-8 bg-background-secondary rounded-lg">
            <h4 className="text-lg font-medium mb-2">Tilt In</h4>
            <p className="text-foreground-secondary">This element tilts in with a subtle 3D perspective effect.</p>
          </div>
        </ScrollMotion>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-6">Staggered Children</h3>
      <ScrollMotion animation="fadeInUp" stagger="medium" easing="easeOut">
        <ScrollMotionItem className="p-6 bg-background-secondary rounded-lg mb-4">
          <h4 className="text-lg font-medium mb-2">First Item</h4>
          <p className="text-foreground-secondary">This is the first item in a staggered animation.</p>
        </ScrollMotionItem>
        
        <ScrollMotionItem className="p-6 bg-background-secondary rounded-lg mb-4">
          <h4 className="text-lg font-medium mb-2">Second Item</h4>
          <p className="text-foreground-secondary">This is the second item in a staggered animation.</p>
        </ScrollMotionItem>
        
        <ScrollMotionItem className="p-6 bg-background-secondary rounded-lg mb-4">
          <h4 className="text-lg font-medium mb-2">Third Item</h4>
          <p className="text-foreground-secondary">This is the third item in a staggered animation.</p>
        </ScrollMotionItem>
        
        <ScrollMotionItem className="p-6 bg-background-secondary rounded-lg">
          <h4 className="text-lg font-medium mb-2">Fourth Item</h4>
          <p className="text-foreground-secondary">This is the fourth item in a staggered animation.</p>
        </ScrollMotionItem>
      </ScrollMotion>
    </div>
  </div>
);

// Enterprise Theme
export const EnterpriseTheme = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-32">
      <div>
        <h3 className="text-xl font-bold mb-2">Enterprise Features</h3>
        <p className="text-foreground-secondary mb-8">Our platform provides everything you need for your business.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Shield className="h-10 w-10 text-primary" />, title: 'Enterprise Security', desc: 'Bank-grade security with advanced encryption' },
            { icon: <Rocket className="h-10 w-10 text-primary" />, title: 'Scalable Performance', desc: 'Handles millions of transactions seamlessly' },
            { icon: <Globe className="h-10 w-10 text-primary" />, title: 'Global Availability', desc: 'Deployed across multiple regions worldwide' },
            { icon: <Users className="h-10 w-10 text-primary" />, title: 'Team Collaboration', desc: 'Built for teams of all sizes to work together' },
            { icon: <Database className="h-10 w-10 text-primary" />, title: 'Data Integration', desc: 'Connect with all your existing systems' },
            { icon: <Medal className="h-10 w-10 text-primary" />, title: 'Compliance Ready', desc: 'GDPR, HIPAA, and SOC 2 compliant' }
          ].map((feature, i) => (
            <ScrollMotion 
              key={i}
              animation="fadeInUp"
              duration="normal"
              easing="easeOut"
              delay={i % 3 === 0 ? "none" : i % 3 === 1 ? "small" : "medium"}
            >
              <div className="p-6 bg-background-secondary rounded-lg border border-border flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                <p className="text-foreground-secondary">{feature.desc}</p>
              </div>
            </ScrollMotion>
          ))}
        </div>
      </div>
      
      <div>
        <ScrollMotion animation="fadeIn" duration="normal" easing="easeOut">
          <h3 className="text-xl font-bold mb-6">How It Works</h3>
        </ScrollMotion>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>
          
          {/* Timeline items */}
          {[
            { title: 'Getting Started', desc: 'Create your account and set up your first project in minutes' },
            { title: 'Data Integration', desc: 'Connect your existing data sources with our seamless integration tools' },
            { title: 'Configuration', desc: 'Customize the platform to match your exact business requirements' },
            { title: 'Deployment', desc: 'Go live with your solution with our expert deployment assistance' }
          ].map((step, i) => (
            <ScrollMotion
              key={i}
              animation="fadeInRight"
              duration="normal"
              easing="spring"
              delay={`${i * 100}ms`}
            >
              <div className="relative flex items-start mb-12 md:ml-[50%]">
                <div className="absolute left-0 md:-left-[15px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-medium">{i + 1}</span>
                </div>
                <div className="ml-12 md:ml-8 p-6 bg-background-secondary rounded-lg border border-border">
                  <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                  <p className="text-foreground-secondary">{step.desc}</p>
                </div>
              </div>
            </ScrollMotion>
          ))}
        </div>
      </div>
      
      <ScrollMotion animation="fadeInUp" duration="normal" easing="easeOut">
        <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to streamline their operations
            and drive business growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Contact Sales</Button>
          </div>
        </div>
      </ScrollMotion>
    </div>
  </ThemeProvider>
);

// Tech Dark Theme with 3D Cards
export const TechDarkTheme = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-32">
      <div>
        <ScrollMotion animation="fadeIn" duration="normal" easing="easeOut">
          <h3 className="text-xl font-bold mb-8">Advanced Technology Stack</h3>
        </ScrollMotion>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Code className="h-10 w-10 text-accent-blue" />, title: 'Modern Architecture', desc: 'Built with the latest technologies and frameworks' },
            { icon: <Zap className="h-10 w-10 text-accent-purple" />, title: 'Lightning Fast', desc: 'Optimized for performance and responsiveness' },
            { icon: <Shield className="h-10 w-10 text-accent-emerald" />, title: 'Secure by Design', desc: 'Security built into every layer of the stack' },
            { icon: <Layers className="h-10 w-10 text-accent-cyan" />, title: 'Extensible Platform', desc: 'Easily extend with plugins and custom modules' }
          ].map((feature, i) => (
            <ScrollMotion3D
              key={i}
              animation="tiltIn"
              duration="normal"
              easing="spring"
              perspective={1000}
              depth={50}
              delay={i % 2 === 0 ? "none" : "small"}
            >
              <div className="p-6 bg-background-secondary rounded-xl border border-border flex items-start">
                <div className="p-3 rounded-lg bg-background-tertiary mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                  <p className="text-foreground-secondary">{feature.desc}</p>
                </div>
              </div>
            </ScrollMotion3D>
          ))}
        </div>
      </div>
      
      <div>
        <ScrollMotion animation="fadeInUp" duration="normal" easing="easeOut">
          <h3 className="text-xl font-bold mb-2">Featured Products</h3>
          <p className="text-foreground-secondary mb-8">Explore our latest cutting-edge solutions.</p>
        </ScrollMotion>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Developer SDK', 
              desc: 'Comprehensive toolkit for building custom applications',
              color: 'blue',
              icon: <Code />
            },
            { 
              title: 'Analytics Platform', 
              desc: 'Real-time insights and powerful reporting tools',
              color: 'purple',
              icon: <LucideChrome />
            },
            { 
              title: 'Security Suite', 
              desc: 'Enterprise-grade security for your critical data',
              color: 'emerald',
              icon: <Shield />
            }
          ].map((product, i) => (
            <ScrollMotion
              key={i}
              animation="fadeInUp"
              duration="normal"
              easing="spring"
              delay={i === 0 ? "none" : i === 1 ? "small" : "medium"}
            >
              <MotionCard
                variant="dark"
                intensity="medium"
                glow="medium"
                highlight="medium"
                rounded="xl"
                glowColor={
                  product.color === 'blue' ? 'rgba(59, 130, 246, 0.4)' :
                  product.color === 'purple' ? 'rgba(139, 92, 246, 0.4)' :
                  'rgba(16, 185, 129, 0.4)'
                }
              >
                <MotionCardContent className="p-6">
                  <div className="mb-4 flex justify-between items-start">
                    <div className={`p-2 rounded-lg bg-${product.color === 'blue' ? 'accent-blue' : product.color === 'purple' ? 'accent-purple' : 'accent-emerald'}/20`}>
                      {product.icon}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs bg-${product.color === 'blue' ? 'accent-blue' : product.color === 'purple' ? 'accent-purple' : 'accent-emerald'}/20 text-${product.color === 'blue' ? 'accent-blue' : product.color === 'purple' ? 'accent-purple' : 'accent-emerald'}`}>
                      Featured
                    </div>
                  </div>
                  <h4 className="text-lg font-medium mb-2">{product.title}</h4>
                  <p className="text-foreground-secondary mb-4">{product.desc}</p>
                  <Button 
                    variant={`accent-${product.color}`}
                    size="sm"
                  >
                    Learn More
                  </Button>
                </MotionCardContent>
              </MotionCard>
            </ScrollMotion>
          ))}
        </div>
      </div>
      
      <div>
        <ScrollMotion animation="fadeIn" duration="normal" easing="easeOut">
          <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
        </ScrollMotion>
        
        <ScrollMotion animation="fadeInUp" stagger="medium" easing="easeOut">
          {[
            { title: 'Performance', desc: 'Sub-millisecond response times with high throughput capability' },
            { title: 'Scalability', desc: 'Horizontal scaling to handle millions of concurrent users' },
            { title: 'Reliability', desc: '99.99% uptime SLA with multi-region failover' },
            { title: 'Security', desc: 'End-to-end encryption with advanced threat protection' },
            { title: 'Compliance', desc: 'GDPR, HIPAA, SOC 2, and ISO 27001 certified' }
          ].map((spec, i) => (
            <ScrollMotionItem key={i} className="p-4 border-b border-border flex justify-between items-center">
              <div>
                <h4 className="font-medium">{spec.title}</h4>
                <p className="text-sm text-foreground-tertiary">{spec.desc}</p>
              </div>
              <CheckCircle className="h-5 w-5 text-accent-green" />
            </ScrollMotionItem>
          ))}
        </ScrollMotion>
      </div>
    </div>
  </ThemeProvider>
);

// Glass Theme with Parallax
export const GlassTheme = () => (
  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-lg">
    <ThemeProvider theme="glass">
      <div className="space-y-32">
        <div className="relative overflow-hidden rounded-xl p-8">
          {/* Parallax background elements */}
          <ParallaxScrollItem 
            speed={-0.2}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/30 blur-3xl"
          />
          <ParallaxScrollItem 
            speed={-0.3}
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-purple-600/30 blur-3xl"
          />
          
          <div className="relative">
            <ScrollMotion animation="fadeIn" duration="normal" easing="easeOut">
              <h3 className="text-2xl font-bold text-white mb-6">Premium Features</h3>
            </ScrollMotion>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Star className="h-8 w-8 text-amber-400" />, title: 'Premium Support', desc: '24/7 dedicated support from our expert team' },
                { icon: <Zap className="h-8 w-8 text-cyan-400" />, title: 'Advanced Analytics', desc: 'Deep insights into your business performance' },
                { icon: <Shield className="h-8 w-8 text-emerald-400" />, title: 'Enhanced Security', desc: 'Military-grade encryption and protection' },
                { icon: <Users className="h-8 w-8 text-pink-400" />, title: 'Team Collaboration', desc: 'Seamless workflows for your entire team' }
              ].map((feature, i) => (
                <ScrollMotion
                  key={i}
                  animation="fadeInUp"
                  duration="normal"
                  easing="spring"
                  delay={i % 2 === 0 ? "none" : "small"}
                >
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-white/10 mr-4">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">{feature.title}</h4>
                        <p className="text-white/80">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <ScrollMotion animation="fadeInUp" duration="normal" easing="easeOut">
            <h3 className="text-xl font-bold text-white mb-8">Interactive 3D Cards</h3>
          </ScrollMotion>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Premium Plan', price: '$99/mo', features: ['All features', 'Priority support', 'Custom integrations'] },
              { title: 'Business Plan', price: '$299/mo', features: ['Enterprise SLA', 'Dedicated account manager', 'Advanced security'] },
              { title: 'Ultimate Plan', price: '$999/mo', features: ['Custom development', 'On-site training', 'White-label options'] }
            ].map((plan, i) => (
              <ScrollMotion3D
                key={i}
                animation="flipInY"
                duration="normal"
                easing="spring"
                perspective={1000}
                depth={50}
                delay={i === 0 ? "none" : i === 1 ? "small" : "medium"}
              >
                <MotionCard
                  variant="glass-premium"
                  intensity="medium"
                  glow="medium"
                  highlight="medium"
                  rounded="xl"
                >
                  <MotionCardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6 text-center">
                      <h4 className="text-xl font-bold text-white mb-2">{plan.title}</h4>
                      <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                      <p className="text-white/70 text-sm">Billed monthly</p>
                    </div>
                    
                    <div className="flex-grow mb-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-white/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant="glass" 
                      className="w-full"
                      effect="glow"
                    >
                      Get Started
                    </Button>
                  </MotionCardContent>
                </MotionCard>
              </ScrollMotion3D>
            ))}
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl p-8">
          <ParallaxScrollItem 
            speed={-0.2}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-2xl"
          />
          
          <div className="relative">
            <ScrollMotion animation="fadeInUp" duration="normal" easing="easeOut">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                <p className="text-white/80 mb-8">
                  Join thousands of companies already using our platform to streamline operations
                  and drive business growth.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="glass-premium" size="lg">Get Started</Button>
                  <Button variant="glass" size="lg">Learn More</Button>
                </div>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </div>
    </ThemeProvider>
  </div>
);

// Showcase animation types
export const AnimationShowcase = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-16">
      <ScrollMotion animation="fadeIn" duration="normal" easing="easeOut">
        <h3 className="text-xl font-bold mb-6">Animation Showcase</h3>
        <p className="text-foreground-secondary mb-4">
          Scroll down to see each animation type in action.
        </p>
      </ScrollMotion>
      
      <div className="space-y-24">
        {[
          { name: 'fadeIn', title: 'Fade In', desc: 'Simple fade in animation' },
          { name: 'fadeInUp', title: 'Fade In Up', desc: 'Fade in while moving up' },
          { name: 'fadeInLeft', title: 'Fade In Left', desc: 'Fade in while moving from left' },
          { name: 'fadeInRight', title: 'Fade In Right', desc: 'Fade in while moving from right' },
          { name: 'scaleIn', title: 'Scale In', desc: 'Fade in while scaling up' },
          { name: 'rotateIn', title: 'Rotate In', desc: 'Fade in while rotating' },
          { name: 'flipInX', title: 'Flip In X', desc: '3D flip around X axis' },
          { name: 'flipInY', title: 'Flip In Y', desc: '3D flip around Y axis' },
          { name: 'tiltIn', title: 'Tilt In', desc: 'Subtle 3D tilt effect' },
          { name: 'bounceIn', title: 'Bounce In', desc: 'Bouncy entrance animation' },
          { name: 'blurIn', title: 'Blur In', desc: 'Fade in with blur effect' },
          { name: 'glowIn', title: 'Glow In', desc: 'Fade in with glow effect' }
        ].map((anim, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-bold mb-1">{anim.title}</h4>
              <p className="text-foreground-secondary mb-2">{anim.desc}</p>
              <code className="text-sm bg-background-tertiary px-2 py-1 rounded">animation="{anim.name}"</code>
            </div>
            
            <div className="w-full md:w-2/3">
              <ScrollMotion
                animation={anim.name}
                duration="normal"
                easing="spring"
              >
                <div className="p-6 bg-background-secondary rounded-lg border border-border">
                  <h4 className="text-lg font-medium mb-2">{anim.title} Example</h4>
                  <p className="text-foreground-secondary">
                    This element demonstrates the {anim.name} animation when scrolled into view.
                  </p>
                </div>
              </ScrollMotion>
            </div>
          </div>
        ))}
      </div>
    </div>
  </ThemeProvider>
);

// Parallax showcase
export const ParallaxShowcase = () => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
    <ThemeProvider theme="techDark">
      <ScrollMotion animation="fadeIn" duration="normal" easing="easeOut">
        <h3 className="text-xl font-bold text-white mb-6">Parallax Effects</h3>
        <p className="text-white/80 mb-12">
          Elements move at different speeds as you scroll, creating depth.
        </p>
      </ScrollMotion>
      
      <div className="space-y-64 py-12">
        <div className="relative h-80">
          <ParallaxScrollItem speed={-0.2} className="absolute inset-x-0 top-0 h-64 overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1772&auto=format&fit=crop" 
              alt="Stars"
              className="w-full h-full object-cover"
            />
          </ParallaxScrollItem>
          
          <ParallaxScrollItem speed={0.1} className="absolute inset-x-0 top-32 flex justify-center">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-8 text-center max-w-md">
              <h3 className="text-2xl font-bold text-white mb-3">Parallax Depth</h3>
              <p className="text-white/80">
                Elements move at different speeds to create a sense of depth and immersion.
              </p>
            </div>
          </ParallaxScrollItem>
        </div>
        
        <div className="relative h-96">
          <ParallaxScrollItem speed={-0.1} className="absolute -left-12 top-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
          <ParallaxScrollItem speed={-0.2} className="absolute -right-12 top-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <ParallaxScrollItem speed={-0.15} className="absolute left-24 bottom-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            <ParallaxScrollItem speed={0.05}>
              <MotionCard
                variant="glass-premium"
                intensity="medium"
                glow="medium"
                rounded="xl"
              >
                <MotionCardContent className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Fast Movement</h4>
                  <p className="text-white/80">
                    This card moves faster when scrolling, appearing closer to the viewer.
                  </p>
                </MotionCardContent>
              </MotionCard>
            </ParallaxScrollItem>
            
            <ParallaxScrollItem speed={0}>
              <MotionCard
                variant="glass-premium"
                intensity="medium"
                glow="medium"
                rounded="xl"
              >
                <MotionCardContent className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Normal Movement</h4>
                  <p className="text-white/80">
                    This card moves at the normal scrolling speed.
                  </p>
                </MotionCardContent>
              </MotionCard>
            </ParallaxScrollItem>
            
            <ParallaxScrollItem speed={-0.05}>
              <MotionCard
                variant="glass-premium"
                intensity="medium"
                glow="medium"
                rounded="xl"
              >
                <MotionCardContent className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Slow Movement</h4>
                  <p className="text-white/80">
                    This card moves slower when scrolling, appearing further from the viewer.
                  </p>
                </MotionCardContent>
              </MotionCard>
            </ParallaxScrollItem>
          </div>
        </div>
        
        <div className="relative h-96">
          <ParallaxScrollItem speed={-0.2} className="absolute inset-0 overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1770&auto=format&fit=crop" 
              alt="Mountains"
              className="w-full h-full object-cover"
            />
          </ParallaxScrollItem>
          
          <ParallaxScrollItem speed={0.1} className="absolute inset-0 flex items-center justify-center">
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-xl p-8 text-center max-w-lg">
              <h3 className="text-3xl font-bold text-white mb-4">Parallax Scrolling</h3>
              <p className="text-white/90 mb-6">
                Create immersive, depth-rich user experiences with parallax scrolling effects.
              </p>
              <Button variant="glass-premium" size="lg">Explore More</Button>
            </div>
          </ParallaxScrollItem>
        </div>
      </div>
    </ThemeProvider>
  </div>
);