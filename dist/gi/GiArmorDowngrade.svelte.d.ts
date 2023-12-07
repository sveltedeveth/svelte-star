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
export type GiArmorDowngradeProps = typeof __propDef.props;
export type GiArmorDowngradeEvents = typeof __propDef.events;
export type GiArmorDowngradeSlots = typeof __propDef.slots;
export default class GiArmorDowngrade extends SvelteComponentTyped<GiArmorDowngradeProps, GiArmorDowngradeEvents, GiArmorDowngradeSlots> {
}
export {};
