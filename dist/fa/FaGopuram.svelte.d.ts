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
export type FaGopuramProps = typeof __propDef.props;
export type FaGopuramEvents = typeof __propDef.events;
export type FaGopuramSlots = typeof __propDef.slots;
export default class FaGopuram extends SvelteComponentTyped<FaGopuramProps, FaGopuramEvents, FaGopuramSlots> {
}
export {};
