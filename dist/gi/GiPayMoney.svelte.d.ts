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
export type GiPayMoneyProps = typeof __propDef.props;
export type GiPayMoneyEvents = typeof __propDef.events;
export type GiPayMoneySlots = typeof __propDef.slots;
export default class GiPayMoney extends SvelteComponentTyped<GiPayMoneyProps, GiPayMoneyEvents, GiPayMoneySlots> {
}
export {};
