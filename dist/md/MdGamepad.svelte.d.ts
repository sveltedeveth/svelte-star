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
export type MdGamepadProps = typeof __propDef.props;
export type MdGamepadEvents = typeof __propDef.events;
export type MdGamepadSlots = typeof __propDef.slots;
export default class MdGamepad extends SvelteComponentTyped<MdGamepadProps, MdGamepadEvents, MdGamepadSlots> {
}
export {};
