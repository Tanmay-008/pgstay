import { cn } from "@/lib/utils";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         // "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
//                 "w-[90%] mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto",

//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
//   image
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
//   image?:string ;
// }) => {
//   return (
//     <div
//       className={cn(
//         "group/bento min-h-screen shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
//         className,
//       )}
//     >
//       {header}
//       <div className="transition duration-200 group-hover/bento:translate-x-2">
//           <img src={image} alt="" />
//         </div>
//       <div className="transition duration-200 group-hover/bento:translate-x-2">
//         {icon}
//         <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
//           {title}
//         </div>
        
//         <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };
// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string
//   children?: React.ReactNode
// }) => {
//   return (
//     <div
//       className={cn(
//         // 90% width + responsive grid
//         "w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
//         className
//       )}
//     >
//       {children}
//     </div>
//   )
// }


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={cn(
          "grid w-[90%] gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
