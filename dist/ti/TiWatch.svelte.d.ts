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
export type TiWatchProps = typeof __propDef.props;
export type TiWatchEvents = typeof __propDef.events;
export type TiWatchSlots = typeof __propDef.slots;
export default class TiWatch extends SvelteComponentTyped<TiWatchProps, TiWatchEvents, TiWatchSlots> {
}
export {};
