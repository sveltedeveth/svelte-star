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
export type MdIsoProps = typeof __propDef.props;
export type MdIsoEvents = typeof __propDef.events;
export type MdIsoSlots = typeof __propDef.slots;
export default class MdIso extends SvelteComponentTyped<MdIsoProps, MdIsoEvents, MdIsoSlots> {
}
export {};
