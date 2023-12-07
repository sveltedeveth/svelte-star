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
export type FaGoodreadsProps = typeof __propDef.props;
export type FaGoodreadsEvents = typeof __propDef.events;
export type FaGoodreadsSlots = typeof __propDef.slots;
export default class FaGoodreads extends SvelteComponentTyped<FaGoodreadsProps, FaGoodreadsEvents, FaGoodreadsSlots> {
}
export {};
