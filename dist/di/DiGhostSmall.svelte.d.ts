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
export type DiGhostSmallProps = typeof __propDef.props;
export type DiGhostSmallEvents = typeof __propDef.events;
export type DiGhostSmallSlots = typeof __propDef.slots;
export default class DiGhostSmall extends SvelteComponentTyped<DiGhostSmallProps, DiGhostSmallEvents, DiGhostSmallSlots> {
}
export {};
