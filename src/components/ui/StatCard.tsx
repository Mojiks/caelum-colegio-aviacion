import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon: ReactNode;
  iconBg?: string;
  iconColor?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  iconBg = "bg-cyan-500/10",
  iconColor = "text-cyan-300",
}: Props) {

  return (

    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#07111f]/70
        backdrop-blur-xl
        p-7
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >

      {/* GLOW */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/5
          to-transparent
          pointer-events-none
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 flex items-start justify-between">

        <div>

          <p className="text-slate-400 text-sm tracking-wide">
            {title}
          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-3
              tracking-tight
              text-white
            "
          >
            {value}
          </h2>

        </div>

        {/* ICON */}

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            ${iconBg}
          `}
        >

          <div className={iconColor}>
            {icon}
          </div>

        </div>

      </div>

    </div>
  );
}