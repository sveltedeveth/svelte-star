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
export type FaMarkdownProps = typeof __propDef.props;
export type FaMarkdownEvents = typeof __propDef.events;
export type FaMarkdownSlots = typeof __propDef.slots;
export default class FaMarkdown extends SvelteComponentTyped<FaMarkdownProps, FaMarkdownEvents, FaMarkdownSlots> {
}
export {};
