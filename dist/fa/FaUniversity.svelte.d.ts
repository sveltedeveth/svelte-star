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
export type FaUniversityProps = typeof __propDef.props;
export type FaUniversityEvents = typeof __propDef.events;
export type FaUniversitySlots = typeof __propDef.slots;
export default class FaUniversity extends SvelteComponentTyped<FaUniversityProps, FaUniversityEvents, FaUniversitySlots> {
}
export {};
