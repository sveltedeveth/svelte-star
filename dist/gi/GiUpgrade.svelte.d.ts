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
export type GiUpgradeProps = typeof __propDef.props;
export type GiUpgradeEvents = typeof __propDef.events;
export type GiUpgradeSlots = typeof __propDef.slots;
export default class GiUpgrade extends SvelteComponentTyped<GiUpgradeProps, GiUpgradeEvents, GiUpgradeSlots> {
}
export {};
