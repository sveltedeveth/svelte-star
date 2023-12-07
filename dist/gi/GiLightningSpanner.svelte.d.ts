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
export type GiLightningSpannerProps = typeof __propDef.props;
export type GiLightningSpannerEvents = typeof __propDef.events;
export type GiLightningSpannerSlots = typeof __propDef.slots;
export default class GiLightningSpanner extends SvelteComponentTyped<GiLightningSpannerProps, GiLightningSpannerEvents, GiLightningSpannerSlots> {
}
export {};
