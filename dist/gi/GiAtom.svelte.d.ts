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
export type GiAtomProps = typeof __propDef.props;
export type GiAtomEvents = typeof __propDef.events;
export type GiAtomSlots = typeof __propDef.slots;
export default class GiAtom extends SvelteComponentTyped<GiAtomProps, GiAtomEvents, GiAtomSlots> {
}
export {};
