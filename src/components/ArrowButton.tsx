const ArrowButton = ({
  text = "Read More",
  buttonColor = "#C02429",
  textColor = "#C02429",
  hoverButtonColor = "#C02429",
  hoverTextColor = "#ffffff",
  className = "",
}) => {
  return (
    <button
      className={`group relative flex items-center bg-transparent border-none cursor-pointer ${className}`}
    >
      {/* BUTTON SHAPE */}
      <div className="relative w-[300px] h-[72px] overflow-hidden">
        
        {/* HOVER BG */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundColor: hoverButtonColor,
            clipPath:
              "path('M18 1 H215 L265 24 Q284 36 265 48 L215 71 H18 Q1 71 1 54 V18 Q1 1 18 1 Z')",
          }}
        />

        {/* SVG BORDER */}
        <svg
          viewBox="0 0 300 72"
          className="absolute inset-0 w-full h-full z-10"
          fill="none"
        >
          <path
            d="
              M18 1
              H215

              L265 24

              Q284 36 265 48

              L215 71

              H18
              Q1 71 1 54
              V18
              Q1 1 18 1
              Z
            "
            stroke={buttonColor}
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        {/* TEXT */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            tracking-[6px]
            text-[15px]
            uppercase
            font-medium
            transition-colors duration-300
            z-20
          "
          style={{
            color: textColor,
          }}
        >
          <span
            className="transition-colors duration-300"
            style={{
              color: textColor,
            }}
          >
            {text}
          </span>
        </div>

        {/* HOVER TEXT LAYER */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            tracking-[6px]
            text-[15px]
            uppercase
            font-medium
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            z-30
            pointer-events-none
          "
          style={{
            color: hoverTextColor,
          }}
        >
          {text}
        </div>
      </div>

      {/* DOT */}
      <div
        className=" w-[34px] h-[34px] rounded-full transition-transform duration-300 "
        style={{
          backgroundColor: buttonColor,
        }}
      />
    </button>
  );
};

export default ArrowButton;