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
export type DiGhostProps = typeof __propDef.props;
export type DiGhostEvents = typeof __propDef.events;
export type DiGhostSlots = typeof __propDef.slots;
export default class DiGhost extends SvelteComponentTyped<DiGhostProps, DiGhostEvents, DiGhostSlots> {
}
export {};
