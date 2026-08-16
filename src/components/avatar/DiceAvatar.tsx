"use client";

import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";

import { avatarStyles, AvatarStyle } from "./AvatarStyles";

interface Props {
  style: AvatarStyle;
  seed: string;
  size?: number;
  className?: string;
}

export default function DiceAvatar({
  style,
  seed,
  size = 96,
  className = "",
}: Props) {
  console.log("seed = ", seed);

  const svg = useMemo(() => {
    return createAvatar(avatarStyles[style], {
      seed,
      size,
    }).toDataUri();
  }, [style, seed, size]);

  return (
    <img
      src={svg}
      alt="Avatar"
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
}