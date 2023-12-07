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
export type GiGhostAllyProps = typeof __propDef.props;
export type GiGhostAllyEvents = typeof __propDef.events;
export type GiGhostAllySlots = typeof __propDef.slots;
export default class GiGhostAlly extends SvelteComponentTyped<GiGhostAllyProps, GiGhostAllyEvents, GiGhostAllySlots> {
}
export {};
