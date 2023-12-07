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
export type DiIntellijProps = typeof __propDef.props;
export type DiIntellijEvents = typeof __propDef.events;
export type DiIntellijSlots = typeof __propDef.slots;
export default class DiIntellij extends SvelteComponentTyped<DiIntellijProps, DiIntellijEvents, DiIntellijSlots> {
}
export {};
