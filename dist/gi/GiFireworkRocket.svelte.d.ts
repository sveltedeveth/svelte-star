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
export type GiFireworkRocketProps = typeof __propDef.props;
export type GiFireworkRocketEvents = typeof __propDef.events;
export type GiFireworkRocketSlots = typeof __propDef.slots;
export default class GiFireworkRocket extends SvelteComponentTyped<GiFireworkRocketProps, GiFireworkRocketEvents, GiFireworkRocketSlots> {
}
export {};
