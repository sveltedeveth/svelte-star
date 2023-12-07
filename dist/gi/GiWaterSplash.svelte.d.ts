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
export type GiWaterSplashProps = typeof __propDef.props;
export type GiWaterSplashEvents = typeof __propDef.events;
export type GiWaterSplashSlots = typeof __propDef.slots;
export default class GiWaterSplash extends SvelteComponentTyped<GiWaterSplashProps, GiWaterSplashEvents, GiWaterSplashSlots> {
}
export {};
