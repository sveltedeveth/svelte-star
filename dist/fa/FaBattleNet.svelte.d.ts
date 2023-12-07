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
export type FaBattleNetProps = typeof __propDef.props;
export type FaBattleNetEvents = typeof __propDef.events;
export type FaBattleNetSlots = typeof __propDef.slots;
export default class FaBattleNet extends SvelteComponentTyped<FaBattleNetProps, FaBattleNetEvents, FaBattleNetSlots> {
}
export {};
