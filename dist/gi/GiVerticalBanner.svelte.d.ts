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
export type GiVerticalBannerProps = typeof __propDef.props;
export type GiVerticalBannerEvents = typeof __propDef.events;
export type GiVerticalBannerSlots = typeof __propDef.slots;
export default class GiVerticalBanner extends SvelteComponentTyped<GiVerticalBannerProps, GiVerticalBannerEvents, GiVerticalBannerSlots> {
}
export {};
