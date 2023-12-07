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
export type MdHelpOutlineProps = typeof __propDef.props;
export type MdHelpOutlineEvents = typeof __propDef.events;
export type MdHelpOutlineSlots = typeof __propDef.slots;
export default class MdHelpOutline extends SvelteComponentTyped<MdHelpOutlineProps, MdHelpOutlineEvents, MdHelpOutlineSlots> {
}
export {};
