"use client";

import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp duration={2} decimals={2} decimal="," prefix="$" end={amount} />
    </div>
  );
}
