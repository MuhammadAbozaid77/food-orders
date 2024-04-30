//
export default function Wrapper({ children }) {
  return (
    <>
      <div className="lg:p-[80px] md:p-[40px] p-[20px]">{children}</div>
    </>
  );
}
