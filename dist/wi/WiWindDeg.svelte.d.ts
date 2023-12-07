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
export type WiWindDegProps = typeof __propDef.props;
export type WiWindDegEvents = typeof __propDef.events;
export type WiWindDegSlots = typeof __propDef.slots;
export default class WiWindDeg extends SvelteComponentTyped<WiWindDegProps, WiWindDegEvents, WiWindDegSlots> {
}
export {};
