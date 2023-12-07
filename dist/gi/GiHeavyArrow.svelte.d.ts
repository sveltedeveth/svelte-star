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
export type GiHeavyArrowProps = typeof __propDef.props;
export type GiHeavyArrowEvents = typeof __propDef.events;
export type GiHeavyArrowSlots = typeof __propDef.slots;
export default class GiHeavyArrow extends SvelteComponentTyped<GiHeavyArrowProps, GiHeavyArrowEvents, GiHeavyArrowSlots> {
}
export {};
