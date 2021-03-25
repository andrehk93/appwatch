import React, { FC } from 'react';

interface CardProps {
    title: string;
    description: string;
    onClick: () => void;
    icon: string;
}

export const Card: FC<CardProps> = ({ title, description, icon, onClick }) => (
    <div className={'appwatch-application-card'} onClick={onClick} role={'button'} tabIndex={0}>
        <div className={'appwatch-application-card__top'}>
            <img className={'appwatch-application-card__icon'} alt={'application icon'} src={icon} />
        </div>
        <div className={'appwatch-application-card__bottom-skewed'}>
            <div>
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>
        </div>
    </div>
);
