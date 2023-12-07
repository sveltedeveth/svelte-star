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
export type GiShortsProps = typeof __propDef.props;
export type GiShortsEvents = typeof __propDef.events;
export type GiShortsSlots = typeof __propDef.slots;
export default class GiShorts extends SvelteComponentTyped<GiShortsProps, GiShortsEvents, GiShortsSlots> {
}
export {};
