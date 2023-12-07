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
export type TiSpannerOutlineProps = typeof __propDef.props;
export type TiSpannerOutlineEvents = typeof __propDef.events;
export type TiSpannerOutlineSlots = typeof __propDef.slots;
export default class TiSpannerOutline extends SvelteComponentTyped<TiSpannerOutlineProps, TiSpannerOutlineEvents, TiSpannerOutlineSlots> {
}
export {};
