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
export type GiGamepadCrossProps = typeof __propDef.props;
export type GiGamepadCrossEvents = typeof __propDef.events;
export type GiGamepadCrossSlots = typeof __propDef.slots;
export default class GiGamepadCross extends SvelteComponentTyped<GiGamepadCrossProps, GiGamepadCrossEvents, GiGamepadCrossSlots> {
}
export {};
