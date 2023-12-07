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
export type MdLocalBarProps = typeof __propDef.props;
export type MdLocalBarEvents = typeof __propDef.events;
export type MdLocalBarSlots = typeof __propDef.slots;
export default class MdLocalBar extends SvelteComponentTyped<MdLocalBarProps, MdLocalBarEvents, MdLocalBarSlots> {
}
export {};
