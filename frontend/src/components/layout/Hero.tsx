import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { motion } from "motion/react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Link } from "react-router-dom";

export function Hero() {
  // const count:any=useSelector((state:RootState)=>{state.user.value})
  //   const count = useSelector((state: RootState) => state.user.value);
  //   const dispatch=useDispatch();

  // console.log(count);

  return (
    <div className="relative flex items-center justify-center h-[680px] mx-6 my-12 rounded-2xl overflow-hidden border border-neutral-800/30">
      <DottedGlowBackground
        className="absolute inset-0 pointer-events-none"
        opacity={0.5}
        gap={15}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.1}
        speedMax={1.9}
        speedScale={0.1}
      />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl">
        {/* Title */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <LayoutTextFlip text="Welcome to " words={["pgstay"]} />
        </motion.div>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
          Find your perfect space with verified rooms and trusted hosts — start exploring now!
        </p>

        {/* <h1>
             {count}</h1>
              <button onClick={() => dispatch(addUserInfo(10))}>
  
       Increment
      </button> */}



        {/* Button center me niche */}
        {/* <div className="mt-8 flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white px-8 py-4 text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
          >
            <span>Explore Rooms</span>
          </HoverBorderGradient>
        </div> */}
        <div className="mt-8 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.07, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <Link to="/rooms">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="relative dark:bg-black bg-white text-black dark:text-white px-10 py-4 text-lg font-semibold shadow-md transition-all duration-300 
              hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white"
              >
                <span>Explore Rooms</span>
              </HoverBorderGradient>
            </Link>

            {/* <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="relative dark:bg-black bg-white text-black dark:text-white px-10 py-4 text-lg font-semibold shadow-md transition-all duration-300 
              hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white"
            >
              <span>Explore Rooms</span>
            </HoverBorderGradient> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
