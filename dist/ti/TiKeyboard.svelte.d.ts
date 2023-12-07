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
export type TiKeyboardProps = typeof __propDef.props;
export type TiKeyboardEvents = typeof __propDef.events;
export type TiKeyboardSlots = typeof __propDef.slots;
export default class TiKeyboard extends SvelteComponentTyped<TiKeyboardProps, TiKeyboardEvents, TiKeyboardSlots> {
}
export {};
