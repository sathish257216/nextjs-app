"use client";

export default function ButtonComp({onClick}: any) {
  const handleClick = () => {
    console.log('Button clicked!');
    //onClick();
  };

  return (
    <div>
      <button className="px-4 py-2 mr-5 bg-sky-500/100 rounded-xl" onClick={handleClick}>Click Me</button>
    </div>
  );
}
