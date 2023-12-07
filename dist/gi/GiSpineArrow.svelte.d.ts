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
export type GiSpineArrowProps = typeof __propDef.props;
export type GiSpineArrowEvents = typeof __propDef.events;
export type GiSpineArrowSlots = typeof __propDef.slots;
export default class GiSpineArrow extends SvelteComponentTyped<GiSpineArrowProps, GiSpineArrowEvents, GiSpineArrowSlots> {
}
export {};
