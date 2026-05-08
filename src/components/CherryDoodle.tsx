type DoodleType = 'cherries' | 'cherry' | 'heart' | 'sparkle'

interface Props {
  type: DoodleType
  size?: number
  className?: string
}

export default function CherryDoodle({ type, size = 48, className }: Props) {
  if (type === 'cherries') {
    return (
      <svg viewBox="0 0 110 110" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M38 38 Q 55 18 72 38" stroke="#3a1f1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M55 18 Q 66 6 78 14 Q 66 18 55 18" fill="#5a7a3a" stroke="#3a1f1a" strokeWidth="1.5"/>
        <ellipse cx="33" cy="58" rx="18" ry="19" fill="#c8253a" stroke="#3a1f1a" strokeWidth="2.5"/>
        <ellipse cx="27" cy="50" rx="5" ry="6" fill="rgba(255,255,255,0.45)"/>
        <ellipse cx="77" cy="64" rx="18" ry="19" fill="#c8253a" stroke="#3a1f1a" strokeWidth="2.5"/>
        <ellipse cx="71" cy="56" rx="5" ry="6" fill="rgba(255,255,255,0.45)"/>
      </svg>
    )
  }

  if (type === 'cherry') {
    return (
      <svg viewBox="0 0 60 80" width={size * 0.75} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M30 22 Q 30 6 46 6" stroke="#3a1f1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M46 6 Q 58 0 58 10 Q 50 12 46 6" fill="#5a7a3a" stroke="#3a1f1a" strokeWidth="1.5"/>
        <ellipse cx="30" cy="56" rx="24" ry="22" fill="#c8253a" stroke="#3a1f1a" strokeWidth="2.5"/>
        <ellipse cx="22" cy="48" rx="6" ry="8" fill="rgba(255,255,255,0.45)"/>
      </svg>
    )
  }

  if (type === 'heart') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21 C12 21 3 14 3 8.5 C3 5.42 5.42 3 8.5 3 C10.24 3 11.91 3.81 13 5.08 C14.09 3.81 15.76 3 17.5 3 C20.58 3 23 5.42 23 8.5 C23 14 12 21 12 21 Z" transform="translate(-1 0)" fill="#c8253a"/>
      </svg>
    )
  }

  // sparkle
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 L13.5 9.5 L21 12 L13.5 14.5 L12 22 L10.5 14.5 L3 12 L10.5 9.5 Z" fill="#c8253a"/>
      <path d="M19 3 L19.8 5.2 L22 6 L19.8 6.8 L19 9 L18.2 6.8 L16 6 L18.2 5.2 Z" fill="#c8253a" opacity="0.6"/>
      <path d="M5 16 L5.6 17.8 L7 18 L5.6 18.2 L5 20 L4.4 18.2 L3 18 L4.4 17.8 Z" fill="#c8253a" opacity="0.6"/>
    </svg>
  )
}
