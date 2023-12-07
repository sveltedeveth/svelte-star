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
export type FaUniregistryProps = typeof __propDef.props;
export type FaUniregistryEvents = typeof __propDef.events;
export type FaUniregistrySlots = typeof __propDef.slots;
export default class FaUniregistry extends SvelteComponentTyped<FaUniregistryProps, FaUniregistryEvents, FaUniregistrySlots> {
}
export {};
