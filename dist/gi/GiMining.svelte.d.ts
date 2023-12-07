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
export type GiMiningProps = typeof __propDef.props;
export type GiMiningEvents = typeof __propDef.events;
export type GiMiningSlots = typeof __propDef.slots;
export default class GiMining extends SvelteComponentTyped<GiMiningProps, GiMiningEvents, GiMiningSlots> {
}
export {};
