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
export type FaSquareFullProps = typeof __propDef.props;
export type FaSquareFullEvents = typeof __propDef.events;
export type FaSquareFullSlots = typeof __propDef.slots;
export default class FaSquareFull extends SvelteComponentTyped<FaSquareFullProps, FaSquareFullEvents, FaSquareFullSlots> {
}
export {};
