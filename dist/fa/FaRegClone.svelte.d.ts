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
export type FaRegCloneProps = typeof __propDef.props;
export type FaRegCloneEvents = typeof __propDef.events;
export type FaRegCloneSlots = typeof __propDef.slots;
export default class FaRegClone extends SvelteComponentTyped<FaRegCloneProps, FaRegCloneEvents, FaRegCloneSlots> {
}
export {};
