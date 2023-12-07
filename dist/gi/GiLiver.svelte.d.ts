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
export type GiLiverProps = typeof __propDef.props;
export type GiLiverEvents = typeof __propDef.events;
export type GiLiverSlots = typeof __propDef.slots;
export default class GiLiver extends SvelteComponentTyped<GiLiverProps, GiLiverEvents, GiLiverSlots> {
}
export {};
