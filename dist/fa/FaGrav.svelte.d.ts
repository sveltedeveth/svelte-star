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
export type FaGravProps = typeof __propDef.props;
export type FaGravEvents = typeof __propDef.events;
export type FaGravSlots = typeof __propDef.slots;
export default class FaGrav extends SvelteComponentTyped<FaGravProps, FaGravEvents, FaGravSlots> {
}
export {};
