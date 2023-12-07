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
export type GiFireTailProps = typeof __propDef.props;
export type GiFireTailEvents = typeof __propDef.events;
export type GiFireTailSlots = typeof __propDef.slots;
export default class GiFireTail extends SvelteComponentTyped<GiFireTailProps, GiFireTailEvents, GiFireTailSlots> {
}
export {};
