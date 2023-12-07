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
export type GiSmokingFingerProps = typeof __propDef.props;
export type GiSmokingFingerEvents = typeof __propDef.events;
export type GiSmokingFingerSlots = typeof __propDef.slots;
export default class GiSmokingFinger extends SvelteComponentTyped<GiSmokingFingerProps, GiSmokingFingerEvents, GiSmokingFingerSlots> {
}
export {};
