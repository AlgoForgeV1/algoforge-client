export default function Defs() {
    return (
        <>
            <radialGradient id="dropShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1A0B00" stopOpacity={0.35} />
        <stop offset="100%" stopColor="#1A0B00" stopOpacity={0} />
      </radialGradient>

      <linearGradient id="slimeBodyGrad" x1="30%" y1="10%" x2="70%" y2="90%">
        <stop offset="0%" stopColor="#FFAB40" />
        <stop offset="45%" stopColor="#FF6D00" />
        <stop offset="85%" stopColor="#DD2C00" />
        <stop offset="100%" stopColor="#9A0000" />
      </linearGradient>

      <radialGradient id="coreGlow" cx="50%" cy="65%" r="45%">
        <stop offset="0%" stopColor="#FFE082" stopOpacity={0.7} />
        <stop offset="60%" stopColor="#FF6D00" stopOpacity={0.3} />
        <stop offset="100%" stopColor="#DD2C00" stopOpacity={0} />
      </radialGradient>

      <linearGradient id="glossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.6} />
        <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
      </linearGradient>

      <linearGradient id="goggleFrame" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8D6E63" />
        <stop offset="50%" stopColor="#4E342E" />
        <stop offset="100%" stopColor="#3E2723" />
      </linearGradient>

      <linearGradient id="goggleLens" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#80DEEA" />
        <stop offset="100%" stopColor="#00838F" />
      </linearGradient>

      <linearGradient id="hammerHead" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#607D8B" />
        <stop offset="50%" stopColor="#37474F" />
        <stop offset="100%" stopColor="#212121" />
      </linearGradient>

      <radialGradient id="hammerHeat" cx="80%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFAB40" />
        <stop offset="50%" stopColor="#FF3D00" stopOpacity={0.8} />
        <stop offset="100%" stopColor="#37474F" stopOpacity={0} />
      </radialGradient>

      <linearGradient id="woodHandle" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A1887F" />
        <stop offset="50%" stopColor="#6D4C41" />
        <stop offset="100%" stopColor="#4E342E" />
      </linearGradient>

      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation={8} result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
        </>
    );
}