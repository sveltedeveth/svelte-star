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
export type GiMiningHelmetProps = typeof __propDef.props;
export type GiMiningHelmetEvents = typeof __propDef.events;
export type GiMiningHelmetSlots = typeof __propDef.slots;
export default class GiMiningHelmet extends SvelteComponentTyped<GiMiningHelmetProps, GiMiningHelmetEvents, GiMiningHelmetSlots> {
}
export {};
