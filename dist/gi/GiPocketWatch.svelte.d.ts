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
export type GiPocketWatchProps = typeof __propDef.props;
export type GiPocketWatchEvents = typeof __propDef.events;
export type GiPocketWatchSlots = typeof __propDef.slots;
export default class GiPocketWatch extends SvelteComponentTyped<GiPocketWatchProps, GiPocketWatchEvents, GiPocketWatchSlots> {
}
export {};
