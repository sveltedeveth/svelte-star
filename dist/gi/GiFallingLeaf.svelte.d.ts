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
export type GiFallingLeafProps = typeof __propDef.props;
export type GiFallingLeafEvents = typeof __propDef.events;
export type GiFallingLeafSlots = typeof __propDef.slots;
export default class GiFallingLeaf extends SvelteComponentTyped<GiFallingLeafProps, GiFallingLeafEvents, GiFallingLeafSlots> {
}
export {};
