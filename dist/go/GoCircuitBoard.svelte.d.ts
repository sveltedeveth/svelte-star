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
export type GoCircuitBoardProps = typeof __propDef.props;
export type GoCircuitBoardEvents = typeof __propDef.events;
export type GoCircuitBoardSlots = typeof __propDef.slots;
export default class GoCircuitBoard extends SvelteComponentTyped<GoCircuitBoardProps, GoCircuitBoardEvents, GoCircuitBoardSlots> {
}
export {};
