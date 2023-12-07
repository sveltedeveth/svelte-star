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
export type GiArrowCursorProps = typeof __propDef.props;
export type GiArrowCursorEvents = typeof __propDef.events;
export type GiArrowCursorSlots = typeof __propDef.slots;
export default class GiArrowCursor extends SvelteComponentTyped<GiArrowCursorProps, GiArrowCursorEvents, GiArrowCursorSlots> {
}
export {};
