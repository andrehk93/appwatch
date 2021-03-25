import { ApplicationInfo } from '../api/applicationInfo';
import React, { FC, useState } from 'react';
import { loadPageInfo, PageInfoPayload } from '../api/pageInfo';
import { PageInfoComponent } from './PageInfoComponent';

export interface AppInfo {
    [appKey: string]: ApplicationInfo;
}

interface ApplicationComponentInfoProps {
    appInfo: AppInfo;
}

interface PageInfo {
    [pageKey: string]: PageInfoPayload;
}

export const ApplicationComponentInfo: FC<ApplicationComponentInfoProps> = props => {
    const { appInfo } = props;

    const [pageUses, setPageUses] = useState<PageInfo>({});

    const loadPageUses = (pageKey: string) => {
        if (!pageUses[pageKey]) {
            loadPageInfo(pageKey).then(pageInfo => setPageUses(prev => ({ ...prev, [pageKey]: pageInfo })));
        }
    }

    return (
        <section>
            { Object.keys(appInfo).map((appInfoKey: string) => {
                const application = appInfo[appInfoKey];

                return application.pages.descriptors.map(desc => (
                    <div>
                        <h4>{desc.name}</h4>
                        {!pageUses[desc.key] && <button className={'appwatch-button secondary'} onClick={() => loadPageUses(desc.key)}>Load uses</button>}
                        {pageUses[desc.key] && (
                            <PageInfoComponent pageInfo={pageUses[desc.key]} pageType={desc.name}/>
                        )}
                    </div>
                ))
            })}
        </section>
    );
}