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
export type GiTronArrowProps = typeof __propDef.props;
export type GiTronArrowEvents = typeof __propDef.events;
export type GiTronArrowSlots = typeof __propDef.slots;
export default class GiTronArrow extends SvelteComponentTyped<GiTronArrowProps, GiTronArrowEvents, GiTronArrowSlots> {
}
export {};
