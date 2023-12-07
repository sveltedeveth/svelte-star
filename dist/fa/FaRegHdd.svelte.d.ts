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
export type FaRegHddProps = typeof __propDef.props;
export type FaRegHddEvents = typeof __propDef.events;
export type FaRegHddSlots = typeof __propDef.slots;
export default class FaRegHdd extends SvelteComponentTyped<FaRegHddProps, FaRegHddEvents, FaRegHddSlots> {
}
export {};
