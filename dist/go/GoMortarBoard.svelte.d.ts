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
export type GoMortarBoardProps = typeof __propDef.props;
export type GoMortarBoardEvents = typeof __propDef.events;
export type GoMortarBoardSlots = typeof __propDef.slots;
export default class GoMortarBoard extends SvelteComponentTyped<GoMortarBoardProps, GoMortarBoardEvents, GoMortarBoardSlots> {
}
export {};
