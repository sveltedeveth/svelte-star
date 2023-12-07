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
export type GiTreeSwingProps = typeof __propDef.props;
export type GiTreeSwingEvents = typeof __propDef.events;
export type GiTreeSwingSlots = typeof __propDef.slots;
export default class GiTreeSwing extends SvelteComponentTyped<GiTreeSwingProps, GiTreeSwingEvents, GiTreeSwingSlots> {
}
export {};
