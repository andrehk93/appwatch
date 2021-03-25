
export interface Application {
    config: any; // {formItems: []}
    deletable: boolean; // false
    description: string; // "Watch applications installed on the server"
    displayName: string; // "Appwatch"
    editable: boolean; // false
    iconUrl: string; // "/admin/rest/application/icon/com.andrehk93.appwatch?hash=34066c5d3af6099c9caeeb6628dbdf97"
    idProviderConfig: any; // null
    key: string; // "com.andrehk93.appwatch"
    local: boolean; // true
    maxSystemVersion: string; // "8.0.0"
    metaSteps: any[]; // []
    minSystemVersion: string; // "7.3.0"
    modifiedTime: string; // "2021-03-24T14:16:44.649Z"
    state: string; // "started"
    url: string; // null
    vendorName: string; // "Enonic AS"
    vendorUrl: string; // "http://enonic.com"
    version: string; // "1.0.0.SNAPSHOT"
}

interface ApplicationPayload {
    applications: Application[];
    total: number;
}

export const fetchApplications = (): Promise<ApplicationPayload> => {
    return fetch('/admin/rest/application/list')
        .then(res => res.json());
}