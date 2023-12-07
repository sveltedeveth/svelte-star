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
export type MdCheckBoxProps = typeof __propDef.props;
export type MdCheckBoxEvents = typeof __propDef.events;
export type MdCheckBoxSlots = typeof __propDef.slots;
export default class MdCheckBox extends SvelteComponentTyped<MdCheckBoxProps, MdCheckBoxEvents, MdCheckBoxSlots> {
}
export {};
