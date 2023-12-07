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
export type GiScoutShipProps = typeof __propDef.props;
export type GiScoutShipEvents = typeof __propDef.events;
export type GiScoutShipSlots = typeof __propDef.slots;
export default class GiScoutShip extends SvelteComponentTyped<GiScoutShipProps, GiScoutShipEvents, GiScoutShipSlots> {
}
export {};
