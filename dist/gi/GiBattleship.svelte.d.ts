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
export type GiBattleshipProps = typeof __propDef.props;
export type GiBattleshipEvents = typeof __propDef.events;
export type GiBattleshipSlots = typeof __propDef.slots;
export default class GiBattleship extends SvelteComponentTyped<GiBattleshipProps, GiBattleshipEvents, GiBattleshipSlots> {
}
export {};
