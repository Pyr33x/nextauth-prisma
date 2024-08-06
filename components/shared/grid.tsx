function Grid() {
  return (
    <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 flex select-none items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900/30 ${
            i === 1 || i === 2 ? "col-span-2" : ""
          }`}
        ></div>
      ))}
    </div>
  );
}

export { Grid };
