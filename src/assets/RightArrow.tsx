import React from 'react';

interface PropertyIcon {
    disable: boolean;
}
export const RightArrowIcon: React.FC<PropertyIcon> = ({ disable }) => (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.25 1.08325L4.16667 3.99992L1.25 6.91659"
            stroke={disable ? 'var(--pagehover)' : 'var(--text-maincolor)'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
