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
export type MdFitnessCenterProps = typeof __propDef.props;
export type MdFitnessCenterEvents = typeof __propDef.events;
export type MdFitnessCenterSlots = typeof __propDef.slots;
export default class MdFitnessCenter extends SvelteComponentTyped<MdFitnessCenterProps, MdFitnessCenterEvents, MdFitnessCenterSlots> {
}
export {};
