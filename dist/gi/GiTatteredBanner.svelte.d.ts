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
export type GiTatteredBannerProps = typeof __propDef.props;
export type GiTatteredBannerEvents = typeof __propDef.events;
export type GiTatteredBannerSlots = typeof __propDef.slots;
export default class GiTatteredBanner extends SvelteComponentTyped<GiTatteredBannerProps, GiTatteredBannerEvents, GiTatteredBannerSlots> {
}
export {};
