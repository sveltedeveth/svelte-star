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
export type FaKeyboardProps = typeof __propDef.props;
export type FaKeyboardEvents = typeof __propDef.events;
export type FaKeyboardSlots = typeof __propDef.slots;
export default class FaKeyboard extends SvelteComponentTyped<FaKeyboardProps, FaKeyboardEvents, FaKeyboardSlots> {
}
export {};
