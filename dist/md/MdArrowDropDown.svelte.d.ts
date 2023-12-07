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
export type MdArrowDropDownProps = typeof __propDef.props;
export type MdArrowDropDownEvents = typeof __propDef.events;
export type MdArrowDropDownSlots = typeof __propDef.slots;
export default class MdArrowDropDown extends SvelteComponentTyped<MdArrowDropDownProps, MdArrowDropDownEvents, MdArrowDropDownSlots> {
}
export {};
