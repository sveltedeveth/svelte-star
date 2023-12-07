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
export type FaGgProps = typeof __propDef.props;
export type FaGgEvents = typeof __propDef.events;
export type FaGgSlots = typeof __propDef.slots;
export default class FaGg extends SvelteComponentTyped<FaGgProps, FaGgEvents, FaGgSlots> {
}
export {};
