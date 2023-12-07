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
export type GiStalactitesProps = typeof __propDef.props;
export type GiStalactitesEvents = typeof __propDef.events;
export type GiStalactitesSlots = typeof __propDef.slots;
export default class GiStalactites extends SvelteComponentTyped<GiStalactitesProps, GiStalactitesEvents, GiStalactitesSlots> {
}
export {};
