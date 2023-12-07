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
export type GiMusicalKeyboardProps = typeof __propDef.props;
export type GiMusicalKeyboardEvents = typeof __propDef.events;
export type GiMusicalKeyboardSlots = typeof __propDef.slots;
export default class GiMusicalKeyboard extends SvelteComponentTyped<GiMusicalKeyboardProps, GiMusicalKeyboardEvents, GiMusicalKeyboardSlots> {
}
export {};
