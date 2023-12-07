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
export type FaRegHandPointerProps = typeof __propDef.props;
export type FaRegHandPointerEvents = typeof __propDef.events;
export type FaRegHandPointerSlots = typeof __propDef.slots;
export default class FaRegHandPointer extends SvelteComponentTyped<FaRegHandPointerProps, FaRegHandPointerEvents, FaRegHandPointerSlots> {
}
export {};
