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
export type GiArrowheadProps = typeof __propDef.props;
export type GiArrowheadEvents = typeof __propDef.events;
export type GiArrowheadSlots = typeof __propDef.slots;
export default class GiArrowhead extends SvelteComponentTyped<GiArrowheadProps, GiArrowheadEvents, GiArrowheadSlots> {
}
export {};
