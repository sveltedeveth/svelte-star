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
export type MdSelectAllProps = typeof __propDef.props;
export type MdSelectAllEvents = typeof __propDef.events;
export type MdSelectAllSlots = typeof __propDef.slots;
export default class MdSelectAll extends SvelteComponentTyped<MdSelectAllProps, MdSelectAllEvents, MdSelectAllSlots> {
}
export {};
