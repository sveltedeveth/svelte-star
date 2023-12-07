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
export type GiPollenDustProps = typeof __propDef.props;
export type GiPollenDustEvents = typeof __propDef.events;
export type GiPollenDustSlots = typeof __propDef.slots;
export default class GiPollenDust extends SvelteComponentTyped<GiPollenDustProps, GiPollenDustEvents, GiPollenDustSlots> {
}
export {};
