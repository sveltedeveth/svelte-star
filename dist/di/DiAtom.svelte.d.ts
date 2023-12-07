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
export type DiAtomProps = typeof __propDef.props;
export type DiAtomEvents = typeof __propDef.events;
export type DiAtomSlots = typeof __propDef.slots;
export default class DiAtom extends SvelteComponentTyped<DiAtomProps, DiAtomEvents, DiAtomSlots> {
}
export {};
