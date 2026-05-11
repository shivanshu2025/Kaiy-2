interface CardSectionsProps {
  sections: Array<{
    title: string;
    cards: Array<{ src: string }>;
  }>;
  bgColor?: string;
}

export default function CardSections({
  sections,
  bgColor = "#F0F0F0"
}: CardSectionsProps) {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-24" style={{ background: bgColor }}>
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="mb-10">
          <h3 className="text-xs sm:text-sm font-bold tracking-wider mb-5 text-[#1e1e1e]">
            {section.title}
          </h3>

          <div className="flex flex-wrap gap-6">
            {section.cards.map((card, cardIdx) => (
              <div key={cardIdx} className="w-full sm:w-[280px]">
                <img
                  src={card.src}
                  alt={section.title}
                  className="w-full h-[170px] object-cover rounded-xl shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
