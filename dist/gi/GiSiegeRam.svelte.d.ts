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
export type GiSiegeRamProps = typeof __propDef.props;
export type GiSiegeRamEvents = typeof __propDef.events;
export type GiSiegeRamSlots = typeof __propDef.slots;
export default class GiSiegeRam extends SvelteComponentTyped<GiSiegeRamProps, GiSiegeRamEvents, GiSiegeRamSlots> {
}
export {};
