import { PiPlusCircleThin, PiPlusLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ProductsAdminPage() {
  return (
    <div className="w-full h-full ">
      <Link
        to={"/admin/newProduct"}
        className="fixed right-[30px] bottom-[30px] bg-rose-600 text-white p-3 rounded-full shadow-lg hover:bg-rose-700 transition duration-200 cursor-pointer"
      >
        <PiPlusLight className="text-2xl" />
      </Link>
    </div>
  );
}
