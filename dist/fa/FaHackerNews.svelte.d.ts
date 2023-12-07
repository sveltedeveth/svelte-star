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
export type FaHackerNewsProps = typeof __propDef.props;
export type FaHackerNewsEvents = typeof __propDef.events;
export type FaHackerNewsSlots = typeof __propDef.slots;
export default class FaHackerNews extends SvelteComponentTyped<FaHackerNewsProps, FaHackerNewsEvents, FaHackerNewsSlots> {
}
export {};
