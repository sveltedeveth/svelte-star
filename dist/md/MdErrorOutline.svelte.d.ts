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
export type MdErrorOutlineProps = typeof __propDef.props;
export type MdErrorOutlineEvents = typeof __propDef.events;
export type MdErrorOutlineSlots = typeof __propDef.slots;
export default class MdErrorOutline extends SvelteComponentTyped<MdErrorOutlineProps, MdErrorOutlineEvents, MdErrorOutlineSlots> {
}
export {};
