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
export type GoKeyboardProps = typeof __propDef.props;
export type GoKeyboardEvents = typeof __propDef.events;
export type GoKeyboardSlots = typeof __propDef.slots;
export default class GoKeyboard extends SvelteComponentTyped<GoKeyboardProps, GoKeyboardEvents, GoKeyboardSlots> {
}
export {};
