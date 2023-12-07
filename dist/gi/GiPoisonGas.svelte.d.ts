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
export type GiPoisonGasProps = typeof __propDef.props;
export type GiPoisonGasEvents = typeof __propDef.events;
export type GiPoisonGasSlots = typeof __propDef.slots;
export default class GiPoisonGas extends SvelteComponentTyped<GiPoisonGasProps, GiPoisonGasEvents, GiPoisonGasSlots> {
}
export {};
