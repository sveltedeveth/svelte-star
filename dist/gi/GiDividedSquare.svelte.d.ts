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
export type GiDividedSquareProps = typeof __propDef.props;
export type GiDividedSquareEvents = typeof __propDef.events;
export type GiDividedSquareSlots = typeof __propDef.slots;
export default class GiDividedSquare extends SvelteComponentTyped<GiDividedSquareProps, GiDividedSquareEvents, GiDividedSquareSlots> {
}
export {};
