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
export type GoPrimitiveSquareProps = typeof __propDef.props;
export type GoPrimitiveSquareEvents = typeof __propDef.events;
export type GoPrimitiveSquareSlots = typeof __propDef.slots;
export default class GoPrimitiveSquare extends SvelteComponentTyped<GoPrimitiveSquareProps, GoPrimitiveSquareEvents, GoPrimitiveSquareSlots> {
}
export {};
