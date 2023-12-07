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
export type GiFingerPrintProps = typeof __propDef.props;
export type GiFingerPrintEvents = typeof __propDef.events;
export type GiFingerPrintSlots = typeof __propDef.slots;
export default class GiFingerPrint extends SvelteComponentTyped<GiFingerPrintProps, GiFingerPrintEvents, GiFingerPrintSlots> {
}
export {};
