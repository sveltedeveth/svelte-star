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
export type MdHdrWeakProps = typeof __propDef.props;
export type MdHdrWeakEvents = typeof __propDef.events;
export type MdHdrWeakSlots = typeof __propDef.slots;
export default class MdHdrWeak extends SvelteComponentTyped<MdHdrWeakProps, MdHdrWeakEvents, MdHdrWeakSlots> {
}
export {};
