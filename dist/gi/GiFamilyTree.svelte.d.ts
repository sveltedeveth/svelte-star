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
export type GiFamilyTreeProps = typeof __propDef.props;
export type GiFamilyTreeEvents = typeof __propDef.events;
export type GiFamilyTreeSlots = typeof __propDef.slots;
export default class GiFamilyTree extends SvelteComponentTyped<GiFamilyTreeProps, GiFamilyTreeEvents, GiFamilyTreeSlots> {
}
export {};
