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
export type GiCardPickupProps = typeof __propDef.props;
export type GiCardPickupEvents = typeof __propDef.events;
export type GiCardPickupSlots = typeof __propDef.slots;
export default class GiCardPickup extends SvelteComponentTyped<GiCardPickupProps, GiCardPickupEvents, GiCardPickupSlots> {
}
export {};
