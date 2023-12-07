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
export type IoMdSquareProps = typeof __propDef.props;
export type IoMdSquareEvents = typeof __propDef.events;
export type IoMdSquareSlots = typeof __propDef.slots;
export default class IoMdSquare extends SvelteComponentTyped<IoMdSquareProps, IoMdSquareEvents, IoMdSquareSlots> {
}
export {};
