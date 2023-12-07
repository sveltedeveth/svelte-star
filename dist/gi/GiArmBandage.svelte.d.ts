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
export type GiArmBandageProps = typeof __propDef.props;
export type GiArmBandageEvents = typeof __propDef.events;
export type GiArmBandageSlots = typeof __propDef.slots;
export default class GiArmBandage extends SvelteComponentTyped<GiArmBandageProps, GiArmBandageEvents, GiArmBandageSlots> {
}
export {};
