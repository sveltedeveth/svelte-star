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
export type FaMailBulkProps = typeof __propDef.props;
export type FaMailBulkEvents = typeof __propDef.events;
export type FaMailBulkSlots = typeof __propDef.slots;
export default class FaMailBulk extends SvelteComponentTyped<FaMailBulkProps, FaMailBulkEvents, FaMailBulkSlots> {
}
export {};
