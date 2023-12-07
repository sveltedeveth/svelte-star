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
export type GiCakeSliceProps = typeof __propDef.props;
export type GiCakeSliceEvents = typeof __propDef.events;
export type GiCakeSliceSlots = typeof __propDef.slots;
export default class GiCakeSlice extends SvelteComponentTyped<GiCakeSliceProps, GiCakeSliceEvents, GiCakeSliceSlots> {
}
export {};
