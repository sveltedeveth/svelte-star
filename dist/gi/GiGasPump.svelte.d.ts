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
export type GiGasPumpProps = typeof __propDef.props;
export type GiGasPumpEvents = typeof __propDef.events;
export type GiGasPumpSlots = typeof __propDef.slots;
export default class GiGasPump extends SvelteComponentTyped<GiGasPumpProps, GiGasPumpEvents, GiGasPumpSlots> {
}
export {};
