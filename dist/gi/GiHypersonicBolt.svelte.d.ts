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
export type GiHypersonicBoltProps = typeof __propDef.props;
export type GiHypersonicBoltEvents = typeof __propDef.events;
export type GiHypersonicBoltSlots = typeof __propDef.slots;
export default class GiHypersonicBolt extends SvelteComponentTyped<GiHypersonicBoltProps, GiHypersonicBoltEvents, GiHypersonicBoltSlots> {
}
export {};
