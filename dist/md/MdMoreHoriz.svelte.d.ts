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
export type MdMoreHorizProps = typeof __propDef.props;
export type MdMoreHorizEvents = typeof __propDef.events;
export type MdMoreHorizSlots = typeof __propDef.slots;
export default class MdMoreHoriz extends SvelteComponentTyped<MdMoreHorizProps, MdMoreHorizEvents, MdMoreHorizSlots> {
}
export {};
