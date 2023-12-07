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
export type FaForumbeeProps = typeof __propDef.props;
export type FaForumbeeEvents = typeof __propDef.events;
export type FaForumbeeSlots = typeof __propDef.slots;
export default class FaForumbee extends SvelteComponentTyped<FaForumbeeProps, FaForumbeeEvents, FaForumbeeSlots> {
}
export {};
