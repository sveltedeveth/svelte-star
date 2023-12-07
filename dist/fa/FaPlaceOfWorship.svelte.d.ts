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
export type FaPlaceOfWorshipProps = typeof __propDef.props;
export type FaPlaceOfWorshipEvents = typeof __propDef.events;
export type FaPlaceOfWorshipSlots = typeof __propDef.slots;
export default class FaPlaceOfWorship extends SvelteComponentTyped<FaPlaceOfWorshipProps, FaPlaceOfWorshipEvents, FaPlaceOfWorshipSlots> {
}
export {};
