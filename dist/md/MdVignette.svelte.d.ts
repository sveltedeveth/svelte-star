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
export type MdVignetteProps = typeof __propDef.props;
export type MdVignetteEvents = typeof __propDef.events;
export type MdVignetteSlots = typeof __propDef.slots;
export default class MdVignette extends SvelteComponentTyped<MdVignetteProps, MdVignetteEvents, MdVignetteSlots> {
}
export {};
