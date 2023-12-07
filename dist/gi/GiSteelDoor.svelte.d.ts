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
export type GiSteelDoorProps = typeof __propDef.props;
export type GiSteelDoorEvents = typeof __propDef.events;
export type GiSteelDoorSlots = typeof __propDef.slots;
export default class GiSteelDoor extends SvelteComponentTyped<GiSteelDoorProps, GiSteelDoorEvents, GiSteelDoorSlots> {
}
export {};
