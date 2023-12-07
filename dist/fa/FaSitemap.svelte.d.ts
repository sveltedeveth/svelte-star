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
export type FaSitemapProps = typeof __propDef.props;
export type FaSitemapEvents = typeof __propDef.events;
export type FaSitemapSlots = typeof __propDef.slots;
export default class FaSitemap extends SvelteComponentTyped<FaSitemapProps, FaSitemapEvents, FaSitemapSlots> {
}
export {};
