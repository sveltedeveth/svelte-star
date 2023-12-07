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
export type FaRegBuildingProps = typeof __propDef.props;
export type FaRegBuildingEvents = typeof __propDef.events;
export type FaRegBuildingSlots = typeof __propDef.slots;
export default class FaRegBuilding extends SvelteComponentTyped<FaRegBuildingProps, FaRegBuildingEvents, FaRegBuildingSlots> {
}
export {};
