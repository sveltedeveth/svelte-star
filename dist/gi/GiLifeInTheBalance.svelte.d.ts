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
export type GiLifeInTheBalanceProps = typeof __propDef.props;
export type GiLifeInTheBalanceEvents = typeof __propDef.events;
export type GiLifeInTheBalanceSlots = typeof __propDef.slots;
export default class GiLifeInTheBalance extends SvelteComponentTyped<GiLifeInTheBalanceProps, GiLifeInTheBalanceEvents, GiLifeInTheBalanceSlots> {
}
export {};
