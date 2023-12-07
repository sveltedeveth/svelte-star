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
export type MdInputProps = typeof __propDef.props;
export type MdInputEvents = typeof __propDef.events;
export type MdInputSlots = typeof __propDef.slots;
export default class MdInput extends SvelteComponentTyped<MdInputProps, MdInputEvents, MdInputSlots> {
}
export {};
