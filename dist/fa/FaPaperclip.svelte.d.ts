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
export type FaPaperclipProps = typeof __propDef.props;
export type FaPaperclipEvents = typeof __propDef.events;
export type FaPaperclipSlots = typeof __propDef.slots;
export default class FaPaperclip extends SvelteComponentTyped<FaPaperclipProps, FaPaperclipEvents, FaPaperclipSlots> {
}
export {};
