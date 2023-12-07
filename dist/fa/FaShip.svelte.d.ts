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
export type FaShipProps = typeof __propDef.props;
export type FaShipEvents = typeof __propDef.events;
export type FaShipSlots = typeof __propDef.slots;
export default class FaShip extends SvelteComponentTyped<FaShipProps, FaShipEvents, FaShipSlots> {
}
export {};
