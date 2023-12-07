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
export type FaHddProps = typeof __propDef.props;
export type FaHddEvents = typeof __propDef.events;
export type FaHddSlots = typeof __propDef.slots;
export default class FaHdd extends SvelteComponentTyped<FaHddProps, FaHddEvents, FaHddSlots> {
}
export {};
