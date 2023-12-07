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
export type MdOpenInBrowserProps = typeof __propDef.props;
export type MdOpenInBrowserEvents = typeof __propDef.events;
export type MdOpenInBrowserSlots = typeof __propDef.slots;
export default class MdOpenInBrowser extends SvelteComponentTyped<MdOpenInBrowserProps, MdOpenInBrowserEvents, MdOpenInBrowserSlots> {
}
export {};
