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
export type MdCallProps = typeof __propDef.props;
export type MdCallEvents = typeof __propDef.events;
export type MdCallSlots = typeof __propDef.slots;
export default class MdCall extends SvelteComponentTyped<MdCallProps, MdCallEvents, MdCallSlots> {
}
export {};
