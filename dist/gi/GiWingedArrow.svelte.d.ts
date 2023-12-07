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
export type GiWingedArrowProps = typeof __propDef.props;
export type GiWingedArrowEvents = typeof __propDef.events;
export type GiWingedArrowSlots = typeof __propDef.slots;
export default class GiWingedArrow extends SvelteComponentTyped<GiWingedArrowProps, GiWingedArrowEvents, GiWingedArrowSlots> {
}
export {};
