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
export type TiSpannerProps = typeof __propDef.props;
export type TiSpannerEvents = typeof __propDef.events;
export type TiSpannerSlots = typeof __propDef.slots;
export default class TiSpanner extends SvelteComponentTyped<TiSpannerProps, TiSpannerEvents, TiSpannerSlots> {
}
export {};
