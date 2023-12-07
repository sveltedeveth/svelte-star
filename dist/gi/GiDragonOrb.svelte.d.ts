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
export type GiDragonOrbProps = typeof __propDef.props;
export type GiDragonOrbEvents = typeof __propDef.events;
export type GiDragonOrbSlots = typeof __propDef.slots;
export default class GiDragonOrb extends SvelteComponentTyped<GiDragonOrbProps, GiDragonOrbEvents, GiDragonOrbSlots> {
}
export {};
