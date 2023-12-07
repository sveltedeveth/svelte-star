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
export type FaBalanceScaleProps = typeof __propDef.props;
export type FaBalanceScaleEvents = typeof __propDef.events;
export type FaBalanceScaleSlots = typeof __propDef.slots;
export default class FaBalanceScale extends SvelteComponentTyped<FaBalanceScaleProps, FaBalanceScaleEvents, FaBalanceScaleSlots> {
}
export {};
