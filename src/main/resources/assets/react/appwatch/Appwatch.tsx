import React, { useEffect, useState } from 'react';
import { Application, fetchApplications } from './api/applications';
import { ApplicationPanel } from './ui/ApplicationPanel';

export const Appwatch = () => {
    
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        fetchApplications().then(res => setApplications(res.applications));
    }, []);

    return (
        <>
            <header className={'appwatch-header'}>
                <div className={'appwatch-header__container'}>
                    <h1>Appwatch</h1>
                </div>
            </header>
            <main className={'appwatch-page'}>
                <ApplicationPanel applications={applications} />
            </main>
        </>
    );
}