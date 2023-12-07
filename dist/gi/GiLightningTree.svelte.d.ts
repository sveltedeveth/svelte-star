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
export type GiLightningTreeProps = typeof __propDef.props;
export type GiLightningTreeEvents = typeof __propDef.events;
export type GiLightningTreeSlots = typeof __propDef.slots;
export default class GiLightningTree extends SvelteComponentTyped<GiLightningTreeProps, GiLightningTreeEvents, GiLightningTreeSlots> {
}
export {};
