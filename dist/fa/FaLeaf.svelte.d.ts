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
export type FaLeafProps = typeof __propDef.props;
export type FaLeafEvents = typeof __propDef.events;
export type FaLeafSlots = typeof __propDef.slots;
export default class FaLeaf extends SvelteComponentTyped<FaLeafProps, FaLeafEvents, FaLeafSlots> {
}
export {};
