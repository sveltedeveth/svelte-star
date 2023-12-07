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
export type FaVectorSquareProps = typeof __propDef.props;
export type FaVectorSquareEvents = typeof __propDef.events;
export type FaVectorSquareSlots = typeof __propDef.slots;
export default class FaVectorSquare extends SvelteComponentTyped<FaVectorSquareProps, FaVectorSquareEvents, FaVectorSquareSlots> {
}
export {};
