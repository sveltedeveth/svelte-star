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
export type GiRssProps = typeof __propDef.props;
export type GiRssEvents = typeof __propDef.events;
export type GiRssSlots = typeof __propDef.slots;
export default class GiRss extends SvelteComponentTyped<GiRssProps, GiRssEvents, GiRssSlots> {
}
export {};
