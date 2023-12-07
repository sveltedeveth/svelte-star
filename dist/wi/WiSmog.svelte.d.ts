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
export type WiSmogProps = typeof __propDef.props;
export type WiSmogEvents = typeof __propDef.events;
export type WiSmogSlots = typeof __propDef.slots;
export default class WiSmog extends SvelteComponentTyped<WiSmogProps, WiSmogEvents, WiSmogSlots> {
}
export {};
