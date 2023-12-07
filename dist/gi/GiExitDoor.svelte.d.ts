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
export type GiExitDoorProps = typeof __propDef.props;
export type GiExitDoorEvents = typeof __propDef.events;
export type GiExitDoorSlots = typeof __propDef.slots;
export default class GiExitDoor extends SvelteComponentTyped<GiExitDoorProps, GiExitDoorEvents, GiExitDoorSlots> {
}
export {};
