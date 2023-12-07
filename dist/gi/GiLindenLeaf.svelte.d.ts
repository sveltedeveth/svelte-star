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
export type GiLindenLeafProps = typeof __propDef.props;
export type GiLindenLeafEvents = typeof __propDef.events;
export type GiLindenLeafSlots = typeof __propDef.slots;
export default class GiLindenLeaf extends SvelteComponentTyped<GiLindenLeafProps, GiLindenLeafEvents, GiLindenLeafSlots> {
}
export {};
