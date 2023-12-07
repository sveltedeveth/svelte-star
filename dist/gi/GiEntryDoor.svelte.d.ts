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
export type GiEntryDoorProps = typeof __propDef.props;
export type GiEntryDoorEvents = typeof __propDef.events;
export type GiEntryDoorSlots = typeof __propDef.slots;
export default class GiEntryDoor extends SvelteComponentTyped<GiEntryDoorProps, GiEntryDoorEvents, GiEntryDoorSlots> {
}
export {};
