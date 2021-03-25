import { ResourceKey } from 'enonic-types/thymeleaf';

import { EnonicLibs } from '../../../lib/types/enonic';

const libs: EnonicLibs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
}

const view = resolve('appwatch.html') as unknown as ResourceKey;

export const get = () => {
    const reactBundleJs = libs.portal?.assetUrl({ path: '/react/appwatch.js' });
    const reactBundleCss = libs.portal?.assetUrl({ path: '/react/appwatch.css' });
    const assetUrl = libs.portal?.assetUrl({ path: '' });

    const model = {
        assetUrl,
        reactBundleJs,
        reactBundleCss
    }

    return {
        body: libs.thymeleaf?.render(view, model)
    }
}