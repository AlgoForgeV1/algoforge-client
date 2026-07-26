"use client";

import * as React from "react";
import type { SVGProps } from "react";
import { motion, easeInOut } from "framer-motion";
import Shadow from "./parts/Shadow";
import Defs from "./parts/Defs";


const SvgForgey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    width="100%"
    height="100%"
    {...props}
  >
    <defs>
      <Defs />
    </defs>

  
    {/* Shadow */}

    <Shadow />

    {/* Hammer */}

    

  
    {/* Slime Body */}

    <motion.g
      id="layer-slime-body"
      animate={{
        scaleX: [1, 1.015, 0.995, 1],
        scaleY: [1, 0.985, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      }}
      style={{
        transformOrigin: "400px 440px",
      }}
    >
      <path
        id="body-shape"
        d="M 400 220
           C 520 220 610 290 620 410
           C 630 530 570 650 440 660
           C 320 670 190 650 180 520
           C 170 390 280 220 400 220 Z"
        fill="url(#slimeBodyGrad)"
      />

      <path
        id="body-core-glow"
        d="M 400 280
           C 490 280 550 340 560 440
           C 570 540 510 620 410 630
           C 310 640 220 610 220 500
           C 220 390 310 280 400 280 Z"
        fill="url(#coreGlow)"
      />

      <path
        d="M210 500C170 510 150 560 180 590C210 610 240 580 230 540Z"
        fill="#E65100"
      />
    </motion.g>

    {/* Left Hand */}

    <motion.g
      id="layer-left-hand"
      animate={{
        rotate: [0, 3, 0, -3, 0],
        x: [0, -2, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: easeInOut,
      }}
      style={{
        transformOrigin: "200px 500px",
      }}
    >
      <path
        d="M200 470C160 460 130 500 150 530C170 550 200 540 215 510C225 490 215 475 200 470Z"
        fill="#FF6D00"
      />

      <ellipse
        cx={175}
        cy={490}
        rx={10}
        ry={5}
        fill="#FFAB40"
        opacity={0.7}
        transform="rotate(-30 175 490)"
      />
    </motion.g>

    {/* Face */}

    <g id="layer-face">
      <ellipse
        cx={300}
        cy={465}
        rx={24}
        ry={14}
        fill="#FF3D00"
        opacity={0.35}
      />

      <ellipse
        cx={480}
        cy={465}
        rx={24}
        ry={14}
        fill="#FF3D00"
        opacity={0.35}
      />

      {/* Left Eye */}

      <motion.g
        id="left-eye"
        animate={{
          scaleY: [1, 1, 0.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.82, 0.87, 1],
          ease: easeInOut,
        }}
        style={{
          transformOrigin: "335px 420px",
        }}
      >
        <ellipse cx={335} cy={420} rx={38} ry={46} fill="#1A0B00" />
        <circle cx={322} cy={402} r={16} fill="#FFFFFF" />
        <circle cx={348} cy={440} r={7} fill="#FFFFFF" />
        <circle cx={320} cy={432} r={4} fill="#FFFFFF" opacity={0.8} />
      </motion.g>

      {/* Right Eye */}

      <motion.g
        id="right-eye"
        animate={{
          scaleY: [1, 1, 0.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.82, 0.87, 1],
          ease: easeInOut,
        }}
        style={{
          transformOrigin: "445px 420px",
        }}
      >
        <ellipse cx={445} cy={420} rx={38} ry={46} fill="#1A0B00" />
        <circle cx={432} cy={402} r={16} fill="#FFFFFF" />
        <circle cx={458} cy={440} r={7} fill="#FFFFFF" />
        <circle cx={430} cy={432} r={4} fill="#FFFFFF" opacity={0.8} />
      </motion.g>

      <motion.path
        id="mouth"
        d="M360 465Q390 495 420 465"
        fill="none"
        stroke="#1A0B00"
        strokeWidth={9}
        strokeLinecap="round"
        animate={{
          d: [
            "M360 465Q390 495 420 465",
            "M360 470Q390 500 420 470",
            "M360 465Q390 495 420 465",
          ],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: easeInOut,
        }}
      />

      <path
        d="M372 477Q390 492 408 477"
        fill="#FF3D00"
        opacity={0.8}
      />
    </g>
        {/* Goggles */}

    <motion.g
      id="layer-goggles"
      transform="translate(0,-20)"
      animate={{
        y: [0, -2, 0],
        rotate: [0, 0.5, 0, -0.5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      }}
      style={{
        transformOrigin: "390px 270px",
      }}
    >
      <path
        d="M215 285C270 250 510 250 565 285"
        fill="none"
        stroke="#3E2723"
        strokeWidth={18}
        strokeLinecap="round"
      />

      <path
        d="M215 285C270 250 510 250 565 285"
        fill="none"
        stroke="#4E342E"
        strokeWidth={10}
        strokeLinecap="round"
      />

      <rect
        x={373}
        y={260}
        width={34}
        height={14}
        rx={7}
        fill="#212121"
      />

      <g id="goggle-left">
        <circle cx={325} cy={268} r={48} fill="url(#goggleFrame)" />
        <circle cx={325} cy={268} r={38} fill="url(#goggleLens)" />
        <circle
          cx={325}
          cy={268}
          r={45}
          fill="none"
          stroke="#D7CCC8"
          strokeWidth={2}
          opacity={0.4}
        />
        <path
          d="M300 250Q325 238 345 248Q320 258 300 250Z"
          fill="#FFF"
          opacity={0.6}
        />
      </g>

      <g id="goggle-right">
        <circle cx={455} cy={268} r={48} fill="url(#goggleFrame)" />
        <circle cx={455} cy={268} r={38} fill="url(#goggleLens)" />
        <circle
          cx={455}
          cy={268}
          r={45}
          fill="none"
          stroke="#D7CCC8"
          strokeWidth={2}
          opacity={0.4}
        />
        <path
          d="M430 250Q455 238 475 248Q450 258 430 250Z"
          fill="#FFF"
          opacity={0.6}
        />
      </g>
    </motion.g>

    {/* Highlights */}

    <motion.g
      id="layer-highlights"
      pointerEvents="none"
      animate={{
        opacity: [0.45, 0.75, 0.45],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      }}
    >
      <path
        d="M280 260C320 235 400 230 430 235C380 245 310 260 280 260Z"
        fill="url(#glossHighlight)"
      />

      <path
        d="M230 330C210 400 215 470 235 520C220 470 220 390 245 340C255 320 270 300 290 285C265 295 242 310 230 330Z"
        fill="#FFF"
        opacity={0.4}
      />

      <path
        d="M280 635C350 655 450 650 510 620C450 640 360 642 280 635Z"
        fill="#FFE082"
        opacity={0.5}
      />
    </motion.g>

    {/* Sparks */}

    <motion.g
      id="layer-sparks"
      animate={{
        opacity: [0, 1, 0],
        scale: [0.6, 1.4, 0.6],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: easeInOut,
      }}
      style={{
        transformOrigin: "560px 260px",
      }}
    >
      <circle
        cx={600}
        cy={260}
        r={6}
        fill="#FFE082"
        filter="url(#softGlow)"
      />

      <circle
        cx={640}
        cy={300}
        r={4}
        fill="#FF7043"
        filter="url(#softGlow)"
      />

      <circle
        cx={560}
        cy={210}
        r={3}
        fill="#FFCA28"
      />

      <circle
        cx={210}
        cy={360}
        r={4}
        fill="#FFE082"
        filter="url(#softGlow)"
      />

      <circle
        cx={170}
        cy={320}
        r={3}
        fill="#FF7043"
      />
    </motion.g>

{/* ====================== HAMMER ====================== */}

<motion.g
  id="layer-hammer"
  animate={{
    rotate: [-2, 2, -2],
    y: [0, -2, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: easeInOut,
  }}
  style={{
    transformOrigin: "610px 520px",
  }}
>
  {/* Handle */}
  <rect
    x={595}
    y={350}
    width={18}
    height={170}
    rx={9}
    fill="url(#woodHandle)"
    transform="rotate(25 604 435)"
  />

  {/* Handle highlight */}
  <rect
    x={598}
    y={350}
    width={4}
    height={170}
    rx={2}
    fill="#B88A5A"
    opacity={0.45}
    transform="rotate(25 604 435)"
  />

  {/* Hammer head */}
  <rect
    x={530}
    y={315}
    width={110}
    height={42}
    rx={8}
    fill="url(#hammerHead)"
    transform="rotate(25 604 435)"
  />

  {/* Metal highlight */}
  <rect
    x={534}
    y={320}
    width={26}
    height={34}
    rx={6}
    fill="#D5DCE2"
    opacity={0.45}
    transform="rotate(25 604 435)"
  />
</motion.g>
{/* ====================== RIGHT HAND ====================== */}

<motion.g
  id="layer-right-hand"
  animate={{
    y: [0, -1.5, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: easeInOut,
  }}
>
  <path
    d="
      M585 480
      C610 455 640 468 642 500
      C642 525 620 540 595 532
      C575 525 570 500 585 480
      Z
    "
    fill="#FF6D00"
  />

  <ellipse
    cx={605}
    cy={505}
    rx={10}
    ry={7}
    fill="#FFAB40"
    opacity={0.7}
    transform="rotate(25 605 505)"
  />
</motion.g>


  </svg>
);

export default SvgForgey;