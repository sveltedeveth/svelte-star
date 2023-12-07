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
export type MdTextFieldsProps = typeof __propDef.props;
export type MdTextFieldsEvents = typeof __propDef.events;
export type MdTextFieldsSlots = typeof __propDef.slots;
export default class MdTextFields extends SvelteComponentTyped<MdTextFieldsProps, MdTextFieldsEvents, MdTextFieldsSlots> {
}
export {};
