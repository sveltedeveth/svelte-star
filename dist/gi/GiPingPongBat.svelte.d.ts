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
export type GiPingPongBatProps = typeof __propDef.props;
export type GiPingPongBatEvents = typeof __propDef.events;
export type GiPingPongBatSlots = typeof __propDef.slots;
export default class GiPingPongBat extends SvelteComponentTyped<GiPingPongBatProps, GiPingPongBatEvents, GiPingPongBatSlots> {
}
export {};
