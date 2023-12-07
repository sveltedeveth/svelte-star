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
export type FaGasPumpProps = typeof __propDef.props;
export type FaGasPumpEvents = typeof __propDef.events;
export type FaGasPumpSlots = typeof __propDef.slots;
export default class FaGasPump extends SvelteComponentTyped<FaGasPumpProps, FaGasPumpEvents, FaGasPumpSlots> {
}
export {};
