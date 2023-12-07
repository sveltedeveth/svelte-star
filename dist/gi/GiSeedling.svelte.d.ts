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
export type GiSeedlingProps = typeof __propDef.props;
export type GiSeedlingEvents = typeof __propDef.events;
export type GiSeedlingSlots = typeof __propDef.slots;
export default class GiSeedling extends SvelteComponentTyped<GiSeedlingProps, GiSeedlingEvents, GiSeedlingSlots> {
}
export {};
