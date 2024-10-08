import { CountUpProps } from "@/Types";
import CountUp from "react-countup";

export default function MyCountUp({start, end, duration}: CountUpProps) {
  return (
    <div>
        <CountUp start={start} end={end} duration={duration} />
    </div>
  )
}
