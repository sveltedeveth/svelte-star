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
export type GiDropletSplashProps = typeof __propDef.props;
export type GiDropletSplashEvents = typeof __propDef.events;
export type GiDropletSplashSlots = typeof __propDef.slots;
export default class GiDropletSplash extends SvelteComponentTyped<GiDropletSplashProps, GiDropletSplashEvents, GiDropletSplashSlots> {
}
export {};
