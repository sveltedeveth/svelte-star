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
export type DiTechcrunchProps = typeof __propDef.props;
export type DiTechcrunchEvents = typeof __propDef.events;
export type DiTechcrunchSlots = typeof __propDef.slots;
export default class DiTechcrunch extends SvelteComponentTyped<DiTechcrunchProps, DiTechcrunchEvents, DiTechcrunchSlots> {
}
export {};
