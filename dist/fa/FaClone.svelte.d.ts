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
export type FaCloneProps = typeof __propDef.props;
export type FaCloneEvents = typeof __propDef.events;
export type FaCloneSlots = typeof __propDef.slots;
export default class FaClone extends SvelteComponentTyped<FaCloneProps, FaCloneEvents, FaCloneSlots> {
}
export {};
