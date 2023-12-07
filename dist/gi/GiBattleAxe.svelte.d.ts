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
export type GiBattleAxeProps = typeof __propDef.props;
export type GiBattleAxeEvents = typeof __propDef.events;
export type GiBattleAxeSlots = typeof __propDef.slots;
export default class GiBattleAxe extends SvelteComponentTyped<GiBattleAxeProps, GiBattleAxeEvents, GiBattleAxeSlots> {
}
export {};
