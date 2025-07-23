import Loader from "../components/loader";

export default function TestPage() {
  return (
    <div className="w-full h-full p-6 bg-white/60 backdrop-blur-md">
      <h1 className="text-2xl font-bold text-rose-700 mb-6">Test Page</h1>
      <Loader />
    </div>
  );
}
