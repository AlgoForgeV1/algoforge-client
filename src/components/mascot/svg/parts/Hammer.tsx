export default function Hammer() {
  return (
    <g id="layer-hammer">
      {/* Handle */}
      <rect
        x={520}
        y={380}
        width={28}
        height={230}
        rx={14}
        fill="url(#woodHandle)"
      />

      {/* Wood Grain */}
      <path
        d="M520 530L548 540
           M520 550L548 560
           M520 570L548 580"
        stroke="#3E2723"
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.6}
      />

      {/* Hammer Head */}
      <rect
        x={460}
        y={330}
        width={140}
        height={80}
        rx={16}
        fill="url(#hammerHead)"
      />

      {/* Front Face */}
      <path
        d="M580 330
           L610 342
           C618 346 622 355 622 370
           C622 385 618 394 610 398
           L580 410Z"
        fill="url(#hammerHead)"
      />

      {/* Heat Glow */}
      <path
        d="M580 330
           L610 342
           C618 346 622 355 622 370
           C622 385 618 394 610 398
           L580 410Z"
        fill="url(#hammerHeat)"
      />

      {/* Highlight */}
      <rect
        x={470}
        y={336}
        width={100}
        height={6}
        rx={3}
        fill="#ECEFF1"
        opacity={0.4}
      />

      {/* Right Hand */}
      <path
        d="M510 480
           C490 470 475 490 485 510
           C495 525 520 525 530 510
           C538 495 525 480 510 480Z"
        fill="#FF6D00"
      />

      <ellipse
        cx={500}
        cy={492}
        rx={8}
        ry={5}
        fill="#FFAB40"
        opacity={0.6}
        transform="rotate(-20 500 492)"
      />
    </g>
  );
}