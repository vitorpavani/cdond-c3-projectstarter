import style from '../style.local.css';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
export function omit(target) {
    var omitKeys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        omitKeys[_i - 1] = arguments[_i];
    }
    return Object.keys(target).reduce(function (res, key) {
        if (!omitKeys.includes(key)) {
            res[key] = target[key];
        }
        return res;
    }, {});
}
export var confirmDialog = Swal.mixin({
    confirmButtonClass: style.button + " " + style.primary,
    cancelButtonClass: style.button + " " + style.primary + " " + style.hollow,
    buttonsStyling: false,
});
export var showNotification = function (message, options) { return toast(message, options); };
export var showErrorNotification = function (message) { return showNotification(message, { className: style.toaster }); };
export var showSuccessNotification = function (message) { return showNotification(message, { type: "success" }); };
//# sourceMappingURL=index.js.map