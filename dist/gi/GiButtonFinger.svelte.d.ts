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
export type GiButtonFingerProps = typeof __propDef.props;
export type GiButtonFingerEvents = typeof __propDef.events;
export type GiButtonFingerSlots = typeof __propDef.slots;
export default class GiButtonFinger extends SvelteComponentTyped<GiButtonFingerProps, GiButtonFingerEvents, GiButtonFingerSlots> {
}
export {};
