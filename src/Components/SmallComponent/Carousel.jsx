import { useState } from "react"

export function Carousel({ children: slides }) {
    const [curr, setCurr] = useState(0)

    const prev = () => (
        setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1))
    )

    const next = () => (
        setCurr(curr => (curr === slides.length - 1 ? 0 : curr+1))
    )
    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform scroll-smooth ease-in duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="py-1 px-2 rounded-full shadow bg-white/50  text-gray-800 hover:bg-white"
                >
                    <i className="ri-arrow-left-s-line text-2xl"></i>
                </button>
                <button
                    onClick={next}
                    className="py-1 px-2 rounded-full shadow bg-white/50  text-gray-800 hover:bg-white"
                >
                    <i className="ri-arrow-right-s-line text-2xl"></i>
                </button>
            </div>
        </div>
    )
}