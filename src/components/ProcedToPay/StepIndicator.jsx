    import React from 'react';
    import { Link, useLocation } from 'react-router-dom';

    const StepIndicator = () => {
    const location = useLocation();
    const steps = [
        { name: 'Cart', path: '/cart' },
        { name: 'Shipping', path: '/shipping' },
        { name: 'Checkout', path: '/proceedtopay' },
    ];

    return (
        <div className="flex justify-center space-x-2 md:space-x-6 my-2">
        {steps.map((step, index) => (
            <Link key={index} to={step.path} className="flex items-center space-x-2">
            <div
                className={`${
                location.pathname === step.path ? 'bg-green-500' : 'bg-gray-300'
                } h-10 w-10 flex items-center justify-center rounded-full text-white font-bold`}
            >
                {index + 1}
            </div>
            <span
                className={`${
                location.pathname === step.path ? 'text-green-500' : 'text-gray-600'
                } font-semibold`}
            >
                {step.name}
            </span>
            </Link>
        ))}
        </div>
    );
    };

    export default StepIndicator;
