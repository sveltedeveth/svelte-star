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
export type FaSearchenginProps = typeof __propDef.props;
export type FaSearchenginEvents = typeof __propDef.events;
export type FaSearchenginSlots = typeof __propDef.slots;
export default class FaSearchengin extends SvelteComponentTyped<FaSearchenginProps, FaSearchenginEvents, FaSearchenginSlots> {
}
export {};
