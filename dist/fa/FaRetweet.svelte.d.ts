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
export type FaRetweetProps = typeof __propDef.props;
export type FaRetweetEvents = typeof __propDef.events;
export type FaRetweetSlots = typeof __propDef.slots;
export default class FaRetweet extends SvelteComponentTyped<FaRetweetProps, FaRetweetEvents, FaRetweetSlots> {
}
export {};
