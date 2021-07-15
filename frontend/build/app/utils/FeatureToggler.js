import { toggles } from '../../toggles';
export function shouldRender(name) {
    var match = toggles.find(function (x) {
        return x.componentName === name;
    });
    if (!match)
        return true;
    var env = process.env.NODE_ENV;
    var hasMatch = match.environments.find(function (x) {
        return x === env;
    });
    return hasMatch !== undefined;
}
//# sourceMappingURL=FeatureToggler.js.map