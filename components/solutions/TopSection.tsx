interface TopSectionProps {
  title: string;
  subtitle: string;
  featuredCards: Array<{ src: string }>;
  infoBox: {
    icon: string;
    text: string;
  };
  bgColor?: string;
}

export default function TopSection({
  title,
  subtitle,
  featuredCards,
  infoBox,
  bgColor = "#F0F0F0"
}: TopSectionProps) {
  return (
    <div className="w-full pb-10" style={{ background: bgColor }}>
      <div className="px-4 sm:px-8 lg:px-24 pt-12 sm:pt-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3932]">
          {title}
        </h1>

        <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-[#32483e]">
          {subtitle}
        </h3>

        {/* Featured Cards */}
        <div className="flex flex-wrap gap-4 sm:gap-5 p-4 sm:p-5">
          {featuredCards.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[250px]"
            >
              <img
                src={item.src}
                alt="featured-design"
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="h-auto sm:h-[85px] w-full rounded-xl bg-[#f7f7f7] mt-5 p-4 sm:p-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 h-full">
            <img
              src={infoBox.icon}
              alt="design"
              className="w-16 h-16 sm:w-[70px] sm:h-[70px]"
            />

            <p className="text-sm sm:text-base ml-0 sm:ml-6 text-center sm:text-left">
              <b>{infoBox.text}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
