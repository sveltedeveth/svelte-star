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
export type FaRegEditProps = typeof __propDef.props;
export type FaRegEditEvents = typeof __propDef.events;
export type FaRegEditSlots = typeof __propDef.slots;
export default class FaRegEdit extends SvelteComponentTyped<FaRegEditProps, FaRegEditEvents, FaRegEditSlots> {
}
export {};
