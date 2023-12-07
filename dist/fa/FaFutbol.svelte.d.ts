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
export type FaFutbolProps = typeof __propDef.props;
export type FaFutbolEvents = typeof __propDef.events;
export type FaFutbolSlots = typeof __propDef.slots;
export default class FaFutbol extends SvelteComponentTyped<FaFutbolProps, FaFutbolEvents, FaFutbolSlots> {
}
export {};
