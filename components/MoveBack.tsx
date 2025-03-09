"use client";
import { goBack } from '@/app/utils/helper';
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MoveBack: React.FC = () => {
    return (
        <div onClick={goBack} className='mb-4 cursor-pointer flex items-center gap-1'>
            <ArrowLeft size={16} />
            <span>Take me back</span>
        </div>
    );
};

export default MoveBack;