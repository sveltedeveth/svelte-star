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
export type FaBuildingProps = typeof __propDef.props;
export type FaBuildingEvents = typeof __propDef.events;
export type FaBuildingSlots = typeof __propDef.slots;
export default class FaBuilding extends SvelteComponentTyped<FaBuildingProps, FaBuildingEvents, FaBuildingSlots> {
}
export {};
