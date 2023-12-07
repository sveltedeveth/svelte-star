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
export type GiGoldScarabProps = typeof __propDef.props;
export type GiGoldScarabEvents = typeof __propDef.events;
export type GiGoldScarabSlots = typeof __propDef.slots;
export default class GiGoldScarab extends SvelteComponentTyped<GiGoldScarabProps, GiGoldScarabEvents, GiGoldScarabSlots> {
}
export {};
