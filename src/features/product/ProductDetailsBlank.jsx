function ProductDetailsBlank() {
  return (
    <div className="w-full px-6 tablet:max-w-[400px] tablet:px-0">
      <div className="hidden tablet:block">
        <div className="my-5 flex flex-col gap-3 px-6 tablet:my-2 tablet:px-0">
          <div className="w-48 overflow-hidden rounded-2xl bg-stone-200 py-4" />
          <div className="w-36 overflow-hidden rounded-xl bg-stone-200 py-3" />
          <div className="w-16 overflow-hidden rounded-xl bg-stone-200 py-2.5" />
        </div>
      </div>

      <div className="my-6 flex w-[400px] gap-2">
        {Array.from({ length: 4 })?.map((_, index) => (
          <div key={index} className="h-16 w-16 rounded-md bg-stone-200" />
        ))}
      </div>

      <div className="my-10">
        <div className="mb-4 w-28 overflow-hidden rounded-xl bg-stone-200 py-2.5" />
        <div className="flex flex-wrap justify-between gap-2 rounded-lg">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-16 cursor-pointer rounded-md bg-stone-200 tablet:w-[70px]"
            />
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-full bg-stone-200 py-7" />
    </div>
  );
}

export default ProductDetailsBlank;
