export default function Button({children, className, onClick}) {
    return (
        <button className={` bg-green-500 px-6 py-3 ${className} font-semibold rounded-lg hover:bg-green-700 cursor-pointer transition duration-300 ease-in-out`} onClick={onClick}>
                {children}
        </button>
    )
}

