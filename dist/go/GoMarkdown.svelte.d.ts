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
export type GoMarkdownProps = typeof __propDef.props;
export type GoMarkdownEvents = typeof __propDef.events;
export type GoMarkdownSlots = typeof __propDef.slots;
export default class GoMarkdown extends SvelteComponentTyped<GoMarkdownProps, GoMarkdownEvents, GoMarkdownSlots> {
}
export {};
