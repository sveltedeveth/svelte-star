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
export type GiFoxTailProps = typeof __propDef.props;
export type GiFoxTailEvents = typeof __propDef.events;
export type GiFoxTailSlots = typeof __propDef.slots;
export default class GiFoxTail extends SvelteComponentTyped<GiFoxTailProps, GiFoxTailEvents, GiFoxTailSlots> {
}
export {};
