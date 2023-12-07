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
export type IoMdCheckboxProps = typeof __propDef.props;
export type IoMdCheckboxEvents = typeof __propDef.events;
export type IoMdCheckboxSlots = typeof __propDef.slots;
export default class IoMdCheckbox extends SvelteComponentTyped<IoMdCheckboxProps, IoMdCheckboxEvents, IoMdCheckboxSlots> {
}
export {};
