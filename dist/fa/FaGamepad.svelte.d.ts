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
export type FaGamepadProps = typeof __propDef.props;
export type FaGamepadEvents = typeof __propDef.events;
export type FaGamepadSlots = typeof __propDef.slots;
export default class FaGamepad extends SvelteComponentTyped<FaGamepadProps, FaGamepadEvents, FaGamepadSlots> {
}
export {};
