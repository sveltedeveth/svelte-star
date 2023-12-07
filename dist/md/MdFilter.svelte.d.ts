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
export type MdFilterProps = typeof __propDef.props;
export type MdFilterEvents = typeof __propDef.events;
export type MdFilterSlots = typeof __propDef.slots;
export default class MdFilter extends SvelteComponentTyped<MdFilterProps, MdFilterEvents, MdFilterSlots> {
}
export {};
