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
export type FaAlgoliaProps = typeof __propDef.props;
export type FaAlgoliaEvents = typeof __propDef.events;
export type FaAlgoliaSlots = typeof __propDef.slots;
export default class FaAlgolia extends SvelteComponentTyped<FaAlgoliaProps, FaAlgoliaEvents, FaAlgoliaSlots> {
}
export {};
