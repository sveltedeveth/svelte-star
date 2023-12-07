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
export type GiChargedArrowProps = typeof __propDef.props;
export type GiChargedArrowEvents = typeof __propDef.events;
export type GiChargedArrowSlots = typeof __propDef.slots;
export default class GiChargedArrow extends SvelteComponentTyped<GiChargedArrowProps, GiChargedArrowEvents, GiChargedArrowSlots> {
}
export {};
