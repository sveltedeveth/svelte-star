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
export type GiTicTacToeProps = typeof __propDef.props;
export type GiTicTacToeEvents = typeof __propDef.events;
export type GiTicTacToeSlots = typeof __propDef.slots;
export default class GiTicTacToe extends SvelteComponentTyped<GiTicTacToeProps, GiTicTacToeEvents, GiTicTacToeSlots> {
}
export {};
