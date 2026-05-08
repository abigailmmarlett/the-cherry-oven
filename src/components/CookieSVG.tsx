export type CookieVariant = 'cherry' | 'choc' | 'pistachio' | 'strawberry' | 'blondie' | 'lemon' | 'snicker' | 'chai'

const palettes: Record<CookieVariant, { dough: string; chip: string; chip2: string }> = {
  cherry:     { dough: '#e8b88d', chip: '#c8253a', chip2: '#fadbdd' },
  choc:       { dough: '#d8a06b', chip: '#3a1f1a', chip2: '#6b4a40' },
  pistachio:  { dough: '#cdd9a5', chip: '#f7c5c9', chip2: '#5a7a3a' },
  strawberry: { dough: '#fadbdd', chip: '#c8253a', chip2: '#9c1a2c' },
  blondie:    { dough: '#e6c89a', chip: '#8b5a2b', chip2: '#3a1f1a' },
  lemon:      { dough: '#f6e89a', chip: '#3a1f1a', chip2: '#c8a14a' },
  snicker:    { dough: '#d8a06b', chip: '#8b5a2b', chip2: '#fadbdd' },
  chai:       { dough: '#d8a06b', chip: '#6b4a40', chip2: '#f6c97a' },
}

interface Props {
  variant: CookieVariant
  size?: number
}

export default function CookieSVG({ variant, size = 80 }: Props) {
  const p = palettes[variant] ?? palettes.choc
  const id = `f-${variant}-${size}`
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4"/>
        </filter>
      </defs>
      <ellipse cx="60" cy="100" rx="42" ry="6" fill="rgba(58,31,26,0.12)"/>
      <path
        d="M22 60 Q 18 44 30 32 Q 42 22 60 22 Q 80 22 92 36 Q 102 50 96 66 Q 94 80 82 90 Q 70 98 56 96 Q 38 94 28 82 Q 20 72 22 60 Z"
        fill={p.dough} stroke="#3a1f1a" strokeWidth="2" strokeLinejoin="round" filter={`url(#${id})`}
      />
      <circle cx="44" cy="50" r="3" fill={p.chip}/>
      <circle cx="68" cy="42" r="3.5" fill={p.chip}/>
      <circle cx="78" cy="64" r="3" fill={p.chip}/>
      <circle cx="50" cy="74" r="3.2" fill={p.chip}/>
      <circle cx="36" cy="68" r="2.5" fill={p.chip2}/>
      <circle cx="62" cy="58" r="2.5" fill={p.chip2}/>
      <circle cx="74" cy="78" r="2.2" fill={p.chip2}/>
      <path d="M34 38 Q 42 32 52 34" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  )
}
