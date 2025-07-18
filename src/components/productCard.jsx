export default function ProductCard(props) {
    return (
        <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={props.url}
                alt="Product"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{props.name}</h3>
                <p className="text-gray-600 mt-1">${props.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
