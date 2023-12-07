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
export type GiFluffyWingProps = typeof __propDef.props;
export type GiFluffyWingEvents = typeof __propDef.events;
export type GiFluffyWingSlots = typeof __propDef.slots;
export default class GiFluffyWing extends SvelteComponentTyped<GiFluffyWingProps, GiFluffyWingEvents, GiFluffyWingSlots> {
}
export {};
