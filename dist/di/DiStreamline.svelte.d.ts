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
export type DiStreamlineProps = typeof __propDef.props;
export type DiStreamlineEvents = typeof __propDef.events;
export type DiStreamlineSlots = typeof __propDef.slots;
export default class DiStreamline extends SvelteComponentTyped<DiStreamlineProps, DiStreamlineEvents, DiStreamlineSlots> {
}
export {};
