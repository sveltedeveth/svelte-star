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
export type GiPlatformProps = typeof __propDef.props;
export type GiPlatformEvents = typeof __propDef.events;
export type GiPlatformSlots = typeof __propDef.slots;
export default class GiPlatform extends SvelteComponentTyped<GiPlatformProps, GiPlatformEvents, GiPlatformSlots> {
}
export {};
