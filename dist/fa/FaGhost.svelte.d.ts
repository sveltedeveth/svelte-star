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
export type FaGhostProps = typeof __propDef.props;
export type FaGhostEvents = typeof __propDef.events;
export type FaGhostSlots = typeof __propDef.slots;
export default class FaGhost extends SvelteComponentTyped<FaGhostProps, FaGhostEvents, FaGhostSlots> {
}
export {};
