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
export type GiLaserBurstProps = typeof __propDef.props;
export type GiLaserBurstEvents = typeof __propDef.events;
export type GiLaserBurstSlots = typeof __propDef.slots;
export default class GiLaserBurst extends SvelteComponentTyped<GiLaserBurstProps, GiLaserBurstEvents, GiLaserBurstSlots> {
}
export {};
