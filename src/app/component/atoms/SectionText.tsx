interface SectionTextProps {
  readonly title: string;
  readonly description: string;
  readonly alignCenterOnSmallScreen?: boolean;
  readonly alignCenterOnLargeScreen?: boolean;
  readonly limitDescriptionWidth?: boolean;
}

export default function SectionText({
  title,
  description,
  alignCenterOnSmallScreen = false,
  alignCenterOnLargeScreen = false,
  limitDescriptionWidth = false,
}: SectionTextProps) {
  return (
    <div className="flex flex-col space-y-4 md:space-y-10">
      <p
        className={`text-3xl md:text-5xl lg:text-7xl font-outfitBold ${
          alignCenterOnSmallScreen ? "text-center" : ""
        } ${alignCenterOnLargeScreen ? "md:text-center" : ""}`}>
        {title}
      </p>

      <p
        className={`text-xl md:text-2xl lg:text-3xl font-outfitRegular ${
          alignCenterOnSmallScreen ? "text-center" : ""
        } ${alignCenterOnLargeScreen ? "md:text-center" : ""} ${
          limitDescriptionWidth ? "md:w-3/5" : ""
        }`}>
        {description}
      </p>
    </div>
  );
}
