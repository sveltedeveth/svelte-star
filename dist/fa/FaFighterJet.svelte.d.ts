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
export type FaFighterJetProps = typeof __propDef.props;
export type FaFighterJetEvents = typeof __propDef.events;
export type FaFighterJetSlots = typeof __propDef.slots;
export default class FaFighterJet extends SvelteComponentTyped<FaFighterJetProps, FaFighterJetEvents, FaFighterJetSlots> {
}
export {};
