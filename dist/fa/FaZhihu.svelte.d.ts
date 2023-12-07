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
export type FaZhihuProps = typeof __propDef.props;
export type FaZhihuEvents = typeof __propDef.events;
export type FaZhihuSlots = typeof __propDef.slots;
export default class FaZhihu extends SvelteComponentTyped<FaZhihuProps, FaZhihuEvents, FaZhihuSlots> {
}
export {};
