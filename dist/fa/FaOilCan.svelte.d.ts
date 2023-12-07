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
export type FaOilCanProps = typeof __propDef.props;
export type FaOilCanEvents = typeof __propDef.events;
export type FaOilCanSlots = typeof __propDef.slots;
export default class FaOilCan extends SvelteComponentTyped<FaOilCanProps, FaOilCanEvents, FaOilCanSlots> {
}
export {};
