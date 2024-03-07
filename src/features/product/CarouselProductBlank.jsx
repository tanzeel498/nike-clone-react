function CarouselProductBlank() {
  return (
    <div className="top-16 flex h-[700px] gap-4 tablet:w-2/5 tablet:justify-end">
      <div className="thumbsContainer hidden w-16 flex-shrink-0 flex-col gap-2 overflow-y-auto tablet:flex">
        {Array.from({ length: 6 })?.map((_, index) => (
          <div key={index} className="h-16 w-16 rounded-md bg-stone-200"></div>
        ))}
      </div>

      <div className="imageContainer h-full w-screen grow overflow-clip bg-stone-200 tablet:w-full tablet:rounded-lg"></div>
    </div>
  );
}

export default CarouselProductBlank;
