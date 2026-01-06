import React from 'react'

// Original BAAZ Logo Component - Using the actual company logo
const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 48, text: 'text-lg' },
    md: { icon: 60, text: 'text-2xl' },
    lg: { icon: 80, text: 'text-4xl' },
    xl: { icon: 100, text: 'text-5xl' },
    hero: { icon: 280, text: 'text-6xl' },
  }

  const { icon, text } = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Original BAAZ Logo Image */}
      <img 
        src="/images/LOGO.jpeg" 
        alt="BAAZ - Since 1967 - India's No. 1 Pulley Manufacturer" 
        width={icon}
        height={icon}
        className="rounded-full object-cover shadow-lg border-2 border-primary-500/20"
        style={{ width: icon, height: icon }}
      />

      {/* Text */}
      {showText && (
        <div className="hidden sm:flex flex-col">
          <span className={`font-display font-bold tracking-wider ${text}`}>
            <span className="text-primary-500">BAAZ</span>
          </span>
          <span className="text-xs text-industrial-400 tracking-[0.15em] uppercase">
            Since 1967
          </span>
        </div>
      )}
    </div>
  )
}

// Animated Logo for Hero Section - Using original logo
export const AnimatedLogo = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl scale-110" />
      
      {/* Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[320px] h-[320px] rounded-full border border-primary-500/20 animate-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[350px] h-[350px] rounded-full border border-primary-500/10 border-dashed animate-spin" style={{ animationDuration: '30s' }} />
      </div>
      
      {/* Main Logo Image */}
      <img 
        src="/images/LOGO.jpeg" 
        alt="BAAZ - Since 1967 - Genuine Service Equipments - All Type Pulley Manufacturer" 
        className="relative z-10 w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-primary-500/30"
      />
    </div>
  )
}

// Compact Logo for Footer/Small Spaces
export const CompactLogo = ({ className = '' }) => {
  return (
    <img 
      src="/images/LOGO.jpeg" 
      alt="BAAZ Logo" 
      className={`w-12 h-12 rounded-full object-cover shadow-md border border-primary-500/20 ${className}`}
    />
  )
}

export default Logo
