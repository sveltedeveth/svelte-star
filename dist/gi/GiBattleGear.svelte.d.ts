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
export type GiBattleGearProps = typeof __propDef.props;
export type GiBattleGearEvents = typeof __propDef.events;
export type GiBattleGearSlots = typeof __propDef.slots;
export default class GiBattleGear extends SvelteComponentTyped<GiBattleGearProps, GiBattleGearEvents, GiBattleGearSlots> {
}
export {};
