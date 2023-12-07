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
export type IoMdBoatProps = typeof __propDef.props;
export type IoMdBoatEvents = typeof __propDef.events;
export type IoMdBoatSlots = typeof __propDef.slots;
export default class IoMdBoat extends SvelteComponentTyped<IoMdBoatProps, IoMdBoatEvents, IoMdBoatSlots> {
}
export {};
