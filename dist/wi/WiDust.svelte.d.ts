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
export type WiDustProps = typeof __propDef.props;
export type WiDustEvents = typeof __propDef.events;
export type WiDustSlots = typeof __propDef.slots;
export default class WiDust extends SvelteComponentTyped<WiDustProps, WiDustEvents, WiDustSlots> {
}
export {};
