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
export type FaSketchProps = typeof __propDef.props;
export type FaSketchEvents = typeof __propDef.events;
export type FaSketchSlots = typeof __propDef.slots;
export default class FaSketch extends SvelteComponentTyped<FaSketchProps, FaSketchEvents, FaSketchSlots> {
}
export {};
