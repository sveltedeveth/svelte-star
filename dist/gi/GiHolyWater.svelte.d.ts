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
export type GiHolyWaterProps = typeof __propDef.props;
export type GiHolyWaterEvents = typeof __propDef.events;
export type GiHolyWaterSlots = typeof __propDef.slots;
export default class GiHolyWater extends SvelteComponentTyped<GiHolyWaterProps, GiHolyWaterEvents, GiHolyWaterSlots> {
}
export {};
