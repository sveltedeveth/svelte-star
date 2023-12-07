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
export type TiMortarBoardProps = typeof __propDef.props;
export type TiMortarBoardEvents = typeof __propDef.events;
export type TiMortarBoardSlots = typeof __propDef.slots;
export default class TiMortarBoard extends SvelteComponentTyped<TiMortarBoardProps, TiMortarBoardEvents, TiMortarBoardSlots> {
}
export {};
