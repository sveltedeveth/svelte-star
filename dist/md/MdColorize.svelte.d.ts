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
export type MdColorizeProps = typeof __propDef.props;
export type MdColorizeEvents = typeof __propDef.events;
export type MdColorizeSlots = typeof __propDef.slots;
export default class MdColorize extends SvelteComponentTyped<MdColorizeProps, MdColorizeEvents, MdColorizeSlots> {
}
export {};
