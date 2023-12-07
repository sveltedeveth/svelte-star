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
export type GiCheeseWedgeProps = typeof __propDef.props;
export type GiCheeseWedgeEvents = typeof __propDef.events;
export type GiCheeseWedgeSlots = typeof __propDef.slots;
export default class GiCheeseWedge extends SvelteComponentTyped<GiCheeseWedgeProps, GiCheeseWedgeEvents, GiCheeseWedgeSlots> {
}
export {};
