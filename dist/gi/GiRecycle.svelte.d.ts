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
export type GiRecycleProps = typeof __propDef.props;
export type GiRecycleEvents = typeof __propDef.events;
export type GiRecycleSlots = typeof __propDef.slots;
export default class GiRecycle extends SvelteComponentTyped<GiRecycleProps, GiRecycleEvents, GiRecycleSlots> {
}
export {};
