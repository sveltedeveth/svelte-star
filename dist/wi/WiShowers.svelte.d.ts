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
export type WiShowersProps = typeof __propDef.props;
export type WiShowersEvents = typeof __propDef.events;
export type WiShowersSlots = typeof __propDef.slots;
export default class WiShowers extends SvelteComponentTyped<WiShowersProps, WiShowersEvents, WiShowersSlots> {
}
export {};
