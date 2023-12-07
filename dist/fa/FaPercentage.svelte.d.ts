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
export type FaPercentageProps = typeof __propDef.props;
export type FaPercentageEvents = typeof __propDef.events;
export type FaPercentageSlots = typeof __propDef.slots;
export default class FaPercentage extends SvelteComponentTyped<FaPercentageProps, FaPercentageEvents, FaPercentageSlots> {
}
export {};
