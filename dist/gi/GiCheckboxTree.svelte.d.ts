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
export type GiCheckboxTreeProps = typeof __propDef.props;
export type GiCheckboxTreeEvents = typeof __propDef.events;
export type GiCheckboxTreeSlots = typeof __propDef.slots;
export default class GiCheckboxTree extends SvelteComponentTyped<GiCheckboxTreeProps, GiCheckboxTreeEvents, GiCheckboxTreeSlots> {
}
export {};
