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
export type GiFloatingGhostProps = typeof __propDef.props;
export type GiFloatingGhostEvents = typeof __propDef.events;
export type GiFloatingGhostSlots = typeof __propDef.slots;
export default class GiFloatingGhost extends SvelteComponentTyped<GiFloatingGhostProps, GiFloatingGhostEvents, GiFloatingGhostSlots> {
}
export {};
