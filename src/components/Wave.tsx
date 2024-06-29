import { FC } from 'react';
import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

interface WaveProps {
  reverse?: boolean | null;
}

const Wave: FC<WaveProps> = ({ reverse }) => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;
  const waves = {
    frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgb(23, 97, 253, 0.1)'),
    backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgb(23, 97, 253, 0.5)'),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency, reverse);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };

  if (context) render();

  return null;
};

export default Wave;