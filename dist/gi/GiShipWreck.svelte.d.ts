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
export type GiShipWreckProps = typeof __propDef.props;
export type GiShipWreckEvents = typeof __propDef.events;
export type GiShipWreckSlots = typeof __propDef.slots;
export default class GiShipWreck extends SvelteComponentTyped<GiShipWreckProps, GiShipWreckEvents, GiShipWreckSlots> {
}
export {};
