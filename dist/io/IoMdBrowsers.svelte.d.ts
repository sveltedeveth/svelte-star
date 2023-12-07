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
export type IoMdBrowsersProps = typeof __propDef.props;
export type IoMdBrowsersEvents = typeof __propDef.events;
export type IoMdBrowsersSlots = typeof __propDef.slots;
export default class IoMdBrowsers extends SvelteComponentTyped<IoMdBrowsersProps, IoMdBrowsersEvents, IoMdBrowsersSlots> {
}
export {};
