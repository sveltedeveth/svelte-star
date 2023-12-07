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
export type GiChainMailProps = typeof __propDef.props;
export type GiChainMailEvents = typeof __propDef.events;
export type GiChainMailSlots = typeof __propDef.slots;
export default class GiChainMail extends SvelteComponentTyped<GiChainMailProps, GiChainMailEvents, GiChainMailSlots> {
}
export {};
