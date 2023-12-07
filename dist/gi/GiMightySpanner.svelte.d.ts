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
export type GiMightySpannerProps = typeof __propDef.props;
export type GiMightySpannerEvents = typeof __propDef.events;
export type GiMightySpannerSlots = typeof __propDef.slots;
export default class GiMightySpanner extends SvelteComponentTyped<GiMightySpannerProps, GiMightySpannerEvents, GiMightySpannerSlots> {
}
export {};
