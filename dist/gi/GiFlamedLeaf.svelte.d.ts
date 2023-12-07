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
export type GiFlamedLeafProps = typeof __propDef.props;
export type GiFlamedLeafEvents = typeof __propDef.events;
export type GiFlamedLeafSlots = typeof __propDef.slots;
export default class GiFlamedLeaf extends SvelteComponentTyped<GiFlamedLeafProps, GiFlamedLeafEvents, GiFlamedLeafSlots> {
}
export {};
