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
export type GiJoystickProps = typeof __propDef.props;
export type GiJoystickEvents = typeof __propDef.events;
export type GiJoystickSlots = typeof __propDef.slots;
export default class GiJoystick extends SvelteComponentTyped<GiJoystickProps, GiJoystickEvents, GiJoystickSlots> {
}
export {};
