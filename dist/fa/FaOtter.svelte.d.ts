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
export type FaOtterProps = typeof __propDef.props;
export type FaOtterEvents = typeof __propDef.events;
export type FaOtterSlots = typeof __propDef.slots;
export default class FaOtter extends SvelteComponentTyped<FaOtterProps, FaOtterEvents, FaOtterSlots> {
}
export {};
