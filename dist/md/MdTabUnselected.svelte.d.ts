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
export type MdTabUnselectedProps = typeof __propDef.props;
export type MdTabUnselectedEvents = typeof __propDef.events;
export type MdTabUnselectedSlots = typeof __propDef.slots;
export default class MdTabUnselected extends SvelteComponentTyped<MdTabUnselectedProps, MdTabUnselectedEvents, MdTabUnselectedSlots> {
}
export {};
