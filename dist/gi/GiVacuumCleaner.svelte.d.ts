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
export type GiVacuumCleanerProps = typeof __propDef.props;
export type GiVacuumCleanerEvents = typeof __propDef.events;
export type GiVacuumCleanerSlots = typeof __propDef.slots;
export default class GiVacuumCleaner extends SvelteComponentTyped<GiVacuumCleanerProps, GiVacuumCleanerEvents, GiVacuumCleanerSlots> {
}
export {};
