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
export type GiExpenseProps = typeof __propDef.props;
export type GiExpenseEvents = typeof __propDef.events;
export type GiExpenseSlots = typeof __propDef.slots;
export default class GiExpense extends SvelteComponentTyped<GiExpenseProps, GiExpenseEvents, GiExpenseSlots> {
}
export {};
