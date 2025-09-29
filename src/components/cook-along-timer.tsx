"use client";

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Pause, Play, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type CookAlongTimerProps = {
  steps: string[];
  recipeName: string;
  defaultMinutesPerStep?: number[];
};

type StepTimerState = {
  duration: number;
  remaining: number;
  isRunning: boolean;
  hasFinished: boolean;
};

const DEFAULT_MINUTES = 3;

const buildInitialTimers = (count: number, defaults?: number[]): StepTimerState[] =>
  Array.from({ length: count }, (_, index) => {
    const minutes = defaults?.[index] ?? DEFAULT_MINUTES;
    const seconds = Math.max(1, minutes) * 60;
    return {
      duration: seconds,
      remaining: seconds,
      isRunning: false,
      hasFinished: false,
    };
  });

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
};

export function CookAlongTimer({ steps, recipeName, defaultMinutesPerStep }: CookAlongTimerProps) {
  const { toast } = useToast();
  const [timers, setTimers] = useState<StepTimerState[]>(() => buildInitialTimers(steps.length, defaultMinutesPerStep));

  useEffect(() => {
    setTimers(buildInitialTimers(steps.length, defaultMinutesPerStep));
  }, [steps.length, defaultMinutesPerStep]);

  useEffect(() => {
    if (!timers.some((timer) => timer.isRunning && timer.remaining > 0)) {
      return;
    }

    const interval = setInterval(() => {
      const finishedSteps: number[] = [];
      setTimers((prevTimers) =>
        prevTimers.map((timer, index) => {
          if (!timer.isRunning || timer.remaining === 0) {
            return timer;
          }

          const nextRemaining = Math.max(0, timer.remaining - 1);

          if (nextRemaining === 0) {
            finishedSteps.push(index);
            return {
              ...timer,
              remaining: 0,
              isRunning: false,
              hasFinished: true,
            };
          }

          return {
            ...timer,
            remaining: nextRemaining,
          };
        })
      );

      if (finishedSteps.length > 0) {
        finishedSteps.forEach((index) => {
          toast({
            title: 'Step complete! 🎉',
            description: `Step ${index + 1} for ${recipeName} is done.`,
          });
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timers, toast, recipeName]);

  const handleStart = (index: number) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer, timerIndex) =>
        timerIndex === index
          ? {
              ...timer,
              isRunning: timer.remaining > 0,
              hasFinished: false,
            }
          : timer
      )
    );
  };

  const handlePause = (index: number) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer, timerIndex) =>
        timerIndex === index
          ? {
              ...timer,
              isRunning: false,
            }
          : timer
      )
    );
  };

  const handleReset = (index: number) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer, timerIndex) =>
        timerIndex === index
          ? {
              ...timer,
              remaining: timer.duration,
              isRunning: false,
              hasFinished: false,
            }
          : timer
      )
    );
  };

  const handleMinutesChange = (index: number, minutes: number) => {
    const clampedMinutes = Math.min(180, Math.max(1, Math.floor(minutes)));
    const seconds = clampedMinutes * 60;

    setTimers((prevTimers) =>
      prevTimers.map((timer, timerIndex) =>
        timerIndex === index
          ? {
              duration: seconds,
              remaining: seconds,
              isRunning: false,
              hasFinished: false,
            }
          : timer
      )
    );
  };

  const overallProgress = useMemo(() => {
    if (timers.length === 0) {
      return 0;
    }

    const totalElapsed = timers.reduce((sum, timer) => sum + (timer.duration - timer.remaining), 0);
    const totalDuration = timers.reduce((sum, timer) => sum + timer.duration, 0);

    if (totalDuration === 0) {
      return 0;
    }

    return Math.min(100, Math.round((totalElapsed / totalDuration) * 100));
  }, [timers]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50/40 p-6 shadow-inner">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Badge variant="outline" className="mb-2 flex items-center gap-2 px-3 py-1 text-sm">
              <Clock className="h-4 w-4" />
              Cook-Along Timers
            </Badge>
            <p className="text-sm text-muted-foreground max-w-xl">
              Set a custom countdown for each step, start the timer, and get a celebratory toast when its done.
            </p>
          </div>
          <div className="w-full md:w-60">
            <Progress value={overallProgress} className="h-2" />
            <p className="mt-2 text-xs text-muted-foreground text-right">
              Overall progress: {overallProgress}%
            </p>
          </div>
        </div>
      </div>

      <ol className="space-y-6">
        {steps.map((step, index) => {
          const timer = timers[index];
          const minutesValue = Math.max(1, Math.round(timer.duration / 60));
          const progress = timer.duration
            ? Math.min(100, Math.round(((timer.duration - timer.remaining) / timer.duration) * 100))
            : 0;

          return (
            <li
              key={index}
              className="rounded-xl border border-orange-100 bg-white/90 p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="md:max-w-2xl">
                  <p className="font-headline text-lg font-semibold text-gray-900">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700 leading-relaxed">
                    {step}
                  </p>
                </div>
                <div className="md:w-64 space-y-3">
                  <div className="flex items-end gap-3">
                    <div className="flex-1">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">
                        Minutes
                      </label>
                      <Input
                        type="number"
                        min={1}
                        max={180}
                        value={minutesValue}
                        onChange={(event) => handleMinutesChange(index, Number(event.target.value) || 1)}
                        disabled={timer.isRunning}
                      />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="text-2xl font-mono font-semibold text-orange-600">
                        {formatTime(timer.remaining)}
                      </span>
                      <p className="text-xs text-muted-foreground">mm:ss</p>
                    </div>
                  </div>

                  <Progress value={progress} className="h-2 bg-orange-100" />

                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      onClick={() => handleStart(index)}
                      disabled={timer.isRunning || timer.remaining === 0}
                      className="flex items-center gap-2"
                    >
                      <Play className="h-4 w-4" /> Start
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handlePause(index)}
                      disabled={!timer.isRunning}
                      className="flex items-center gap-2"
                    >
                      <Pause className="h-4 w-4" /> Pause
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => handleReset(index)}
                      className="flex items-center gap-2"
                    >
                      <RotateCcw className="h-4 w-4" /> Reset
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
