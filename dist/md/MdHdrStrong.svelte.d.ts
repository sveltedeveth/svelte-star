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
export type MdHdrStrongProps = typeof __propDef.props;
export type MdHdrStrongEvents = typeof __propDef.events;
export type MdHdrStrongSlots = typeof __propDef.slots;
export default class MdHdrStrong extends SvelteComponentTyped<MdHdrStrongProps, MdHdrStrongEvents, MdHdrStrongSlots> {
}
export {};
