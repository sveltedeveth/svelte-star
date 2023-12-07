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
export type GiMermaidProps = typeof __propDef.props;
export type GiMermaidEvents = typeof __propDef.events;
export type GiMermaidSlots = typeof __propDef.slots;
export default class GiMermaid extends SvelteComponentTyped<GiMermaidProps, GiMermaidEvents, GiMermaidSlots> {
}
export {};
