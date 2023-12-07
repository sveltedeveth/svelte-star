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
export type GiKneePadProps = typeof __propDef.props;
export type GiKneePadEvents = typeof __propDef.events;
export type GiKneePadSlots = typeof __propDef.slots;
export default class GiKneePad extends SvelteComponentTyped<GiKneePadProps, GiKneePadEvents, GiKneePadSlots> {
}
export {};
