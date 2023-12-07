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
export type GiPaperArrowProps = typeof __propDef.props;
export type GiPaperArrowEvents = typeof __propDef.events;
export type GiPaperArrowSlots = typeof __propDef.slots;
export default class GiPaperArrow extends SvelteComponentTyped<GiPaperArrowProps, GiPaperArrowEvents, GiPaperArrowSlots> {
}
export {};
