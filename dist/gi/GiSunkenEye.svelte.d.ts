import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiSunkenEyeProps = typeof __propDef.props;
export type GiSunkenEyeEvents = typeof __propDef.events;
export type GiSunkenEyeSlots = typeof __propDef.slots;
export default class GiSunkenEye extends SvelteComponentTyped<GiSunkenEyeProps, GiSunkenEyeEvents, GiSunkenEyeSlots> {
}
export {};
