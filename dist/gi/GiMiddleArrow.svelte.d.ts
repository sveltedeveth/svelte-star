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
export type GiMiddleArrowProps = typeof __propDef.props;
export type GiMiddleArrowEvents = typeof __propDef.events;
export type GiMiddleArrowSlots = typeof __propDef.slots;
export default class GiMiddleArrow extends SvelteComponentTyped<GiMiddleArrowProps, GiMiddleArrowEvents, GiMiddleArrowSlots> {
}
export {};
