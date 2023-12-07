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
export type FaImdbProps = typeof __propDef.props;
export type FaImdbEvents = typeof __propDef.events;
export type FaImdbSlots = typeof __propDef.slots;
export default class FaImdb extends SvelteComponentTyped<FaImdbProps, FaImdbEvents, FaImdbSlots> {
}
export {};
