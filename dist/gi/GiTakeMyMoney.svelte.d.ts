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
export type GiTakeMyMoneyProps = typeof __propDef.props;
export type GiTakeMyMoneyEvents = typeof __propDef.events;
export type GiTakeMyMoneySlots = typeof __propDef.slots;
export default class GiTakeMyMoney extends SvelteComponentTyped<GiTakeMyMoneyProps, GiTakeMyMoneyEvents, GiTakeMyMoneySlots> {
}
export {};
