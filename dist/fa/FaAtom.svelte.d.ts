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
export type FaAtomProps = typeof __propDef.props;
export type FaAtomEvents = typeof __propDef.events;
export type FaAtomSlots = typeof __propDef.slots;
export default class FaAtom extends SvelteComponentTyped<FaAtomProps, FaAtomEvents, FaAtomSlots> {
}
export {};
