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
export type MdPersonOutlineProps = typeof __propDef.props;
export type MdPersonOutlineEvents = typeof __propDef.events;
export type MdPersonOutlineSlots = typeof __propDef.slots;
export default class MdPersonOutline extends SvelteComponentTyped<MdPersonOutlineProps, MdPersonOutlineEvents, MdPersonOutlineSlots> {
}
export {};
