import React from 'react'

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 40, text: 'text-lg' },
    md: { icon: 50, text: 'text-xl' },
    lg: { icon: 64, text: 'text-2xl' },
    xl: { icon: 80, text: 'text-3xl' },
  }

  const { icon, text } = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/images/LOGO.jpeg" 
        alt="BAAZ Logo" 
        width={icon}
        height={icon}
        className="rounded-xl object-cover border border-primary-500/20"
        style={{ width: icon, height: icon }}
      />
      {showText && (
        <div className="hidden sm:block">
          <span className={`font-display font-bold ${text} text-white`}>
            BAAZ
          </span>
          <p className="text-xs text-industrial-400">Since 1967</p>
        </div>
      )}
    </div>
  )
}

export const AnimatedLogo = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-2xl scale-110" />
      <img 
        src="/images/LOGO.jpeg" 
        alt="BAAZ Logo" 
        className="relative z-10 w-48 h-48 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl"
      />
    </div>
  )
}

export const CompactLogo = ({ className = '' }) => {
  return (
    <img 
      src="/images/LOGO.jpeg" 
      alt="BAAZ" 
      className={`w-10 h-10 rounded-lg object-cover border border-primary-500/20 ${className}`}
    />
  )
}

export default Logo
