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
export type GiSinkingShipProps = typeof __propDef.props;
export type GiSinkingShipEvents = typeof __propDef.events;
export type GiSinkingShipSlots = typeof __propDef.slots;
export default class GiSinkingShip extends SvelteComponentTyped<GiSinkingShipProps, GiSinkingShipEvents, GiSinkingShipSlots> {
}
export {};
