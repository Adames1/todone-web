import loginDraw from "../assets/undraw_login.svg";

function LayoutAuth({ children }) {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">ToDone</h2>
        {children}
      </div>

      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-indigo-400 overflow-hidden p-8">
        <img src={loginDraw} className="w-64 lg:w-[90%]" />
      </div>
    </div>
  );
}

export default LayoutAuth;
