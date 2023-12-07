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
export type IoMdFitnessProps = typeof __propDef.props;
export type IoMdFitnessEvents = typeof __propDef.events;
export type IoMdFitnessSlots = typeof __propDef.slots;
export default class IoMdFitness extends SvelteComponentTyped<IoMdFitnessProps, IoMdFitnessEvents, IoMdFitnessSlots> {
}
export {};
