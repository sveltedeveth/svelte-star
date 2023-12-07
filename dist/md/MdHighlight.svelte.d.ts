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
export type MdHighlightProps = typeof __propDef.props;
export type MdHighlightEvents = typeof __propDef.events;
export type MdHighlightSlots = typeof __propDef.slots;
export default class MdHighlight extends SvelteComponentTyped<MdHighlightProps, MdHighlightEvents, MdHighlightSlots> {
}
export {};
