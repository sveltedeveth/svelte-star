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
export type MdDirectionsSubwayProps = typeof __propDef.props;
export type MdDirectionsSubwayEvents = typeof __propDef.events;
export type MdDirectionsSubwaySlots = typeof __propDef.slots;
export default class MdDirectionsSubway extends SvelteComponentTyped<MdDirectionsSubwayProps, MdDirectionsSubwayEvents, MdDirectionsSubwaySlots> {
}
export {};
