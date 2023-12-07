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
export type GiWaterBoltProps = typeof __propDef.props;
export type GiWaterBoltEvents = typeof __propDef.events;
export type GiWaterBoltSlots = typeof __propDef.slots;
export default class GiWaterBolt extends SvelteComponentTyped<GiWaterBoltProps, GiWaterBoltEvents, GiWaterBoltSlots> {
}
export {};
