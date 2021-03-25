import { EnonicLibs } from '../../lib/types/enonic';
import { RouterLib } from 'enonic-types/router';
import { Request, Response } from 'enonic-types/controller';

const router = (require('/lib/router') as RouterLib)();

const libs: EnonicLibs = {
    content: require('/lib/xp/content')
};

// Forward handling of all requests to the router itself
export const all = (req: Request) => {
    return router.dispatch(req);
}

// Live-check
router.get('/ping', () => {
    return {
        body: {
            msg: 'pong'
        }
    } as Response<{ msg: string }>
});

////////////////////////////////
// API
////////////////////////////////

interface RouterRequest extends Request {
    pathParams: {
        applicationKey?: string
    }
}

router.get('/pages/{applicationKey}', (req: RouterRequest) => {
    const pages = libs.content?.query({
        start: 0,
        count: 100,
        query: 'data.siteConfig.applicationKey = \'' + req.pathParams.applicationKey + '\' AND _path LIKE \'/content/*\' AND components.page.descriptor = \'com.klp.enonic.cms:default\''
    });
    return {
        body: {
            pages: pages.hits
        }
    } as Response<{ pages: any[] }>
});

