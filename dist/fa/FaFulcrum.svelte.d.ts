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
export type FaFulcrumProps = typeof __propDef.props;
export type FaFulcrumEvents = typeof __propDef.events;
export type FaFulcrumSlots = typeof __propDef.slots;
export default class FaFulcrum extends SvelteComponentTyped<FaFulcrumProps, FaFulcrumEvents, FaFulcrumSlots> {
}
export {};
