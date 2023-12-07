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
export type FaThumbsUpProps = typeof __propDef.props;
export type FaThumbsUpEvents = typeof __propDef.events;
export type FaThumbsUpSlots = typeof __propDef.slots;
export default class FaThumbsUp extends SvelteComponentTyped<FaThumbsUpProps, FaThumbsUpEvents, FaThumbsUpSlots> {
}
export {};
