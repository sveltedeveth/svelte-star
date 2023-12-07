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
export type GiIncomingRocketProps = typeof __propDef.props;
export type GiIncomingRocketEvents = typeof __propDef.events;
export type GiIncomingRocketSlots = typeof __propDef.slots;
export default class GiIncomingRocket extends SvelteComponentTyped<GiIncomingRocketProps, GiIncomingRocketEvents, GiIncomingRocketSlots> {
}
export {};
