import React from 'react';
import Input from './Input';
import { Mail, Lock, User, DollarSign, Search } from 'lucide-react';

// This file shows examples of how to use the Input component with TypeScript

const InputExamples: React.FC = () => {
  return (
    <div className="space-y-8 p-6 max-w-md mx-auto">
      {/* Basic usage */}
      <Input 
        label="Email" 
        placeholder="Enter your email"
        type="email"
      />
      
      {/* Password input with toggle */}
      <Input 
        type="password" 
        label="Password" 
        placeholder="Enter your password"
        showPasswordToggle
      />
      
      {/* With icons */}
      <Input 
        label="Email address"
        placeholder="user@example.com"
        leftIcon={<Mail size={18} />}
      />
      
      {/* With error state */}
      <Input 
        label="Username"
        placeholder="Choose a username"
        error="Username is already taken"
        leftIcon={<User size={18} />}
      />
      
      {/* With success state */}
      <Input 
        label="Username"
        placeholder="Choose a username"
        success="Username is available"
        leftIcon={<User size={18} />}
      />
      
      {/* With helper text */}
      <Input 
        label="Password"
        type="password"
        placeholder="Enter a strong password"
        helperText="Password must be at least 8 characters"
        leftIcon={<Lock size={18} />}
      />
      
      {/* With prefix and suffix */}
      <Input 
        label="Amount"
        type="number"
        placeholder="0.00"
        prefix="$"
      />
      
      {/* Floating label */}
      <Input 
        label="Search"
        placeholder="Search..."
        floatingLabel
        leftIcon={<Search size={18} />}
      />
      
      {/* Different variants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input 
          variant="filled"
          label="Filled Variant"
          placeholder="Filled input"
        />
        
        <Input 
          variant="outline"
          label="Outline Variant"
          placeholder="Outline input"
        />
        
        <Input 
          variant="underline"
          label="Underline Variant"
          placeholder="Underline input"
        />
        
        <Input 
          variant="glass"
          label="Glass Variant"
          placeholder="Glass input"
        />
        
        <Input 
          variant="glass-premium"
          label="Premium Glass"
          placeholder="Premium glass input"
        />
        
        <Input 
          variant="material"
          label="Material Variant"
          placeholder="Material input"
        />
      </div>
      
      {/* Different effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input 
          effect="glow"
          label="Glow Effect"
          placeholder="Focus to see glow"
        />
        
        <Input 
          effect="purple-glow"
          label="Purple Glow"
          placeholder="Focus to see purple glow"
        />
        
        <Input 
          effect="shimmer"
          label="Shimmer Effect"
          placeholder="Focus to see shimmer"
        />
        
        <Input 
          effect="float"
          label="Float Effect"
          placeholder="Focus to see float"
        />
        
        <Input 
          effect="scale"
          label="Scale Effect"
          placeholder="Focus to see scale"
        />
        
        <Input 
          effect="focus-ring"
          label="Focus Ring"
          placeholder="Focus to see ring"
        />
      </div>
      
      {/* Different sizes */}
      <div className="space-y-4">
        <Input 
          size="xs"
          label="Extra Small"
          placeholder="XS input"
        />
        
        <Input 
          size="sm"
          label="Small"
          placeholder="SM input"
        />
        
        <Input 
          size="md"
          label="Medium (default)"
          placeholder="MD input"
        />
        
        <Input 
          size="lg"
          label="Large"
          placeholder="LG input"
        />
        
        <Input 
          size="xl"
          label="Extra Large"
          placeholder="XL input"
        />
      </div>
      
      {/* Different roundedness */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input 
          rounded="none"
          label="No Rounding"
          placeholder="Squared corners"
        />
        
        <Input 
          rounded="xs"
          label="Extra Small Rounding"
          placeholder="Slight rounding"
        />
        
        <Input 
          rounded="md"
          label="Medium Rounding (default)"
          placeholder="Medium rounding"
        />
        
        <Input 
          rounded="lg"
          label="Large Rounding"
          placeholder="Large rounding"
        />
        
        <Input 
          rounded="xl"
          label="Extra Large Rounding"
          placeholder="XL rounding"
        />
        
        <Input 
          rounded="full"
          label="Full Rounding"
          placeholder="Pill shape"
        />
      </div>
      
      {/* Clearable input */}
      <Input 
        label="Clearable Input"
        placeholder="Type something and clear it"
        clearable
      />
      
      {/* Neumorphic styles */}
      <div className="space-y-4 p-6 bg-[#e0e5ec] rounded-lg">
        <Input 
          variant="neumorphic-light"
          label="Neumorphic Light"
          placeholder="Light neumorphic input"
          labelClassName="text-gray-700"
        />
      </div>
      
      <div className="space-y-4 p-6 bg-[#2a2d3e] rounded-lg">
        <Input 
          variant="neumorphic-dark"
          label="Neumorphic Dark"
          placeholder="Dark neumorphic input"
          labelClassName="text-gray-100"
        />
      </div>
    </div>
  );
};

export default InputExamples;