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
export type IoMdArrowDropdownProps = typeof __propDef.props;
export type IoMdArrowDropdownEvents = typeof __propDef.events;
export type IoMdArrowDropdownSlots = typeof __propDef.slots;
export default class IoMdArrowDropdown extends SvelteComponentTyped<IoMdArrowDropdownProps, IoMdArrowDropdownEvents, IoMdArrowDropdownSlots> {
}
export {};
