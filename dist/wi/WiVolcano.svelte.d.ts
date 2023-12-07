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
export type WiVolcanoProps = typeof __propDef.props;
export type WiVolcanoEvents = typeof __propDef.events;
export type WiVolcanoSlots = typeof __propDef.slots;
export default class WiVolcano extends SvelteComponentTyped<WiVolcanoProps, WiVolcanoEvents, WiVolcanoSlots> {
}
export {};
