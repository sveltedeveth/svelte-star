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
export type GiPikemanProps = typeof __propDef.props;
export type GiPikemanEvents = typeof __propDef.events;
export type GiPikemanSlots = typeof __propDef.slots;
export default class GiPikeman extends SvelteComponentTyped<GiPikemanProps, GiPikemanEvents, GiPikemanSlots> {
}
export {};
