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
export type GiOverheadProps = typeof __propDef.props;
export type GiOverheadEvents = typeof __propDef.events;
export type GiOverheadSlots = typeof __propDef.slots;
export default class GiOverhead extends SvelteComponentTyped<GiOverheadProps, GiOverheadEvents, GiOverheadSlots> {
}
export {};
