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
export type FaHighlighterProps = typeof __propDef.props;
export type FaHighlighterEvents = typeof __propDef.events;
export type FaHighlighterSlots = typeof __propDef.slots;
export default class FaHighlighter extends SvelteComponentTyped<FaHighlighterProps, FaHighlighterEvents, FaHighlighterSlots> {
}
export {};
