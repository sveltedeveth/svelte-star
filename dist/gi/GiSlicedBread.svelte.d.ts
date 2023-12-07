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
export type GiSlicedBreadProps = typeof __propDef.props;
export type GiSlicedBreadEvents = typeof __propDef.events;
export type GiSlicedBreadSlots = typeof __propDef.slots;
export default class GiSlicedBread extends SvelteComponentTyped<GiSlicedBreadProps, GiSlicedBreadEvents, GiSlicedBreadSlots> {
}
export {};
