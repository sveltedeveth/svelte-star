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
export type FaRegFutbolProps = typeof __propDef.props;
export type FaRegFutbolEvents = typeof __propDef.events;
export type FaRegFutbolSlots = typeof __propDef.slots;
export default class FaRegFutbol extends SvelteComponentTyped<FaRegFutbolProps, FaRegFutbolEvents, FaRegFutbolSlots> {
}
export {};
