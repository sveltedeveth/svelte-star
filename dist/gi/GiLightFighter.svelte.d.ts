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
export type GiLightFighterProps = typeof __propDef.props;
export type GiLightFighterEvents = typeof __propDef.events;
export type GiLightFighterSlots = typeof __propDef.slots;
export default class GiLightFighter extends SvelteComponentTyped<GiLightFighterProps, GiLightFighterEvents, GiLightFighterSlots> {
}
export {};
