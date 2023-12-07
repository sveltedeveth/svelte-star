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
export type FaThumbsDownProps = typeof __propDef.props;
export type FaThumbsDownEvents = typeof __propDef.events;
export type FaThumbsDownSlots = typeof __propDef.slots;
export default class FaThumbsDown extends SvelteComponentTyped<FaThumbsDownProps, FaThumbsDownEvents, FaThumbsDownSlots> {
}
export {};
