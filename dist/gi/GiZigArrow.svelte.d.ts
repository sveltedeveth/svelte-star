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
export type GiZigArrowProps = typeof __propDef.props;
export type GiZigArrowEvents = typeof __propDef.events;
export type GiZigArrowSlots = typeof __propDef.slots;
export default class GiZigArrow extends SvelteComponentTyped<GiZigArrowProps, GiZigArrowEvents, GiZigArrowSlots> {
}
export {};
