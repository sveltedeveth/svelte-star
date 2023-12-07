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
export type GiAwarenessProps = typeof __propDef.props;
export type GiAwarenessEvents = typeof __propDef.events;
export type GiAwarenessSlots = typeof __propDef.slots;
export default class GiAwareness extends SvelteComponentTyped<GiAwarenessProps, GiAwarenessEvents, GiAwarenessSlots> {
}
export {};
