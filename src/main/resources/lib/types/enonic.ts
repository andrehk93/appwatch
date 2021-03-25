import { AuthLibrary } from 'enonic-types/auth';
import { ContextLibrary } from 'enonic-types/context';
import { ContentLibrary } from 'enonic-types/content';
import { EncodingLibrary } from 'enonic-types/encoding';
import { EventLibrary } from 'enonic-types/event';
import { HttpLibrary } from 'enonic-types/http';
import { I18nLibrary } from 'enonic-types/i18n';
import { MailLibrary } from 'enonic-types/mail';
import { MenuLibrary } from 'enonic-types/menu';
import { NodeLibrary } from 'enonic-types/node';
import { PortalLibrary } from 'enonic-types/portal';
import { RecaptchaLibrary } from 'enonic-types/recaptcha';
import { RepoLibrary } from 'enonic-types/repo';
import { RouterLib } from 'enonic-types/router'; // available from XP version 7
import { SessionLibrary } from 'enonic-types/session';
import { ThymeleafLibrary } from 'enonic-types/thymeleaf';

// The type C is generic, and is the type of both the output of the cache and its internal return function,
// as a cache always should output the same structure
export type EnonicCacheGet<C> = (
    cacheKey: string,
    returnFunction: () => C
) => C;

export interface CacheConfig {
    size: number;
    expire: number;
}

export interface EnonicLibs {
    auth?: AuthLibrary;
    cache?: {
        newCache<T>(
            config: CacheConfig
        ): {
            get: EnonicCacheGet<T>;
        };
    };
    context?: ContextLibrary;
    content?: ContentLibrary;
    encoding?: EncodingLibrary;
    event?: EventLibrary;
    http?: HttpLibrary;
    i18n?: I18nLibrary;
    mail?: MailLibrary;
    menu?: MenuLibrary;
    node?: NodeLibrary;
    portal?: PortalLibrary;
    recaptcha?: RecaptchaLibrary;
    repo?: RepoLibrary;
    router?: RouterLib;
    session?: SessionLibrary;
    thymeleaf?: ThymeleafLibrary;
    util?: {
        data: {
            forceArray: (toArray: any | any[]) => any[];
        };
    };
}

export type ContentID = string;
export type ScriptString = string;
export type URLString = string;
