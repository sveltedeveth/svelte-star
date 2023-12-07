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
export type GiHeavyFighterProps = typeof __propDef.props;
export type GiHeavyFighterEvents = typeof __propDef.events;
export type GiHeavyFighterSlots = typeof __propDef.slots;
export default class GiHeavyFighter extends SvelteComponentTyped<GiHeavyFighterProps, GiHeavyFighterEvents, GiHeavyFighterSlots> {
}
export {};
