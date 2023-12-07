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
export type GiMissileSwarmProps = typeof __propDef.props;
export type GiMissileSwarmEvents = typeof __propDef.events;
export type GiMissileSwarmSlots = typeof __propDef.slots;
export default class GiMissileSwarm extends SvelteComponentTyped<GiMissileSwarmProps, GiMissileSwarmEvents, GiMissileSwarmSlots> {
}
export {};
