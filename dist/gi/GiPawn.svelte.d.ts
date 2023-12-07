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
export type GiPawnProps = typeof __propDef.props;
export type GiPawnEvents = typeof __propDef.events;
export type GiPawnSlots = typeof __propDef.slots;
export default class GiPawn extends SvelteComponentTyped<GiPawnProps, GiPawnEvents, GiPawnSlots> {
}
export {};
