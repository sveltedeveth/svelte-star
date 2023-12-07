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
export type GiHydraProps = typeof __propDef.props;
export type GiHydraEvents = typeof __propDef.events;
export type GiHydraSlots = typeof __propDef.slots;
export default class GiHydra extends SvelteComponentTyped<GiHydraProps, GiHydraEvents, GiHydraSlots> {
}
export {};
