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
export type GiWoodenDoorProps = typeof __propDef.props;
export type GiWoodenDoorEvents = typeof __propDef.events;
export type GiWoodenDoorSlots = typeof __propDef.slots;
export default class GiWoodenDoor extends SvelteComponentTyped<GiWoodenDoorProps, GiWoodenDoorEvents, GiWoodenDoorSlots> {
}
export {};
