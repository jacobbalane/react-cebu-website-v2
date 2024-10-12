import Images from "../atoms/Images";

export default function ImageSlider() {
  return (
    <div className="overflow-hidden my-4">
      <div className="relative flex md:96">
        <div className="flex h-full space-x-4 pr-4 logo-slide">
          <Images />
        </div>
        <div className="flex h-full space-x-4 pr-4 logo-slide">
          <Images />
        </div>
      </div>
    </div>
  );
}
