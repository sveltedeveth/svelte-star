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
export type TiArrowSyncProps = typeof __propDef.props;
export type TiArrowSyncEvents = typeof __propDef.events;
export type TiArrowSyncSlots = typeof __propDef.slots;
export default class TiArrowSync extends SvelteComponentTyped<TiArrowSyncProps, TiArrowSyncEvents, TiArrowSyncSlots> {
}
export {};
