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
export type GiSplashProps = typeof __propDef.props;
export type GiSplashEvents = typeof __propDef.events;
export type GiSplashSlots = typeof __propDef.slots;
export default class GiSplash extends SvelteComponentTyped<GiSplashProps, GiSplashEvents, GiSplashSlots> {
}
export {};
