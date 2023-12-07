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
export type GiDoorHandleProps = typeof __propDef.props;
export type GiDoorHandleEvents = typeof __propDef.events;
export type GiDoorHandleSlots = typeof __propDef.slots;
export default class GiDoorHandle extends SvelteComponentTyped<GiDoorHandleProps, GiDoorHandleEvents, GiDoorHandleSlots> {
}
export {};
