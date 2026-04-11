import React, { useId } from 'react'

function Select({ options, label, className = '', ...props }, ref) {
    const id = useId() // This is called a hook, and it generates a unique ID for this component instance. This is useful for associating the label with the select element.

    return (
        <div className="w-full">
            {label && <label htmlFor={id} className=""></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 bg-white text-black
                outline-none foucs:bg-gray-50 duration-200
                border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
