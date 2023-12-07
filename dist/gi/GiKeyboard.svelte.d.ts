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
export type GiKeyboardProps = typeof __propDef.props;
export type GiKeyboardEvents = typeof __propDef.events;
export type GiKeyboardSlots = typeof __propDef.slots;
export default class GiKeyboard extends SvelteComponentTyped<GiKeyboardProps, GiKeyboardEvents, GiKeyboardSlots> {
}
export {};
