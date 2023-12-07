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
export type GiJetFighterProps = typeof __propDef.props;
export type GiJetFighterEvents = typeof __propDef.events;
export type GiJetFighterSlots = typeof __propDef.slots;
export default class GiJetFighter extends SvelteComponentTyped<GiJetFighterProps, GiJetFighterEvents, GiJetFighterSlots> {
}
export {};
