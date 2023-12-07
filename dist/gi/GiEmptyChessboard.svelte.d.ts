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
export type GiEmptyChessboardProps = typeof __propDef.props;
export type GiEmptyChessboardEvents = typeof __propDef.events;
export type GiEmptyChessboardSlots = typeof __propDef.slots;
export default class GiEmptyChessboard extends SvelteComponentTyped<GiEmptyChessboardProps, GiEmptyChessboardEvents, GiEmptyChessboardSlots> {
}
export {};
