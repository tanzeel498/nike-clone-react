function ButtonFixedBottom({ children }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 border-t-[1px] bg-white px-6 py-4 tablet:hidden">
      {children}
    </div>
  );
}

export default ButtonFixedBottom;
