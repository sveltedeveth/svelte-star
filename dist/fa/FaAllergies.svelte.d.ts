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
export type FaAllergiesProps = typeof __propDef.props;
export type FaAllergiesEvents = typeof __propDef.events;
export type FaAllergiesSlots = typeof __propDef.slots;
export default class FaAllergies extends SvelteComponentTyped<FaAllergiesProps, FaAllergiesEvents, FaAllergiesSlots> {
}
export {};
