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
export type DiMarkdownProps = typeof __propDef.props;
export type DiMarkdownEvents = typeof __propDef.events;
export type DiMarkdownSlots = typeof __propDef.slots;
export default class DiMarkdown extends SvelteComponentTyped<DiMarkdownProps, DiMarkdownEvents, DiMarkdownSlots> {
}
export {};
