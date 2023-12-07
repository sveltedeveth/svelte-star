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
export type GiRailwayProps = typeof __propDef.props;
export type GiRailwayEvents = typeof __propDef.events;
export type GiRailwaySlots = typeof __propDef.slots;
export default class GiRailway extends SvelteComponentTyped<GiRailwayProps, GiRailwayEvents, GiRailwaySlots> {
}
export {};
