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
export type GiSplashyStreamProps = typeof __propDef.props;
export type GiSplashyStreamEvents = typeof __propDef.events;
export type GiSplashyStreamSlots = typeof __propDef.slots;
export default class GiSplashyStream extends SvelteComponentTyped<GiSplashyStreamProps, GiSplashyStreamEvents, GiSplashyStreamSlots> {
}
export {};
