import SectionLayout from "../component/template/SectionLayout";

export default function Connect() {
  return (
    <SectionLayout>
      <div className="flex items-center h-full">
        <div className="flex flex-col space-y-4 md:space-y-10 justify-center items-center md:pb-36">
          <p className="text-3xl md:text-5xl lg:text-7xl font-outfitBold md:text-center">
            Connect Page Coming Soon...
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-outfitRegular md:text-center md:w-3/5">
            We’re working on something exciting! While we prepare, check out our{" "}
            <span className="font-outfitMedium text-accent-1">
              <a
                href="https://www.facebook.com/reactcebu/"
                target="_blank"
                rel="noopener noreferrer">
                Facebook page
              </a>
            </span>{" "}
            for the latest updates and upcoming events.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
