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
export type FaGavelProps = typeof __propDef.props;
export type FaGavelEvents = typeof __propDef.events;
export type FaGavelSlots = typeof __propDef.slots;
export default class FaGavel extends SvelteComponentTyped<FaGavelProps, FaGavelEvents, FaGavelSlots> {
}
export {};
