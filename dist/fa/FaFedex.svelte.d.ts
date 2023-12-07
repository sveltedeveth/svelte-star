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
export type FaFedexProps = typeof __propDef.props;
export type FaFedexEvents = typeof __propDef.events;
export type FaFedexSlots = typeof __propDef.slots;
export default class FaFedex extends SvelteComponentTyped<FaFedexProps, FaFedexEvents, FaFedexSlots> {
}
export {};
