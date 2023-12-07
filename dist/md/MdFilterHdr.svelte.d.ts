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
export type MdFilterHdrProps = typeof __propDef.props;
export type MdFilterHdrEvents = typeof __propDef.events;
export type MdFilterHdrSlots = typeof __propDef.slots;
export default class MdFilterHdr extends SvelteComponentTyped<MdFilterHdrProps, MdFilterHdrEvents, MdFilterHdrSlots> {
}
export {};
