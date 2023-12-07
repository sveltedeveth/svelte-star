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
export type FaMoneyCheckProps = typeof __propDef.props;
export type FaMoneyCheckEvents = typeof __propDef.events;
export type FaMoneyCheckSlots = typeof __propDef.slots;
export default class FaMoneyCheck extends SvelteComponentTyped<FaMoneyCheckProps, FaMoneyCheckEvents, FaMoneyCheckSlots> {
}
export {};
