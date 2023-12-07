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
export type MdRssFeedProps = typeof __propDef.props;
export type MdRssFeedEvents = typeof __propDef.events;
export type MdRssFeedSlots = typeof __propDef.slots;
export default class MdRssFeed extends SvelteComponentTyped<MdRssFeedProps, MdRssFeedEvents, MdRssFeedSlots> {
}
export {};
