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
export type GiSpannerProps = typeof __propDef.props;
export type GiSpannerEvents = typeof __propDef.events;
export type GiSpannerSlots = typeof __propDef.slots;
export default class GiSpanner extends SvelteComponentTyped<GiSpannerProps, GiSpannerEvents, GiSpannerSlots> {
}
export {};
