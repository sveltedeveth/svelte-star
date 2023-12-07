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
export type FaHandPointerProps = typeof __propDef.props;
export type FaHandPointerEvents = typeof __propDef.events;
export type FaHandPointerSlots = typeof __propDef.slots;
export default class FaHandPointer extends SvelteComponentTyped<FaHandPointerProps, FaHandPointerEvents, FaHandPointerSlots> {
}
export {};
