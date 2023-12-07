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
export type GiSquidHeadProps = typeof __propDef.props;
export type GiSquidHeadEvents = typeof __propDef.events;
export type GiSquidHeadSlots = typeof __propDef.slots;
export default class GiSquidHead extends SvelteComponentTyped<GiSquidHeadProps, GiSquidHeadEvents, GiSquidHeadSlots> {
}
export {};
