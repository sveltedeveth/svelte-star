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
export type FaIoxhostProps = typeof __propDef.props;
export type FaIoxhostEvents = typeof __propDef.events;
export type FaIoxhostSlots = typeof __propDef.slots;
export default class FaIoxhost extends SvelteComponentTyped<FaIoxhostProps, FaIoxhostEvents, FaIoxhostSlots> {
}
export {};
