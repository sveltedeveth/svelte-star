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
export type GiTellerMineProps = typeof __propDef.props;
export type GiTellerMineEvents = typeof __propDef.events;
export type GiTellerMineSlots = typeof __propDef.slots;
export default class GiTellerMine extends SvelteComponentTyped<GiTellerMineProps, GiTellerMineEvents, GiTellerMineSlots> {
}
export {};
