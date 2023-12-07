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
export type MdInfoOutlineProps = typeof __propDef.props;
export type MdInfoOutlineEvents = typeof __propDef.events;
export type MdInfoOutlineSlots = typeof __propDef.slots;
export default class MdInfoOutline extends SvelteComponentTyped<MdInfoOutlineProps, MdInfoOutlineEvents, MdInfoOutlineSlots> {
}
export {};
