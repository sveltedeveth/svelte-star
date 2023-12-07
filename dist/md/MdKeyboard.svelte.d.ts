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
export type MdKeyboardProps = typeof __propDef.props;
export type MdKeyboardEvents = typeof __propDef.events;
export type MdKeyboardSlots = typeof __propDef.slots;
export default class MdKeyboard extends SvelteComponentTyped<MdKeyboardProps, MdKeyboardEvents, MdKeyboardSlots> {
}
export {};
