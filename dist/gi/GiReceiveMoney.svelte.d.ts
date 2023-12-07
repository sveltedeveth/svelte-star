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
export type GiReceiveMoneyProps = typeof __propDef.props;
export type GiReceiveMoneyEvents = typeof __propDef.events;
export type GiReceiveMoneySlots = typeof __propDef.slots;
export default class GiReceiveMoney extends SvelteComponentTyped<GiReceiveMoneyProps, GiReceiveMoneyEvents, GiReceiveMoneySlots> {
}
export {};
