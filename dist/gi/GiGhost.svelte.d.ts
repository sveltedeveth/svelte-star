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
export type GiGhostProps = typeof __propDef.props;
export type GiGhostEvents = typeof __propDef.events;
export type GiGhostSlots = typeof __propDef.slots;
export default class GiGhost extends SvelteComponentTyped<GiGhostProps, GiGhostEvents, GiGhostSlots> {
}
export {};
