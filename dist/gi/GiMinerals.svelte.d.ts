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
export type GiMineralsProps = typeof __propDef.props;
export type GiMineralsEvents = typeof __propDef.events;
export type GiMineralsSlots = typeof __propDef.slots;
export default class GiMinerals extends SvelteComponentTyped<GiMineralsProps, GiMineralsEvents, GiMineralsSlots> {
}
export {};
