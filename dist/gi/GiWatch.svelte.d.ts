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
export type GiWatchProps = typeof __propDef.props;
export type GiWatchEvents = typeof __propDef.events;
export type GiWatchSlots = typeof __propDef.slots;
export default class GiWatch extends SvelteComponentTyped<GiWatchProps, GiWatchEvents, GiWatchSlots> {
}
export {};
