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
export type MdHdrOnProps = typeof __propDef.props;
export type MdHdrOnEvents = typeof __propDef.events;
export type MdHdrOnSlots = typeof __propDef.slots;
export default class MdHdrOn extends SvelteComponentTyped<MdHdrOnProps, MdHdrOnEvents, MdHdrOnSlots> {
}
export {};
