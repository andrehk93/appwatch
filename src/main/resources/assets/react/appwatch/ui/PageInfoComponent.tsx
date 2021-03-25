import React, { FC } from 'react';
import { PageInfoPayload } from '../api/pageInfo';

interface PageInfoComponentProps {
    pageInfo: PageInfoPayload;
    pageType: string;
}

export const PageInfoComponent: FC<PageInfoComponentProps> = props => {
    const { pageInfo, pageType } = props;
    const { pages } = pageInfo;
    return (
        <div>
            <h5>{ pageType }</h5>
            <table>
                <thead>
                    <th>Page</th>
                    <th>Path</th>
                </thead>
                <tbody>
                { pages.map(page => (
                    <tr>
                        <td>{ page.displayName }</td>
                        <td>{ page._path }</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}