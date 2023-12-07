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
export type GiPocketBowProps = typeof __propDef.props;
export type GiPocketBowEvents = typeof __propDef.events;
export type GiPocketBowSlots = typeof __propDef.slots;
export default class GiPocketBow extends SvelteComponentTyped<GiPocketBowProps, GiPocketBowEvents, GiPocketBowSlots> {
}
export {};
