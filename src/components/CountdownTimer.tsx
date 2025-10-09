import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  // Countdown duration in milliseconds (4 hours)
  const COUNTDOWN_DURATION = 4 * 60 * 60 * 1000;

  const calculateTimeLeft = (endTime: number): TimeLeft => {
    const now = new Date().getTime();
    const difference = Math.max(endTime - now, 0); // prevent negative

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [endTime] = useState(() => new Date().getTime() + COUNTDOWN_DURATION);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 animate-pulse-glow">
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-sm sm:text-base text-muted-foreground">hrs</span>
      </div>
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">:</span>
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-sm sm:text-base text-muted-foreground">min</span>
      </div>
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">:</span>
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className="text-sm sm:text-base text-muted-foreground">sec</span>
      </div>
    </div>
  );
};
