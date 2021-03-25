import React, { FC, useState } from 'react';

import { Application } from '../api/applications';
import { loadApplicationInfo } from '../api/applicationInfo';
import { AppInfo, ApplicationComponentInfo } from './ApplicationComponentInfo';
import { Card } from '../components/Card';

interface ApplicationPanelProps {
    applications: Application[];
}

export const ApplicationPanel: FC<ApplicationPanelProps> = props => {
    const { applications } = props;

    const [appInfo, setAppInfo] = useState<AppInfo>({});

    const loadAppInfo = (appKey: string) => {
        if (!appInfo[appKey]) {
            loadApplicationInfo(appKey).then(res => setAppInfo(prev => ({...prev, [appKey]: res})));
        }
    }

    return (
        <div>
            <h2 className={'primary'}>Applications Installed on Server</h2>
            <p>Click on an application to investigate its components</p>
            <div className={'appwatch-grid'}>
                {applications.map(app =>
                    (
                        <Card
                            key={app.key}
                            onClick={() => loadAppInfo(app.key)}
                            title={app.displayName}
                            description={app.description}
                            icon={app.iconUrl}
                        />
                    )
                )}
            </div>
            <ApplicationComponentInfo appInfo={appInfo} />
        </div>
    );
};
