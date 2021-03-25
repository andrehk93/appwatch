interface ContentType extends MetaData {
    abstract: boolean; // false
    allowChildContent: boolean; // true
    createdTime: string; // "2021-03-24T14:36:47.139Z"
    creator: string; // null
    displayNameExpression: string; // null
    displayNameLabel: string; // null
    final: boolean; // false
    iconUrl: string; // "/admin/rest/schema/content/icon/com.klp.enonic.cms:alert?hash=f361f64720b020f024e42ca771597ccf"
    metadata: any[]; // []
    modifiedTime: string; // "2021-03-24T14:36:47.139Z"
    modifier: string; // null
    superType: string; // "base:structured"
}

interface IDProviders {

}

export interface Layout extends MetaData {
    config: any;
}

export interface Region {
    name: string;
}

export interface Page extends MetaData {
    config: any;
    regions: Region[];
}

export interface Part extends MetaData {
    config: any;
}

interface MetaData {
    deletable: boolean;
    description: string;
    displayName: string;
    editable: boolean;
    key: string;
    name: string;
}

export interface ApplicationInfo {
    contentTypes: {
        contentTypes: ContentType[],
        total: 21
    }
    deployment: {
        url: string
    }
    idProviderApplication: {
        idProviders: IDProviders[],
        mode: string
    }
    layouts: {
        descriptors: Layout[];
    }
    // macros: {macros: [{description: "Sett inn et bilde", displayName: "Bilde", form: {,…},…},…]}
    pages: {
        descriptors: Page[];
    }
    parts: {
        descriptors: Part[];
    }
    // references: {references: [{displayName: "Dev", path: "/dev", type: "portal:site"}]}
    // relations: {relationshipTypes: [], total: 0}
    // tasks: {tasks: []}
    // tools: {descriptors: [,…]}
    // widgets: {descriptors: []}
}

export const loadApplicationInfo = (applicationKey: string): Promise<ApplicationInfo> => {
    return fetch(`/admin/rest/application/info?applicationKey=${ applicationKey }`)
        .then(res => res.json());
}