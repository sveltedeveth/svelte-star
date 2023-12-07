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
export type FaMegaportProps = typeof __propDef.props;
export type FaMegaportEvents = typeof __propDef.events;
export type FaMegaportSlots = typeof __propDef.slots;
export default class FaMegaport extends SvelteComponentTyped<FaMegaportProps, FaMegaportEvents, FaMegaportSlots> {
}
export {};
