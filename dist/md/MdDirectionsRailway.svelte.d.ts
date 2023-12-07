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
export type MdDirectionsRailwayProps = typeof __propDef.props;
export type MdDirectionsRailwayEvents = typeof __propDef.events;
export type MdDirectionsRailwaySlots = typeof __propDef.slots;
export default class MdDirectionsRailway extends SvelteComponentTyped<MdDirectionsRailwayProps, MdDirectionsRailwayEvents, MdDirectionsRailwaySlots> {
}
export {};
