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
export type GiPaintedPotteryProps = typeof __propDef.props;
export type GiPaintedPotteryEvents = typeof __propDef.events;
export type GiPaintedPotterySlots = typeof __propDef.slots;
export default class GiPaintedPottery extends SvelteComponentTyped<GiPaintedPotteryProps, GiPaintedPotteryEvents, GiPaintedPotterySlots> {
}
export {};
