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
export type FaBezierCurveProps = typeof __propDef.props;
export type FaBezierCurveEvents = typeof __propDef.events;
export type FaBezierCurveSlots = typeof __propDef.slots;
export default class FaBezierCurve extends SvelteComponentTyped<FaBezierCurveProps, FaBezierCurveEvents, FaBezierCurveSlots> {
}
export {};
