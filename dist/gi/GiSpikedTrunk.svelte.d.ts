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
export type GiSpikedTrunkProps = typeof __propDef.props;
export type GiSpikedTrunkEvents = typeof __propDef.events;
export type GiSpikedTrunkSlots = typeof __propDef.slots;
export default class GiSpikedTrunk extends SvelteComponentTyped<GiSpikedTrunkProps, GiSpikedTrunkEvents, GiSpikedTrunkSlots> {
}
export {};
