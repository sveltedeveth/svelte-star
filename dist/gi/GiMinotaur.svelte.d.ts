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
export type GiMinotaurProps = typeof __propDef.props;
export type GiMinotaurEvents = typeof __propDef.events;
export type GiMinotaurSlots = typeof __propDef.slots;
export default class GiMinotaur extends SvelteComponentTyped<GiMinotaurProps, GiMinotaurEvents, GiMinotaurSlots> {
}
export {};
