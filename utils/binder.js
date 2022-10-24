import set from "lodash/set";

export default function binder(setState, path) {
    return function(e) {
        setState(prev => set(prev, path, e.target.value));
    }
}