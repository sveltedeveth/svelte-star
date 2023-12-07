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
export type FaRssProps = typeof __propDef.props;
export type FaRssEvents = typeof __propDef.events;
export type FaRssSlots = typeof __propDef.slots;
export default class FaRss extends SvelteComponentTyped<FaRssProps, FaRssEvents, FaRssSlots> {
}
export {};
