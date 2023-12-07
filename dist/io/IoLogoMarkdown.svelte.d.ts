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
export type IoLogoMarkdownProps = typeof __propDef.props;
export type IoLogoMarkdownEvents = typeof __propDef.events;
export type IoLogoMarkdownSlots = typeof __propDef.slots;
export default class IoLogoMarkdown extends SvelteComponentTyped<IoLogoMarkdownProps, IoLogoMarkdownEvents, IoLogoMarkdownSlots> {
}
export {};
