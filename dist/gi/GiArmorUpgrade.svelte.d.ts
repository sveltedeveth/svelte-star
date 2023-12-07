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
export type GiArmorUpgradeProps = typeof __propDef.props;
export type GiArmorUpgradeEvents = typeof __propDef.events;
export type GiArmorUpgradeSlots = typeof __propDef.slots;
export default class GiArmorUpgrade extends SvelteComponentTyped<GiArmorUpgradeProps, GiArmorUpgradeEvents, GiArmorUpgradeSlots> {
}
export {};
