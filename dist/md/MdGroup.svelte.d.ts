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
export type MdGroupProps = typeof __propDef.props;
export type MdGroupEvents = typeof __propDef.events;
export type MdGroupSlots = typeof __propDef.slots;
export default class MdGroup extends SvelteComponentTyped<MdGroupProps, MdGroupEvents, MdGroupSlots> {
}
export {};
