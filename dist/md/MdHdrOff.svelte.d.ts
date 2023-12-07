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
export type MdHdrOffProps = typeof __propDef.props;
export type MdHdrOffEvents = typeof __propDef.events;
export type MdHdrOffSlots = typeof __propDef.slots;
export default class MdHdrOff extends SvelteComponentTyped<MdHdrOffProps, MdHdrOffEvents, MdHdrOffSlots> {
}
export {};
