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
export type GiAutoRepairProps = typeof __propDef.props;
export type GiAutoRepairEvents = typeof __propDef.events;
export type GiAutoRepairSlots = typeof __propDef.slots;
export default class GiAutoRepair extends SvelteComponentTyped<GiAutoRepairProps, GiAutoRepairEvents, GiAutoRepairSlots> {
}
export {};
