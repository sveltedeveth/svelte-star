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
export type GiGamepadProps = typeof __propDef.props;
export type GiGamepadEvents = typeof __propDef.events;
export type GiGamepadSlots = typeof __propDef.slots;
export default class GiGamepad extends SvelteComponentTyped<GiGamepadProps, GiGamepadEvents, GiGamepadSlots> {
}
export {};
