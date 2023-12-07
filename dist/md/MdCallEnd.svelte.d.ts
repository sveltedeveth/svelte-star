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
export type MdCallEndProps = typeof __propDef.props;
export type MdCallEndEvents = typeof __propDef.events;
export type MdCallEndSlots = typeof __propDef.slots;
export default class MdCallEnd extends SvelteComponentTyped<MdCallEndProps, MdCallEndEvents, MdCallEndSlots> {
}
export {};
