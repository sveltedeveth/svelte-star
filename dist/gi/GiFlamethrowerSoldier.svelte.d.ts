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
export type GiFlamethrowerSoldierProps = typeof __propDef.props;
export type GiFlamethrowerSoldierEvents = typeof __propDef.events;
export type GiFlamethrowerSoldierSlots = typeof __propDef.slots;
export default class GiFlamethrowerSoldier extends SvelteComponentTyped<GiFlamethrowerSoldierProps, GiFlamethrowerSoldierEvents, GiFlamethrowerSoldierSlots> {
}
export {};
