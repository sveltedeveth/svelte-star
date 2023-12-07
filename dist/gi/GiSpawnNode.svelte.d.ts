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
export type GiSpawnNodeProps = typeof __propDef.props;
export type GiSpawnNodeEvents = typeof __propDef.events;
export type GiSpawnNodeSlots = typeof __propDef.slots;
export default class GiSpawnNode extends SvelteComponentTyped<GiSpawnNodeProps, GiSpawnNodeEvents, GiSpawnNodeSlots> {
}
export {};
