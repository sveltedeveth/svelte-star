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
export type FaFillDripProps = typeof __propDef.props;
export type FaFillDripEvents = typeof __propDef.events;
export type FaFillDripSlots = typeof __propDef.slots;
export default class FaFillDrip extends SvelteComponentTyped<FaFillDripProps, FaFillDripEvents, FaFillDripSlots> {
}
export {};
