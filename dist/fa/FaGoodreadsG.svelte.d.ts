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
export type FaGoodreadsGProps = typeof __propDef.props;
export type FaGoodreadsGEvents = typeof __propDef.events;
export type FaGoodreadsGSlots = typeof __propDef.slots;
export default class FaGoodreadsG extends SvelteComponentTyped<FaGoodreadsGProps, FaGoodreadsGEvents, FaGoodreadsGSlots> {
}
export {};
