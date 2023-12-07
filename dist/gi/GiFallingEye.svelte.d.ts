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
export type GiFallingEyeProps = typeof __propDef.props;
export type GiFallingEyeEvents = typeof __propDef.events;
export type GiFallingEyeSlots = typeof __propDef.slots;
export default class GiFallingEye extends SvelteComponentTyped<GiFallingEyeProps, GiFallingEyeEvents, GiFallingEyeSlots> {
}
export {};
