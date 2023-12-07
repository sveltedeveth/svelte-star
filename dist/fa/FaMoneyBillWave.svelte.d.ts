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
export type FaMoneyBillWaveProps = typeof __propDef.props;
export type FaMoneyBillWaveEvents = typeof __propDef.events;
export type FaMoneyBillWaveSlots = typeof __propDef.slots;
export default class FaMoneyBillWave extends SvelteComponentTyped<FaMoneyBillWaveProps, FaMoneyBillWaveEvents, FaMoneyBillWaveSlots> {
}
export {};
