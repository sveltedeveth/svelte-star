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
export type MdBorderColorProps = typeof __propDef.props;
export type MdBorderColorEvents = typeof __propDef.events;
export type MdBorderColorSlots = typeof __propDef.slots;
export default class MdBorderColor extends SvelteComponentTyped<MdBorderColorProps, MdBorderColorEvents, MdBorderColorSlots> {
}
export {};
