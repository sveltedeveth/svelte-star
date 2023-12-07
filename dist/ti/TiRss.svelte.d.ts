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
export type TiRssProps = typeof __propDef.props;
export type TiRssEvents = typeof __propDef.events;
export type TiRssSlots = typeof __propDef.slots;
export default class TiRss extends SvelteComponentTyped<TiRssProps, TiRssEvents, TiRssSlots> {
}
export {};
