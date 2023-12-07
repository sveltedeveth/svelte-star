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
export type MdLabelOutlineProps = typeof __propDef.props;
export type MdLabelOutlineEvents = typeof __propDef.events;
export type MdLabelOutlineSlots = typeof __propDef.slots;
export default class MdLabelOutline extends SvelteComponentTyped<MdLabelOutlineProps, MdLabelOutlineEvents, MdLabelOutlineSlots> {
}
export {};
