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
export type GiMoneyStackProps = typeof __propDef.props;
export type GiMoneyStackEvents = typeof __propDef.events;
export type GiMoneyStackSlots = typeof __propDef.slots;
export default class GiMoneyStack extends SvelteComponentTyped<GiMoneyStackProps, GiMoneyStackEvents, GiMoneyStackSlots> {
}
export {};
