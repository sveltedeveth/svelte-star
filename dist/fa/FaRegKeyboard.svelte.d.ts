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
export type FaRegKeyboardProps = typeof __propDef.props;
export type FaRegKeyboardEvents = typeof __propDef.events;
export type FaRegKeyboardSlots = typeof __propDef.slots;
export default class FaRegKeyboard extends SvelteComponentTyped<FaRegKeyboardProps, FaRegKeyboardEvents, FaRegKeyboardSlots> {
}
export {};
