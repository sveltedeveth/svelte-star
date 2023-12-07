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
export type FaFaxProps = typeof __propDef.props;
export type FaFaxEvents = typeof __propDef.events;
export type FaFaxSlots = typeof __propDef.slots;
export default class FaFax extends SvelteComponentTyped<FaFaxProps, FaFaxEvents, FaFaxSlots> {
}
export {};
