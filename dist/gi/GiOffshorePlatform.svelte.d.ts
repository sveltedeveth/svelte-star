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
export type GiOffshorePlatformProps = typeof __propDef.props;
export type GiOffshorePlatformEvents = typeof __propDef.events;
export type GiOffshorePlatformSlots = typeof __propDef.slots;
export default class GiOffshorePlatform extends SvelteComponentTyped<GiOffshorePlatformProps, GiOffshorePlatformEvents, GiOffshorePlatformSlots> {
}
export {};
