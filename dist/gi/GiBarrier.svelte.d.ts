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
export type GiBarrierProps = typeof __propDef.props;
export type GiBarrierEvents = typeof __propDef.events;
export type GiBarrierSlots = typeof __propDef.slots;
export default class GiBarrier extends SvelteComponentTyped<GiBarrierProps, GiBarrierEvents, GiBarrierSlots> {
}
export {};
