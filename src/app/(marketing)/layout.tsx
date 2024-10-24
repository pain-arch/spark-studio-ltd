import Navbar from '@/components/navigation/navbar';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
        </div>
    )
};

export default MarketingLayout
