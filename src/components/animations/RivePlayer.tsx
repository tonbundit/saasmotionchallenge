"use client";

import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect } from 'react';

interface RivePlayerProps {
  src: string;
  stateMachineName?: string;
  artboardName?: string;
  inputName?: string;
  inputValue?: boolean | number;
  className?: string;
  autoplay?: boolean;
}

export function RivePlayer({
  src,
  stateMachineName,
  artboardName,
  inputName,
  inputValue,
  className = "",
  autoplay = true,
}: RivePlayerProps) {
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines: stateMachineName,
    artboard: artboardName,
    autoplay,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const input = useStateMachineInput(rive, stateMachineName || "", inputName || "");

  useEffect(() => {
    if (input && inputValue !== undefined) {
      input.value = inputValue;
    }
  }, [input, inputValue]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
