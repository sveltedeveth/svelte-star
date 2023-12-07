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
export type FaJsSquareProps = typeof __propDef.props;
export type FaJsSquareEvents = typeof __propDef.events;
export type FaJsSquareSlots = typeof __propDef.slots;
export default class FaJsSquare extends SvelteComponentTyped<FaJsSquareProps, FaJsSquareEvents, FaJsSquareSlots> {
}
export {};
