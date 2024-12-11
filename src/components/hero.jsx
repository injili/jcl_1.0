import ream from "../assets/img/ream2.png";

export default function Hero() {
  return (
    <div className="h-screen top-0">
      <div className="gap-48 flex h-screen bg-black bg-opacity-50 text-white items-center justify-center">
        <div>
          <h1 className="text-6xl font-alata font-medium">
            Welcome to JCL COPIERS
          </h1>
          <p className="font-medium text-2xl">
            We take pride in providing top-tier paper products designed to meet
            all your needs.
          </p>
        </div>
        <div>
          <img src={ream} alt="Ream paper image " className="h-[500px]" />
        </div>
      </div>
    </div>
  );
}
